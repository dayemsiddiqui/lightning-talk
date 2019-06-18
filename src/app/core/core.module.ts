import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlackHttpClientService } from './slack-http-client/slack-http-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [SlackHttpClientService]
})
export class CoreModule {}
