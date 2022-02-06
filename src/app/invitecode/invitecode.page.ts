import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-invitecode',
  templateUrl: './invitecode.page.html',
  styleUrls: ['./invitecode.page.scss'],
})
export class InvitecodePage implements OnInit {

  CodeList=[];
  lastgen = "-";

  constructor(  private adminApiServies:AdminapiService,private toast:ToastController) { }

  ngOnInit() {

    this.getInviteList();
  }

  generateCode(){
    this.adminApiServies.getGenerateCode().subscribe((res:any)=>{
      if(res.status){
        this.lastgen = res.message;
        this.presentToast("Successful");
        this.getInviteList();
      }
    })
  }

  getInviteList(){
    this.adminApiServies.getInviteCodeList().subscribe((res:any)=>{
      if(res.status){
        this.CodeList = res.message;
      }
    })
  }

  copy(){
  navigator.clipboard.writeText(this.lastgen);
  this.presentToast('Copied to clipboard')
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
