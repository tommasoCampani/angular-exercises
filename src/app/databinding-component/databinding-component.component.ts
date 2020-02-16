import { Component, OnInit } from "@angular/core";

@Component({
  selector: "databinding-component",
  templateUrl: "./databinding-component.component.html",
  styleUrls: ["./databinding-component.component.css"]
})
export class DatabindingComponentComponent implements OnInit {
  username: string = "";

  onResetUser = () => {
    this.username = "";
  };

  constructor() {}

  ngOnInit(): void {}
}
