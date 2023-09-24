import { Component } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Review } from '../interfaces';
import { ReviewsService } from '../services/reviews.service';


@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent {

  public reviews : Review[]

  constructor (_reviewsService : ReviewsService) {

    this.reviews =  [{"id" : "wefnwo",
    "game_id" : "2563",
    "title" : "THIS WAS AWESOME",
    "text" : "this is my really excited review that i am too tired to write",
    "date_created" : "9/23/2023",
    "feature_ratings" : [
      {"disability" : "Hard of Hearing or Deaf",
      "name" : "Subtitles",
      "rating" : 5}, 
      {"disability" : "Other",
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
      {"disability" : "Hard of Hearing or Deaf",
      "name" : "Subtitles",
      "rating" : 5}, 
      {"disability" : "Other",
      "name": "content warning",
      "rating" : 5}],
    "username": "ntackyt",
    "user_id": "suka"}]

    _reviewsService.get_reviews().subscribe((value : any[]) => {
      console.log(value);
      console.log(typeof(value));
    })
    

  }

}
