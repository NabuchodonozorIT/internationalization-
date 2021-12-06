import {Pipe, PipeTransform} from '@angular/core';
import {CustomTranslateService} from './custom-translate.service';

@Pipe({
  name: 'customTranslate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: CustomTranslateService) {
  }

  transform(value: any, args?: any): any {
    return this.translationService.translate(value);
  }
}
