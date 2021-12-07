import {Component} from '@angular/core';
import {CustomTranslateService, Language} from './services/custom-translate/custom-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public language = 'en';

  public availableLanguages: Language[];

  constructor(private customTranslateService: CustomTranslateService) {
    this.availableLanguages = this.customTranslateService.getAvailableLanguages();
  }

  public changeLanguage(language: string): void {
    this.customTranslateService.changeLanguage(language);
  }

}
