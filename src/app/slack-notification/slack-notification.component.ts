import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SlackHttpClientService } from '../core/slack-http-client/slack-http-client.service';
import { SlackPayloadBuilder } from '../slack/slack-payload/slackPayloadBuilder';
import { Talk } from 'app/interfaces/talk';
import { FormlyFieldsService } from '../core/formly-fields/formly-fields.service';

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
  fields: FormlyFieldConfig[] = this.formlyFieldService.getSlackFormlyFields();

  constructor(
    private slackHttpClientService: SlackHttpClientService,
    private formlyFieldService: FormlyFieldsService
  ) {}

  submit() {
    if (this.form.valid) {
      const talk: Talk = {
        title: this.model.title,
        description: this.model.description,
        speakers: this.model.speakers.split(','),
        date: this.model.date
      };

      this.sendNotification(talk);
    }
  }

  ngOnInit() {}

  sendNotification(talk: Talk) {
    const payloadBuilder = new SlackPayloadBuilder(talk);
    const payload = payloadBuilder.preparePayload().getSlackPayload();
    this.slackHttpClientService.sendNotification(payload);
  }
}
