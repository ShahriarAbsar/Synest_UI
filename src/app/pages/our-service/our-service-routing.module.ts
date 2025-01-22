import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServiceComponent } from './our-service.component';

const routes: Routes = [
  {
    path:"",
    component:OurServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServiceRoutingModule { }
