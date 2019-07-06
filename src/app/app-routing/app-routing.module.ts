import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { LoginComponent }     from '../components/login/login.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';
import { SignUpComponent }     from '../components/sign-up/sign-up.component';
import { SuccessComponent } from '../components/success/success.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
 
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}