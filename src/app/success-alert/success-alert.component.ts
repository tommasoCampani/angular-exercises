import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styles: [
    `
      p {
        width: 50%;
        text-align: center;
      }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
