import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterinfoPageRoutingModule } from './registerinfo-routing.module';

import { RegisterinfoPage } from './registerinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterinfoPageRoutingModule
  ],
  declarations: [RegisterinfoPage]
})
export class RegisterinfoPageModule {}
