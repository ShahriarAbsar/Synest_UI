import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityServiceDetailsComponent } from './security-service-details.component';

const routes: Routes = [
  {
    path:"",
    component:SecurityServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityServiceDetailsRoutingModule { }
