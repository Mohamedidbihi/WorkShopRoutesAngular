import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowersComponent } from './components/followers/followers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilfollowerComponent } from './components/profilfollower/profilfollower.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '',
   pathMatch: 'full',
    redirectTo:'home' },  
    {
      path:'home' ,
       component  :HomeComponent
    },
  {
    path:'followers' ,
     component  :FollowersComponent,
     canActivate: [AuthGuard]
  },
  {
    path:'followers/:id' ,
     component  :ProfilfollowerComponent
  },
  {
    path:'**',
    component : NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
