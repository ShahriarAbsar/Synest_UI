import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderThirdModule } from "../../core/header-third/header-third.module";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";

@Component({
  selector: "app-curator-service-details",
  standalone: true,
  imports: [CommonModule, RouterModule, ContactUsModule, HeaderThirdModule],
  templateUrl: "./curator-service-details.component.html",
  styleUrl: "./curator-service-details.component.scss",
})
export class CuratorServiceDetailsComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}
