import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { PilsComponent } from './pils/pils.component';
import { PilComponent } from './pil/pil.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PilsComponent, PilComponent, WarningAlertComponent, SuccessAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
