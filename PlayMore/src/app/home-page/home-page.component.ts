import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public games : any = false

  constructor(private games_serv: GamesServiceService){ }

  async ngOnInit(){
    this.games = this.games_serv.getGames().subscribe(res=>this.games=res)
  }


  public goToGamePage(game : any){

    console.log("hit a game: ", game.name)
  }
}
