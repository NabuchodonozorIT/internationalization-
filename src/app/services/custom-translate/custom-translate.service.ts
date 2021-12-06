import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  public selectedLanguage = 'en';

  constructor() {
  }

  public translate(key: string): string {
    if (!!key && this.dictionary[this.selectedLanguage] != null) {
      return this.getRequiredTranslation(key, this.dictionary[this.selectedLanguage]);
    }
  }

  private getRequiredTranslation(key: string, dictionary: any): string {
    // INFO I know there are easier ways but I wanted to make it a more interesting option
    try {
      if (key.indexOf('.') !== -1) {
        const index = key.indexOf('.');
        return this.getRequiredTranslation(key.substr(index + 1), dictionary[key.substr(0, index)]);
      } else {
        return dictionary[key];
      }
    } catch (e) {
      console.error('>>>>>> missing translation: ', e);
      return 'missing translation';
    }
  }

  private dictionary: { [key: string]: any } = {
    pl: {
      mypage: {
        title: 'John\'s Blog',
      },
      search: 'Search Blog..'
    },
    en: {
      mypage: {
        title: 'John\'s Blog',
      },
      search: 'Search Blog..'
    },
  };
}

