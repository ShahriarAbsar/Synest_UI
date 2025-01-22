import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { HeaderThirdModule } from "../../core/header-third/header-third.module";

@Component({
  selector: "app-medical-product-details",
  standalone: true,
  imports: [CommonModule, RouterModule, ContactUsModule, HeaderThirdModule],
  templateUrl: "./medical-product-details.component.html",
  styleUrl: "./medical-product-details.component.scss",
})
export class MedicalProductDetailsComponent {
  showExtraText = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}
