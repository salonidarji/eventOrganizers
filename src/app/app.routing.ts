import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { CuisineComponent } from './cuisine/cuisine.component';

const arr: Routes = [
  { path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: 'event', component: EventComponent },
  { path: 'addEvent', component: AddEventComponent },
  { path: 'cuisine', component: CuisineComponent }

];

export const routing = RouterModule.forRoot(arr);
