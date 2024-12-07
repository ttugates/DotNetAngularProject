import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'ac-root',
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 

  constructor(
    public themeSvc: ThemeService,
    renderer: Renderer2) {
      themeSvc.Init(renderer);
    }
}
