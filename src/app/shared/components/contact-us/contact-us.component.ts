import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  allAnimateElement: any = [];
 
  ngAfterViewInit(): void {
    if(typeof document !== 'undefined'){
      this.allAnimateElement = document.getElementsByClassName('animate-mission');
    }
    
  }

  isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  @HostListener("window:scroll")
  handleScroll() {
    for (let i = 0; i < this.allAnimateElement.length; i++) {
      if (this.isInViewport(this.allAnimateElement[i]) && this.allAnimateElement[i].getAttribute('data-animate') === 'false') {
        this.allAnimateElement[i].classList.add('active-animation');
      }
    }
  }
}
