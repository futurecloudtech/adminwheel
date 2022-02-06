import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  settingArray : any = {
    title : '',
    subtitle : '',
    content : '',
    term : '',
    policy : ''
  }

  wheel = [];

  constructor(private adminApiServies:AdminapiService,private toast:ToastController,private alertController:AlertController) { }

  ngOnInit() {
    this.getInfo();
    this.getWheelPrize();
  }

  getWheelPrize(){
    this.adminApiServies.getPrize().subscribe((res:any)=>{
        if(res.status){
            this.wheel = res.message;
        }
    });
  }

  getInfo(){
    this.adminApiServies.getInfo().subscribe((res:any)=>{
      if(res.status){
          this.settingArray = JSON.parse(decodeURIComponent(window.atob(res.message.data)));
      }else{
        this.settingArray = {
          title : '',
          subtitle : '',
          content : '',
          term : '',
          policy : ''
        }
      
      }
    },error=>{
      this.settingArray = {
        title : '',
        subtitle : '',
        content : '',
        term : '',
        policy : ''
      }
    })
  }

  addPrize(){
    this.wheel.push(
      {
        prizename : '',
        desc : '',
        chance : 0,
        img:'',
        status : 'new'
      } 
    )
  }

async  removePrize(index){
    const alert = await this.alertController.create({
      header: 'Delete Alert!',
      message: 'Are you sure you wan to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            if(this.wheel[index].status == 'old'){
              this.wheel[index].is_deleted = 'T';
            }else{
              this.wheel.splice(index,1);
            }
            this.presentToast('Sucessful');
          }
        }
      ]
    });

    await alert.present();

  }

  SaveInfo(){

      this.adminApiServies.updateInfo(this.settingArray).subscribe((res:any)=>{
        this.presentToast('Success')
      })
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  saveWheel(){
    this.adminApiServies.saveWheel(this.wheel).subscribe((res:any)=>{
        if(res.status){
          this.presentToast('Successful')
        }else{
          this.presentToast('Failed')
        }
    })
  }

}
