import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header-sidebar.component.html",
  styleUrl: "./header-sidebar.component.scss",
})
export class HeaderSidebarComponent {
  isToggle: boolean = false;

  onIsToggle() {
    this.isToggle = !this.isToggle;
  }
}
