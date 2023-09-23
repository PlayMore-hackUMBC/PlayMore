import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'reviews', component: ReviewsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: HomePageComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
