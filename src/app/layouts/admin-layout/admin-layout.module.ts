import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SlackNotificationComponent } from '../../slack-notification/slack-notification.component';
import { SubmissionsComponent } from '../../submissions/submissions.component';
import { TypographyComponent } from '../../typography/typography.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MaterialModule } from 'app/material/material.module';
import { DataImporterComponent } from '../../data-importer/data-importer.component';

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    NgxFileDropModule,
    FormlyModule.forRoot({})
  ],
  declarations: [
    DashboardComponent,
    SlackNotificationComponent,
    SubmissionsComponent,
    TypographyComponent,
    DataImporterComponent,
  ]
})
export class AdminLayoutModule {}
