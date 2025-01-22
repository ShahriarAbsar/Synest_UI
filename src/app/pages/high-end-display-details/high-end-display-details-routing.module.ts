import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighEndDisplayDetailsComponent } from './high-end-display-details.component';

const routes: Routes = [
  {
    path:"",
    component:HighEndDisplayDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighEndDisplayDetailsRoutingModule { }
