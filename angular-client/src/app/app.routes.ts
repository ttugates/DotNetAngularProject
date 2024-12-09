import { Routes } from '@angular/router';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ExperienceComponent } from '@pages/experience/experience.component';
import { FindMeComponent } from '@pages/find-me/find-me.component';
import { ResumeComponent } from '@pages/resume/resume.component';

export const routes: Routes = [
  DashboardComponent.route,
  ResumeComponent.route,
  ExperienceComponent.route,
  FindMeComponent.route
];
