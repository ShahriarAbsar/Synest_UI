import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { HeaderThirdSecurityModule } from "../../core/header-third-security/header-third-security.module";

@Component({
  selector: "app-security-service-details",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactUsModule,
    HeaderThirdSecurityModule,
  ],
  templateUrl: "./security-service-details.component.html",
  styleUrl: "./security-service-details.component.scss",
})
export class SecurityServiceDetailsComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}
