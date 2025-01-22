import { Component, HostListener, ViewChild } from "@angular/core";
import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";

@Component({
  selector: "app-header-third-security",
  standalone: true,
  imports: [CommonModule, HeaderSidebarModule, RouterModule],
  templateUrl: "./header-third-security.component.html",
  styleUrl: "./header-third-security.component.scss",
})
export class HeaderThirdSecurityComponent {
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
