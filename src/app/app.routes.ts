import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { SingleFaceSnapComponentComponent } from './single-face-snap-component/single-face-snap-component.component';

export const routes: Routes = [
    {path: 'facesnap/:id', component: SingleFaceSnapComponentComponent},
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path:'', component: LandingPageComponentComponent}

];


