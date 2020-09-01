import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";
import localePt from "@angular/common/locales/pt";

// COMPONENTS
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

// MODULES
import { AppRoutingModule } from "./app.routing";

registerLocaleData(localePt, "pt");
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
