import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { SlackNotificationComponent } from '../../slack-notification/slack-notification.component';
import { SubmissionsComponent } from '../../submissions/submissions.component';
import { TypographyComponent } from '../../typography/typography.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MaterialModule } from 'app/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    FormlyModule.forRoot({})
  ],
  declarations: [
    DashboardComponent,
    SlackNotificationComponent,
    SubmissionsComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})
export class AdminLayoutModule {}
