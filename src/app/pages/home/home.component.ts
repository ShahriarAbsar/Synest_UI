import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SwiperModule } from "swiper/angular";
import { ReloadService } from "../../services/common/reload.service";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { FooterModule } from "../../shared/components/footer/footer.module";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    FooterModule,
    ContactUsModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, AfterViewInit {
  // get about section
  @ViewChild("homeSyNest") homeSyNest?: ElementRef;
  homeTopAnimation: boolean = false;
  showHeroHiddenElems: boolean = false;

  allAnimateElement: any = [];

  constructor(private reload: ReloadService) {
    // go to home-sy-nest reload service
    this.reload.refreshSyNestHome$.subscribe((res) => {
      this.scrollAbout();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof document !== "undefined") {
      this.allAnimateElement = document.getElementsByClassName(
        "animate-mission-home-second-first"
      );
    }

    this.onHomeTopAnimation();
  }

  onHomeTopAnimation() {
    setTimeout(() => {
      this.homeTopAnimation = true;
    }, 2000);
    setTimeout(() => {
      this.showHeroHiddenElems = true;
    }, 3000);
  }

  scrollHandle(type: string) {
    //alert(type);
    switch (true) {
      case type === "homeSyNest":
        this.reload.needRefreshSyNestHome$();
        break;
    }
  }

  /**
   * scroll to about section
   */
  scrollAbout() {
    let ele = this.homeSyNest?.nativeElement as HTMLElement;
    ele.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start",
    });
  }

  isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  @HostListener("window:scroll")
  handleScroll() {
    for (let i = 0; i < this.allAnimateElement.length; i++) {
      if (
        this.isInViewport(this.allAnimateElement[i]) &&
        this.allAnimateElement[i].getAttribute("data-animate") === "false"
      ) {
        this.allAnimateElement[i].classList.add(
          "animate-mission-home-second-second"
        );
      }
    }
  }
}
