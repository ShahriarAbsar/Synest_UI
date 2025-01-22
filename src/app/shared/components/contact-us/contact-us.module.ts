import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactUsComponent
  ],
  exports:[
    ContactUsComponent
  ]
})
export class ContactUsModule { }
