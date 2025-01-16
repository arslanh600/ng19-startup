import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private defaultLang = 'de';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLang);
    const savedLang = localStorage.getItem('language') || this.defaultLang;
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
    document.documentElement.lang = lang; 
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Handle RTL for Arabic
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
