import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitecodePage } from './invitecode.page';

const routes: Routes = [
  {
    path: '',
    component: InvitecodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitecodePageRoutingModule {}
