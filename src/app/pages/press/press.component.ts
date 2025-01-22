import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HeaderModule } from "../../core/header/header.module";

import pressData from "../../core/db/press_data.json";
import conferenceData from "../../core/db/conference_data.json";
import reviewData from "../../core/db/review_data.json";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-press",
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderModule, ContactUsModule],
  templateUrl: "./press.component.html",
  styleUrl: "./press.component.scss",
})
export class PressComponent {
  youtubeSettings = "&controls=0&fs=0&modestbranding=1&playsinline=1";

  get press_articles() {
    return pressData.data;
  }

  get conference_articles() {
    return conferenceData.data;
  }

  get review_articles() {
    return reviewData.data;
  }

  data: any[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  page_title = "";
  selectedType = "press";
  headerTitle = "";
  headerlink: string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedType = params["type"];
      if (this.selectedType == "press") {
        this.page_title = "What the Media is Saying About Synest";
        this.data = this.press_articles.slice();
      } else if (this.selectedType == "conference") {
        this.page_title = "Highlights from Synest Conferences";
        this.data = this.conference_articles.slice();
      } else if (this.selectedType == "review") {
        this.page_title = "Experiences from Our Clients";
        this.data = this.review_articles.slice();
      }

      this.headerTitle = this.capitalizeFirstLetter(this.selectedType);
      this.headerlink = ["/", this.selectedType];

      if (this.selectedType != "review") {
        this.truncateTitles(60);
      } else {
        this.sanitizeAllURL();
      }
    });
  }
  sanitizeAllURL() {
    for (const item of this.data) {
      item.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        item.url + this.youtubeSettings
      );
    }
  }

  truncateTitles(limit: number) {
    for (let item of this.data) {
      item.truncated_title = item.title.substring(0, limit) + "...";
    }
  }

  capitalizeFirstLetter(curstring: string) {
    return curstring.charAt(0).toUpperCase() + curstring.slice(1);
  }
}
