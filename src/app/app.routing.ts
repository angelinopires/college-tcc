import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "user",
    loadChildren: "./modules/user/user.module#UserModule",
  },
  {
    path: "admin",
    loadChildren: "./modules/admin/admin.module#AdminModule",
  },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
