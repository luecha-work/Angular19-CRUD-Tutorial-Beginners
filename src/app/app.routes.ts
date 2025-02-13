import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create-post',
    loadComponent: () =>
      import('./features/post/create-post/create-post.component').then(
        (m) => m.CreatePostComponent
      ),
  },
];
