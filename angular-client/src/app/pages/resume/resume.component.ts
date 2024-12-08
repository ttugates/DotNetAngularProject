import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

@Component({
  selector: 'ac-resume',
  imports: [MatProgressSpinnerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('iframeRef') iframeRef!: ElementRef;

  public isLoading = true;

  public static route: Route = { path: 'resume', component: ResumeComponent };

  public static navigateTo(router: Router) {
    router.navigate([ResumeComponent.route.path]);
  }

  public ngAfterViewInit(): void {
    const iframeElement = this.iframeRef.nativeElement;   
    iframeElement.onload = () => this.isLoading = false;
  }

}
