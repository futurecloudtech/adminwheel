import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  memberList = [];
  filterData = [];
  searchTerm = '';
  constructor(  private adminApiServies:AdminapiService,private toast:ToastController) { }

  ngOnInit() {
    this.getAllMemberList();
  }

  
  getAllMemberList(){
    this.adminApiServies.getAllMemberList().subscribe((res:any)=>{
      if(res.status){
        this.memberList = res.message;
        this.filterData = res.message;
      }
    })
  }

  handleInput(event) {
    if (!event) {
      this.filterData = [...this.memberList];
    } else {
      this.filterData = this.memberList.filter((res) => {
        console.log(res)
        return (res.phone_no.includes(event) || res.email.includes(event) || res.extra_id.includes(event));
      })
    }
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
