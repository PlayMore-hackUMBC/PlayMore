import { Component } from '@angular/core';
import { Observable, pipe, map, Subject } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { Review } from '../interfaces';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent {

}
