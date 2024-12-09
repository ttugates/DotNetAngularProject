import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ResumeComponent } from '@pages/resume/resume.component';
import {MatListModule} from '@angular/material/list'; 
import { ExperienceComponent } from '@pages/experience/experience.component';
import { FindMeComponent } from '@pages/find-me/find-me.component';

@Component({
  selector: 'ac-dashboard',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  constructor(private router: Router) {
  }

  public static route: Route = { path: '', component: DashboardComponent };

  public static navigateTo(router: Router) {
    router.navigate([DashboardComponent.route.path]);
  }

  public onClickResume() {
    ResumeComponent.navigateTo(this.router);
  }

  public onClickExperience() {
    ExperienceComponent.navigateTo(this.router);
  }

  public onClickFindMe() {
    FindMeComponent.navigateTo(this.router);
  }

}
