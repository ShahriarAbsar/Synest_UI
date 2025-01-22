import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessServiceDetailsComponent } from './access-service-details.component';

const routes: Routes = [
  {
    path:"",
    component:AccessServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessServiceDetailsRoutingModule { }
