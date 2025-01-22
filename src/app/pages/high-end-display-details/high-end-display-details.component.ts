import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { HeaderSecondDisplayModule } from "../../core/header-second-display/header-second-display.module";
import { CarouselControlService } from "../../services/common/carousel-control.service";
import { ReloadService } from "../../services/common/reload.service";
import { SwiperModule } from "swiper/angular";

@Component({
  selector: "app-high-end-display-details",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactUsModule,
    HeaderSecondDisplayModule,
    SwiperModule,
  ],
  templateUrl: "./high-end-display-details.component.html",
  styleUrl: "./high-end-display-details.component.scss",
})
export class HighEndDisplayDetailsComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  // get about section
  @ViewChild("serviceSyNest") serviceSyNest?: ElementRef;
  homeTopAnimation: boolean = false;

  constructor(
    private carouselControl: CarouselControlService,
    private reload: ReloadService
  ) {
    // go to home-sy-nest reload service
    this.reload.refreshSyNestService$.subscribe((res) => {
      this.scrollAbout();
    });
  }

  scrollHandle(type: string) {
    switch (true) {
      case type === "serviceSyNest":
        this.reload.needRefreshSyNestService$();
        break;
    }
  }

  /**
   * scroll to about section
   */
  scrollAbout() {
    let ele = this.serviceSyNest?.nativeElement as HTMLElement;
    ele.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }
}
