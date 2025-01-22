import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header-second",
  standalone: true,
  imports: [
    CommonModule,
    HeaderSecondComponent,
    HeaderSidebarModule,
    RouterModule,
  ],
  templateUrl: "./header-second.component.html",
  styleUrl: "./header-second.component.scss",
})
export class HeaderSecondComponent implements OnInit {
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
