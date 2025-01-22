import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { HeaderThirdSecurityModule } from "../../core/header-third-security/header-third-security.module";

import { HostListener, OnInit, ViewChild } from "@angular/core";
// import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
// import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";
import { HeaderSecondComponent } from "../../core/header-second/header-second.component";
import { HeaderSidebarComponent } from "../../core/header-sidebar/header-sidebar.component";

@Component({
  selector: "app-access-service-details",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactUsModule,
    HeaderThirdSecurityModule,
  ],
  templateUrl: "./access-service-details.component.html",
  styleUrl: "./access-service-details.component.scss",
})
export class AccessServiceDetailsComponent implements OnInit {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  isWindowScroll: boolean = false;

  @ViewChild("headerSidebar") headerSidebar?: HeaderSidebarComponent;

  constructor() {}

  ngOnInit(): void {}

  onOpenSlider() {
    this.headerSidebar?.onIsToggle();
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.isWindowScroll = true;
    } else {
      this.isWindowScroll = false;
    }
  }
}
