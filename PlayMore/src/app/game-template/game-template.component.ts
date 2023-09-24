import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game_Service, Review, Scores, Feature_Rating } from '../interfaces'
import { GamesServiceService } from '../services/games-service.service';
import { Observable, subscribeOn } from 'rxjs';
import { CreateReviewService } from '../services/create-review.service';
import { MatDialog } from '@angular/material/dialog'
import { CreateReviewComponent } from '../create-review/create-review.component';

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.css']
})
export class GameTemplateComponent implements OnInit {

  public game : any  = {}
  public score : Scores
  public reviews : Review[]

  constructor(
    private route: ActivatedRoute,
    private gameService : GamesServiceService,
    public dialog: MatDialog
    ){
      this.score = {"overall": 4, "hard_of_hearing": 4,  "vision_impairment": 5,  "motor_disability": 4,  "misc": 3}
      this.reviews = [{"id" : "wefnwo",
        "game_id" : "2563",
        "title" : "THIS WAS AWESOME",
        "text" : "this is my really excited review that i am too tired to write",
        "date_created" : "9/23/2023",
        "feature_ratings" : [
          {
          "disability" : "Hard od Hearing or Deaf",
          "name" : "Subtitles",
          "rating" : 5}, 
          {
          "disability" : "Other",
          "name": "content warning",
          "rating" : 5}],
        "username": "ntackyt",
        "user_id": "suka"},
        {"id" : "wefnwo",
        "game_id" : "2563",
        "title" : "THIS WAS AWESOME",
        "text" : "this is my really excited review that i am too tired to write",
        "date_created" : "9/23/2023",
        "feature_ratings" : [
          {"disability" : "Hard od Hearing or Deaf",
          "name" : "Subtitles",
          "rating" : 5}, 
          {"disability" : "Other",
          "name": "content warning",
          "rating" : 5}],
        "username": "ntackyt",
        "user_id": "suka"}]
    }

  ngOnInit() {
    // First get the game id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));
  
    // Find the game that correspond with the id provided in route.
    console.log("calling the get game by id")
    this.gameService.getGameById(gameIdFromRoute).subscribe(resp => {this.game=resp; console.log(resp)});
  }


  openLeaveReview(gameid: number){

    const dialogRef = this.dialog.open(CreateReviewComponent, {
      width: '600px',
      data: {
        "id" : "",
        "game_id" : gameid,
        "title" : "",
        "text" : "",
        "date_created" : "",
        "feature_ratings" : [
          {"disability" : "",
          "name" : "",
          "rating" : -1}
        ],
        "username": "",
        "user_id": ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // need to post to fire base
    });
  }


}