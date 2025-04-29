import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  imports: [
    RouterLink,
  
  ],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.scss'
})
export class LandingPageComponentComponent {

  constructor(private router: Router) { }

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

}
