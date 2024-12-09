import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ac-experience',
  imports: [MatCardModule, MatListModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public static route: Route = { path: 'experience', component: ExperienceComponent };

  public static navigateTo(router: Router) {
    router.navigate([ExperienceComponent.route.path]);
  }

}
