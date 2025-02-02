import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuratorServiceDetailsComponent } from './curator-service-details.component';

const routes: Routes = [
  {
    path:'',
    component:CuratorServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratorServiceDetailsRoutingModule { }
