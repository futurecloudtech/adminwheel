import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthenticationService } from './services/adminauthentication.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage,private adminauthenticationService:AdminauthenticationService,private router:Router) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.adminauthenticationService.authState.subscribe(state => {
      if (state) {
        this.router.navigate(['tabs']);
      }else{
        this.router.navigate(['admin-login']);
      }
    });
    

  }
}
