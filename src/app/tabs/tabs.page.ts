import { Component, OnInit } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(  private authenticationService: AdminauthenticationService,private router:Router  ) { }

  ngOnInit() {
    
this.authenticationService.authState.subscribe(state => {
      if (state) {
        this.router.navigate(['tabs']);
      }else{
        this.router.navigate(['admin-login']);
      }
    });
  }

  
}
