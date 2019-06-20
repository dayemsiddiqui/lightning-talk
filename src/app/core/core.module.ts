import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormlyFieldsService } from './formly-fields/formly-fields.service';
import { SlackHttpClientService } from './slack-http-client/slack-http-client.service';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [EllipsisPipe],
  imports: [CommonModule, HttpClientModule],
  providers: [SlackHttpClientService, FormlyFieldsService, EllipsisPipe]
})
export class CoreModule {}
