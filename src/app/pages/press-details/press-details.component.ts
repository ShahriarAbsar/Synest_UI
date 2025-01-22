import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HeaderModule } from "../../core/header/header.module";
import { ContactUsModule } from "../../shared/components/contact-us/contact-us.module";

import pressData from "../../core/db/press_data.json";
import conferenceData from "../../core/db/conference_data.json";

@Component({
  selector: "app-press-details",
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderModule, ContactUsModule],
  templateUrl: "./press-details.component.html",
  styleUrl: "./press-details.component.scss",
})
export class PressDetailsComponent {
  get press_articles() {
    return pressData.data;
  }

  get conference_articles() {
    return conferenceData.data;
  }

  data_detailed_page: any[] = [];
  selectedType = "press";
  selectedItemIdx = 0;
  selectedItem: any = null;
  column_paragraph_number = 0;
  next = -1;
  previous = -1;

  headerTitle = "";
  headerlink: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedType = params["type"];
      if (this.selectedType == "press") {
        this.data_detailed_page = this.press_articles.slice();
      } else if (this.selectedType == "conference") {
        this.data_detailed_page = this.conference_articles.slice();
      }

      this.selectedItemIdx = Number(params["idx"]);
      this.column_paragraph_number = Math.ceil(
        this.data_detailed_page[this.selectedItemIdx].paragraphs.length / 2.0
      );
      this.previous = this.selectedItemIdx - 1;
      this.next = this.selectedItemIdx + 1;
      if (this.next == this.data_detailed_page.length) this.next = -1;

      this.selectedItem = this.data_detailed_page[this.selectedItemIdx];
      this.headerTitle = this.capitalizeFirstLetter(this.selectedType);
      this.headerlink = ["/", this.selectedType];
    });
  }

  capitalizeFirstLetter(curstring: string) {
    return curstring.charAt(0).toUpperCase() + curstring.slice(1);
  }
}
