import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadingPageRoutingModule } from './reading-routing.module';

import { ReadingPage } from './reading.page';
import { NavheaderComponent } from '../shared/components/navheader/navheader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadingPageRoutingModule
  ],
  declarations: [ReadingPage, NavheaderComponent]
})
export class ReadingPageModule {}
