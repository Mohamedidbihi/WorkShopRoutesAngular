import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FollowersComponent } from './components/followers/followers.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilfollowerComponent } from './components/profilfollower/profilfollower.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FollowersComponent,
    NotFoundComponent,
    HomeComponent,
    ProfilfollowerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
