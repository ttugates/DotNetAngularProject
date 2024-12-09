import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ac-find-me',
  imports: [MatCardModule, MatListModule, MatIconModule],
  templateUrl: './find-me.component.html',
  styleUrl: './find-me.component.scss'
})
export class FindMeComponent {

  public static route: Route = { path: 'social', component: FindMeComponent };

  public static navigateTo(router: Router) {
    router.navigate([FindMeComponent.route.path]);
  }

}
