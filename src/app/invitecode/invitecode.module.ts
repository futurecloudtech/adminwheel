import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitecodePageRoutingModule } from './invitecode-routing.module';

import { InvitecodePage } from './invitecode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitecodePageRoutingModule
  ],
  declarations: [InvitecodePage]
})
export class InvitecodePageModule {}
