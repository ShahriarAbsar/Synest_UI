import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header-third",
  standalone: true,
  imports: [CommonModule, HeaderSidebarModule, RouterModule],
  templateUrl: "./header-third.component.html",
  styleUrl: "./header-third.component.scss",
})
export class HeaderThirdComponent implements OnInit {
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
