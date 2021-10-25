import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterinfoPage } from './registerinfo.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterinfoPageRoutingModule {}
