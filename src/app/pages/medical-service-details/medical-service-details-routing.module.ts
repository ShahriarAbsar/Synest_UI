import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalServiceDetailsComponent } from './medical-service-details.component';

const routes: Routes = [
  {
    path:"",
    component:MedicalServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalServiceDetailsRoutingModule { }
