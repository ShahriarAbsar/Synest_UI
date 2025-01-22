import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderModule } from "../../core/header/header.module";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";

@Component({
  selector: "app-journey-details",
  standalone: true,
  imports: [CommonModule, HeaderModule, ContactUsModule],
  templateUrl: "./journey-details.component.html",
  styleUrl: "./journey-details.component.scss",
})
export class JourneyDetailsComponent {}
