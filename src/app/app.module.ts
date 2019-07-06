import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BodyComponent } from './components/body/body.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserService } from './service/user.service';
import { MaterialModule } from '../app/material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SuccessComponent } from './components/success/success.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    NotFoundComponent,
    BodyComponent,
    PostsComponent,
    PostDetailsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    MaterialModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [ 
    PostsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
