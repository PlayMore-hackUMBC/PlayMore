import { Injectable } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Review } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private firestore: Firestore) {
  }

  get_reviews(): Observable<Review[]> {
    const jc = doc(this.firestore, 'reviews', 'dCscrtPe05aw6rOhTxhZ');
    return docData(jc)
    .pipe(
      map((data) => data as Review[])
    )
 }


}
