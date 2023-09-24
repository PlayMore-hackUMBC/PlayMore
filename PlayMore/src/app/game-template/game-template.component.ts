import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game_Service } from '../interfaces'
import { GamesServiceService } from '../services/games-service.service';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.css']
})
export class GameTemplateComponent implements OnInit {

  public game : any  = {}
  public score : any = {}

  constructor(
    private route: ActivatedRoute,
    private gameService : GamesServiceService
    ){}

  ngOnInit() {
    // First get the game id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));
  
    // Find the game that correspond with the id provided in route.
    console.log("calling the get game by id")
    this.gameService.getGameById(gameIdFromRoute).subscribe(resp => {this.game=resp; console.log(resp)});
    this.score = {"overall": 4, "hard_of_hearing": 4,  "vision_impairment ": 5,  "motor_disability": 4,  "misc": 3}
  }
}