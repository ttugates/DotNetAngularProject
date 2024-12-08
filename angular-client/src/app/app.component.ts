import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeService } from '@core/theme.service';
import { ResumeComponent } from '@pages/resume/resume.component';

@Component({
  selector: 'ac-root',
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 

  constructor(
    public themeSvc: ThemeService,
    private router: Router,
    renderer: Renderer2) {
      themeSvc.Init(renderer);
    }

  public onClickDashboard() {
    this.router.navigate(["/"]);
  }

  public onClickResume() {
    ResumeComponent.navigateTo(this.router);
  }
}
