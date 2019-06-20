import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SlackNotificationComponent } from '../../slack-notification/slack-notification.component';
import { SubmissionsComponent } from '../../submissions/submissions.component';
import { TypographyComponent } from '../../typography/typography.component';
import { DataImporterComponent } from 'app/data-importer/data-importer.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'slack-notification', component: SlackNotificationComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'data-importer', component: DataImporterComponent },
];
