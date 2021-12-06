import {Pipe, PipeTransform} from '@angular/core';
import {CustomTranslateServiceService} from './custom-translate-service.service';

@Pipe({
  name: 'customTranslate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: CustomTranslateServiceService) {
  }

  transform(value: any, args?: any): any {
    return this.translationService.translate(value);
  }
}
