import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GameTemplateComponent } from './game-template/game-template.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'games/:gameId', component: GameTemplateComponent },
  { path: 'reviews', component: ReviewsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'search/:searchval', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: HomePageComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
