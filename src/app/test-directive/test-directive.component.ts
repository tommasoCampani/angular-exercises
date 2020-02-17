import { Component, OnInit } from "@angular/core";

@Component({
  selector: "test-directive",
  templateUrl: "./test-directive.component.html",
  styleUrls: ["./test-directive.component.css"]
})
export class TestDirectiveComponent implements OnInit {
  _displayDetails: boolean;
  _logs: Array<object> = [];
  _count: number = 0;

  constructor() {
    this._displayDetails = false;
    this._count = 0;
  }

  get displayDetails() {
    return this._displayDetails;
  }
  set displayDetails(value) {
    this._displayDetails = value;
  }

  get logs() {
    return this._logs;
  }

  onDisplayClick = () => {
    this.displayDetails = !this.displayDetails;
    this._count++;
    this.logs.push({
      id: this._count,
      text: "button toggle",
      state: this.displayDetails ? "show" : "hide",
      date: new Date().toLocaleDateString()
    });
  };

  getLogBackground = idx => {
    if (idx >= 4) return "blue";
    else return "transparent";
  };

  printLog = log => {
    return `Id: ${log.id} ${log.text} in state ${log.state} - ${log.date}`;
  };

  ngOnInit(): void {}
}
