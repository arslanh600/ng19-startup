import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadTranslations } from '@angular/localize';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLang = 'en';
  private languageChanged = new BehaviorSubject<string>(this.currentLang);
  languageChanged$ = this.languageChanged.asObservable();

  constructor(private http: HttpClient) {}

  setLanguage(lang: string): Promise<void> {
    return this.http
      .get(`/assets/i18n/${lang}.json`)
      .toPromise()
      .then((translations: any) => {
        loadTranslations(translations); // Load translations
        this.currentLang = lang;

        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Notify subscribers
        this.languageChanged.next(lang);
      });
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }
}
