import { Component } from "@angular/core";

@Component({
  selector: "server-component",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  serverName = "Server Test";
  serverStatus = "Offline";
}
