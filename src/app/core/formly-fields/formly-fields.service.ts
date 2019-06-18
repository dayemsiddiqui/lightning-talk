import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class FormlyFieldsService {
  constructor() {}

  getSlackFormlyFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Talk Title',
          placeholder: 'Journey of the Sultan',
          required: true
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Talk Description',
          placeholder: 'Write the description of the talk here',
          required: true
        }
      },
      {
        key: 'speakers',
        type: 'input',
        templateOptions: {
          label: 'Speaker(s)',
          placeholder: 'Dayem,Hussain,Sadiq',
          required: true
        }
      },
      {
        key: 'date',
        type: 'datepicker',
        templateOptions: {
          label: 'Date',
          placeholder: '28th Feb 2019',
          required: true
        }
      }
    ];
  }
}
