import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SpinnerComponent],
  template: `
  <router-outlet> 
    <app-spinner /> 
  </router-outlet>`,
})
export class AppComponent {
  title = 'ng19-startup';
  direction = 'ltr';
  currentLang = 'en';
}
