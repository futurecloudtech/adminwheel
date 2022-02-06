import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminauthGuardService } from '../services/adminauth-guard.service';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/admin-login',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TabsPage,
    // redirectTo: '/admin-login',
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../adminpanel/adminpanel.module').then( m => m.AdminpanelPageModule),
            canActivate: [AdminauthGuardService]
          }
        ]
      }, {
        path: 'members',
        children: [
          {
            path: '',
            loadChildren: () => import('../members/members.module').then( m => m.MembersPageModule),
            canActivate: [AdminauthGuardService]
          }
        ]
      }, {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule),
            canActivate: [AdminauthGuardService]
          }
        ]
      }, {
        path: 'invitecode',
        children: [
          {
            path: '',
            loadChildren: () => import('../invitecode/invitecode.module').then( m => m.InvitecodePageModule),
            canActivate: [AdminauthGuardService]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
