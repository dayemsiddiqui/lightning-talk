import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormlyFieldsService } from './formly-fields/formly-fields.service';
import { SlackHttpClientService } from './slack-http-client/slack-http-client.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
providers: [SlackHttpClientService, FormlyFieldsService]
})
export class CoreModule {}
