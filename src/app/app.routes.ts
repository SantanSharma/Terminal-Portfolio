import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { BlogListComponent } from './components/blog-list/blog-list';
import { BlogDetailComponent } from './components/blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: '**', redirectTo: '' }
];
