import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.page.html',
  styleUrls: ['./adminpanel.page.scss'],
})
export class AdminpanelPage implements OnInit {

  TotalMember = 0;
  MemberList = [];
  TotalInviteCode = 0;

  constructor(
    private adminApiServies:AdminapiService,
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.getTotalMember();
    this.getLatestMember();
    this.getTotalInviteCode();
  }

  getTotalMember(){
    this.adminApiServies.getTotalMembers().subscribe((res:any)=>{
      if(res.status){
        this.TotalMember = res.message.Total;
      }
    })
  }

  getLatestMember(){
    this.adminApiServies.getTop5NewMember().subscribe((res:any)=>{
      if(res.status){
        this.MemberList = res.message;
      }
    })
  }

  getTotalInviteCode(){
    this.adminApiServies.getTotalInviteCode().subscribe((res:any)=>{
      if(res.status){
        this.TotalInviteCode = res.message.Total;
      }
    })
  }

}
