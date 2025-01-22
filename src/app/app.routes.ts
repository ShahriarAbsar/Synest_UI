import { Routes } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";
import { MedicalProductDetailsComponent } from "./pages/medical-product-details/medical-product-details.component";

export const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/home/home-routing.module").then(
            (m) => m.HomeRoutingModule
          ),
      },
      {
        path: "our-service",
        loadChildren: () =>
          import("./pages/our-service/our-service-routing.module").then(
            (m) => m.OurServiceRoutingModule
          ),
      },
      {
        path: "medical-service-details",
        loadChildren: () =>
          import(
            "./pages/medical-service-details/medical-service-details-routing.module"
          ).then((m) => m.MedicalServiceDetailsRoutingModule),
      },
      {
        path: "curator-service-details",
        loadChildren: () =>
          import(
            "./pages/curator-service-details/curator-service-details-routing.module"
          ).then((m) => m.CuratorServiceDetailsRoutingModule),
      },
      {
        path: "security-service",
        loadChildren: () =>
          import(
            "./pages/security-service/security-service-routing.module"
          ).then((m) => m.SecurityServiceRoutingModule),
      },
      {
        path: "security-service-details",
        loadChildren: () =>
          import(
            "./pages/security-service-details/security-service-details-routing.module"
          ).then((m) => m.SecurityServiceDetailsRoutingModule),
      },
      {
        path: "access-service-details",
        loadChildren: () =>
          import(
            "./pages/access-service-details/access-service-details-routing.module"
          ).then((m) => m.AccessServiceDetailsRoutingModule),
      },
      {
        path: "high-end-display-details",
        loadChildren: () =>
          import(
            "./pages/high-end-display-details/high-end-display-details-routing.module"
          ).then((m) => m.HighEndDisplayDetailsRoutingModule),
      },
      {
        path: "medical-product-details",
        loadComponent: () =>
          import(
            "./pages/medical-product-details/medical-product-details.component"
          ).then((c) => c.MedicalProductDetailsComponent),
      },
      {
        path: "journey",
        loadChildren: () =>
          import("./pages/journey-details/journey-details.module").then(
            (m) => m.JourneyDetailsModule
          ),
      },
      {
        path: ":type",
        loadComponent: () =>
          import("./pages/press/press.component").then((c) => c.PressComponent),
      },
      {
        path: ":type/:idx",
        loadComponent: () =>
          import("./pages/press-details/press-details.component").then(
            (c) => c.PressDetailsComponent
          ),
      },
    ],
  },
];
