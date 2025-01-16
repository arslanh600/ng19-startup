import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SpinnerComponent],
  template: `
{{title}}
  <router-outlet> 
    <app-spinner /> 
  </router-outlet>`,
})
export class AppComponent {
  title = environment.appTitle;
  direction = 'ltr';
  currentLang = 'en';
}
