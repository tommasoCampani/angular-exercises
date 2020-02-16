import { Component } from "@angular/core";

@Component({
  selector: "server-component",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  _allowAddServer: boolean = false;
  _serverName: number = 0;
  _serverDescription: string = "";
  _serverStatus: string = "offline";

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  handleAddServer = () => {
    this.serverStatus = this.serverStatus === "online" ? "offline" : "online";
  };

  handleInputChange = (e: Event) => {
    this.serverName = Number((<HTMLInputElement>e.target).value);
  };

  get allowAddServer() {
    return this._allowAddServer;
  }
  set allowAddServer(value) {
    this._allowAddServer = value;
  }

  get serverName() {
    return this._serverName;
  }
  set serverName(value) {
    this._serverName = value;
  }

  get serverDescription() {
    return this._serverDescription;
  }
  set serverDescription(value) {
    this._serverDescription = value;
  }

  get serverStatus() {
    return this._serverStatus;
  }
  set serverStatus(value) {
    this._serverStatus = value;
  }
}
