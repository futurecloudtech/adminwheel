import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AdminapiService } from '../services/adminapi.service';
import { AdminauthenticationService } from '../services/adminauthentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  email = '';

  constructor(
    private adminApiServies:AdminapiService,
    private toast : ToastController,
    private router : Router,
    private authService : AdminauthenticationService
    ) { }

  ngOnInit() {
  }

  LoginByEmail(email){
    this.adminApiServies.getAdminByEmail(email).subscribe((res:any)=>{
      if(res.status){
        this.presentToast("Successful");
        this.authService.login(email);
        // this.router.navigate(["tabs"]);
      }
    },error=>{
      this.presentToast("User Not Found");
    })
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
