import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { SwiperModule } from "swiper/angular";
import { RouterModule } from "@angular/router";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { CarouselControlService } from "../../services/common/carousel-control.service";
import { ReloadService } from "../../services/common/reload.service";
import { FooterModule } from "../../shared/components/footer/footer.module";
import { HeaderSecondSecurityModule } from "../../core/header-second-security/header-second-security.module";

@Component({
  selector: "app-security-service",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactUsModule,
    FooterModule,
    HeaderSecondSecurityModule,
    SwiperModule,
  ],
  templateUrl: "./security-service.component.html",
  styleUrl: "./security-service.component.scss",
})
export class SecurityServiceComponent {
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
