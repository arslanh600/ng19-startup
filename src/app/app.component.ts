import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SpinnerComponent,TranslateModule],
  template: `
{{"homepageTitle" | translate }}
  <router-outlet> 
    <app-spinner /> 
  </router-outlet>`,
})
export class AppComponent {
  defualtLanguage = environment.defaultLang;
  constructor(private lang:LanguageService) {
    lang.setLanguage(this.defualtLanguage ?? 'en');
  }
}
