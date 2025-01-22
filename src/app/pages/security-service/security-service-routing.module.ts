import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityServiceComponent } from './security-service.component';

const routes: Routes = [
  {
    path:"",
    component:SecurityServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityServiceRoutingModule { }
