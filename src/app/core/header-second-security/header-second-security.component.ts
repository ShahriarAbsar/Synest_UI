import { Component, HostListener, ViewChild } from "@angular/core";
import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
import { CommonModule } from "@angular/common";
import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header-second-security",
  standalone: true,
  imports: [CommonModule, HeaderSidebarModule, RouterModule],
  templateUrl: "./header-second-security.component.html",
  styleUrl: "./header-second-security.component.scss",
})
export class HeaderSecondSecurityComponent {
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
