import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions  } from '@ngx-formly/core';
import { SlackHttpClientService } from '../core/slack-http-client/slack-http-client.service';
import { SlackPayloadBuilder } from '../slack/slack-payload/slackPayloadBuilder';

@Component({
  selector: 'app-slack-notification',
  templateUrl: './slack-notification.component.html',
  styleUrls: ['./slack-notification.component.css']
})
export class SlackNotificationComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true
      }
    },
    {
      key: 'nested.story',
      type: 'textarea',
      templateOptions: {
        label: 'Some sweet story',
        placeholder:
          'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: ''
      },
      expressionProperties: {
        'templateOptions.focus': 'formState.awesomeIsForced',
        'templateOptions.description': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }
        }
      }
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: { label: '' },
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
        'templateOptions.label': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        }
      }
    },
    {
      key: 'whyNot',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.placeholder': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'Too bad... It really is awesome! Wasn\'t that cool?';
          } else {
            return 'Type in here... I dare you';
          }
        },
        'templateOptions.disabled': 'formState.awesomeIsForced'
      },
      hideExpression: 'model.awesome',
      templateOptions: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you'
      }
    },
    {
      key: 'custom',
      type: 'custom',
      templateOptions: {
        label: 'Custom inlined'
      }
    }
  ];
  constructor(private slackHttpClientService: SlackHttpClientService) {}

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  ngOnInit() {}

  sendNotification() {
    const payloadBuilder = new SlackPayloadBuilder({
      title: 'Sample Talk Title',
      description: 'Sample Description',
      speakers: ['Dayem', 'Hussain', 'Sadiq', 'Siddiqui'],
      date: '15 Aug, 2019'
    });
    const payload = payloadBuilder.preparePayload().getSlackPayload();
    this.slackHttpClientService.sendNotification(payload);
  }
}
