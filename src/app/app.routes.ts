import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';
import { StoryComponent } from './pages/story/story.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CleaningComponent } from './pages/cleaning/cleaning.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'work', component: WorkComponent },
  { path: 'story', component: StoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cleaning', component: CleaningComponent },
  { path: '**', redirectTo: '' }
];
