import { CommonModule } from "@angular/common";
import { Component, HostListener, Input, ViewChild } from "@angular/core";
import { HeaderSidebarComponent } from "../header-sidebar/header-sidebar.component";
import { HeaderSidebarModule } from "../header-sidebar/header-sidebar.module";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, HeaderSidebarModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isWindowScroll: boolean = false;

  @ViewChild("headerSidebar") headerSidebar?: HeaderSidebarComponent;

  @Input() link: string[] = ["/"];
  @Input() headerText = "";
  @Input() fragment = "homeSyNest";


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
