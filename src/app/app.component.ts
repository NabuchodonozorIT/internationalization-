import {Component} from '@angular/core';
import {CustomTranslateService} from './services/custom-translate/custom-translate.service';
import {Language} from './models/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public language: string;
  public availableLanguages: Language[];
  public isSearchAvailable = false;
  public isCommentingAvailable = false;

  constructor(private customTranslateService: CustomTranslateService) {
    this.availableLanguages = this.customTranslateService.getAvailableLanguages();
    this.language = this.customTranslateService.selectedLanguage;
  }

  public changeLanguage(language: string): void {
    this.customTranslateService.changeLanguage(language);
  }

}
