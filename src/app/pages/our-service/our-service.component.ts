import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SwiperModule } from "swiper/angular";
import { HeaderSecondModule } from "../../core/header-second/header-second.module";
import { CarouselControlService } from "../../services/common/carousel-control.service";
import { ReloadService } from "../../services/common/reload.service";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { FooterModule } from "../../shared/components/footer/footer.module";

@Component({
  selector: "app-our-service",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactUsModule,
    FooterModule,
    HeaderSecondModule,
    SwiperModule,
  ],
  templateUrl: "./our-service.component.html",
  styleUrl: "./our-service.component.scss",
})
export class OurServiceComponent {
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
    var headerOffset = (document.getElementsByClassName("header-second")[0] as HTMLElement).offsetHeight;
    var elementPosition = ele.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }
}
