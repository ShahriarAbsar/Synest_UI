import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReloadService {
  refreshSyNestHome = new Subject();
  refreshSyNestService = new Subject();

  constructor() {}

  // scroll about-us section
  get refreshSyNestHome$() {
    return this.refreshSyNestHome;
  }

  needRefreshSyNestHome$() {
    this.refreshSyNestHome.next(true);
  }

  // scroll about-us section
  get refreshSyNestService$() {
    return this.refreshSyNestHome;
  }

  needRefreshSyNestService$() {
    this.refreshSyNestHome.next(true);
  }
}
