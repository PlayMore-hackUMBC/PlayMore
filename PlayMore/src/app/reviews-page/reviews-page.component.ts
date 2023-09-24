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


  constructor (_reviewsService : ReviewsService) {

    _reviewsService.get_reviews().subscribe((value : any[]) => {
      console.log(value);
      console.log(typeof(value));
    })
    

  }

}
