import { Component } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent {
  public games : any = false

  constructor(private games_serv: GamesServiceService){ }

  
  async ngOnInit(){
    this.games = this.games_serv.getGames().subscribe(res=>this.games=res)
  }


  public goToGamePage(game : any){

    console.log("hit a game: ", game.name)
  }
}
