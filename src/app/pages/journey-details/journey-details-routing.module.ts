import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JourneyDetailsComponent } from "./journey-details.component";

const routes: Routes = [
  {
    path: "",
    component: JourneyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyDetailsRoutingModule {}
