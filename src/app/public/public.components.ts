import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PublicLayoutModule } from "../layouts/public/public-layout.module";

@Component({
  selector: 'app-public',
  imports:[RouterOutlet,PublicLayoutModule],
  template: `
  <app-header/>
  <router-outlet/>
  <app-footer />
  `
})
export class PublicComponent {

}
