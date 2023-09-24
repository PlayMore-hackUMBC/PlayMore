import { Component, OnInit } from '@angular/core';
import { Observable, pipe, map, Subject } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { Disability, Feature_Rating, Review } from '../interfaces';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {
  public all_reviews : Review[] = [];
  public all_reviews_game : Review[] = [];
  public dis : Disability[] = [];
  public reviewToAdd : Review = {
    id: "",
    game_id : "ZZZ123",
    title : "Okay...",
    text : "This game is okay. I wanted better options for increasing the font size of the subtitles",
    date_created : "9/24/2023",
    username: "test_user",
    user_id: "1234"
  }

  constructor (private _firestoreService : FirestoreService) {}

  ngOnInit(): void {
    this._firestoreService.get_reviews().subscribe((value : any[]) => {
      this.all_reviews = value;
    })

    this._firestoreService.get_reviews_by_game("ZZZ123").subscribe((value : any[]) => {
      this.all_reviews_game = value;
    })

    this._firestoreService.get_dis().subscribe((value : any[]) => {
      this.dis = value;
    })

    /*this._firestoreService.add_review(this.reviewToAdd);*/
    
    
  }
    
}
