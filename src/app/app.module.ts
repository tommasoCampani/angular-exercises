import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PilsComponent } from "./pils/pils.component";
import { PilComponent } from "./pil/pil.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { ServerComponent } from "./server-component/server.component";
import { DatabindingComponentComponent } from './databinding-component/databinding-component.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PilsComponent,
    PilComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    DatabindingComponentComponent,
    TestDirectiveComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
