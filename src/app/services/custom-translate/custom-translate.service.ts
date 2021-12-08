import {Injectable} from '@angular/core';
import {FileLoaderService} from '../file-loader/file-loader.service';
import {Language} from '../../models/language';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  public selectedLanguage: string;
  public availableLanguages = [
    {id: 'en', name: 'English'},
    {id: 'pl', name: 'Polski'}
  ];

  constructor(private fileLoaderService: FileLoaderService) {
    this.fileLoaderService.dictionary$.subscribe(dictionary => {
      this.dictionary = dictionary;
    });
    this.changeLanguage('en');
  }

  public getAvailableLanguages(): Language[] {
    return this.availableLanguages;
  }

  public changeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.fileLoaderService.initLanguagePath(this.selectedLanguage);
  }

  public translate(key: string): string {
    if (!!key && this.dictionary != null) {
      const translate = this.getRequiredTranslation(key, this.dictionary);
      return !!translate ? translate : this.missingTranslation;
    }
  }

  private getRequiredTranslation(key: string, dictionary: object): string | null {
    // INFO I know there are easier ways but I wanted to make it a more interesting option
    try {
      if (key.indexOf('.') !== -1) {
        const index = key.indexOf('.');
        return this.getRequiredTranslation(key.substr(index + 1), dictionary[key.substr(0, index)]);
      } else {
        return !!dictionary[key] ? dictionary[key] : null;
      }
    } catch (e) {
      console.error(`>>>>>> missing translation: ${e}`);
      return null;
    }
  }

  private dictionary: object;
  private missingTranslation = 'missing translation';

}
