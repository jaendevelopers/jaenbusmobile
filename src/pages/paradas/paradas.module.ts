import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParadasPage } from './paradas';

@NgModule({
  declarations: [
    ParadasPage,
  ],
  imports: [
    IonicPageModule.forChild(ParadasPage),
  ],
})
export class ParadasPageModule {}
