import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Review, Feature_Rating } from '../interfaces';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Review) {
      this.data.date_created = String(new Date());
      this.data.feature_ratings= [
        {"disability": "Hard of Hearing or Deaf", "name": "Subtitles", "rating": -1},
        {"disability": "Hard of Hearing or Deaf", "name": "Directional Indicators for Subtitles","rating": -1},
        {"disability": "Hard of Hearing or Deaf", "name": "Changing Font and Size","rating": -1},
        {"disability": "Vision Impairment", "name": "Color Contrasts","rating": -1},
        {"disability": "Vision Impairment", "name": "Color Blind Modes", "rating": -1},
        {"disability": "Vision Impairment", "name": "Partially sighted filters", "rating": -1},
        {"disability": "Vision Impairment", "name": "Text-to-Speech", "rating": -1},
        {"disability": "Motor Disability", "name": "Remapping controls", "rating": -1},
        {"disability": "Motor Disability", "name": "One- handed controls","rating": -1},
        {"disability": "Motor Disability", "name": "Alternative Grip Solutions", "rating": -1},
        {"disability": "Motor Disability", "name": "Adaptive Controller", "rating": -1},
        {"disability": "Motor Disability", "name": "Various game speeds","rating": -1},
        {"disability": "Other Disability", "name": "Dynamic skill difficulty", "rating": -1},
        {"disability": "Other Disability", "name": "Content warnings" ,"rating": -1},
        {"disability": "Other Disability", "name": "Skip triggering scenes","rating": -1},

      ]
    }

  // public dis = [{"name": "Hard of Hearing or Deaf", "sublabels": [ 
  //   {"name": "Subtitles", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}, 
  //   {"name": "Directional Indicators for subtitles", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}, 
  //   {"name": "Changing font and size", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}
  // ]}, 
  //   {"name": "Vision Impairment", "sublabels": [
  //   {"name": "Color contrasts", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}, 
  //   {"name": "Color Blind Modes", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}, 
  //   {"name": "Partially sighted filters", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}, 
  //   {"name": "Text-to-Speech", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}
  // ]}, 
  // {"name": "Motor Disability", "sublabels": [
  //   {"name": "Remapping controls",  "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "One- handed controls",  "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "Alternative Grip Solutions", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "Adaptive Controller",  "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "Various game speeds",  "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]}
  // ]},
  // {"name": "Other", "sublabels": [
  //   {"name": "Dynamic skill difficulty", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "Content warnings" , "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  //   {"name": "Skip triggering scenes", "score": [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]},
  // ]}]
 
  // public buttons = [{"name": "NA","val": -1},{ "name": "Worst","val": 1}, {"name": "Poor","val":2}, {"name": "Okay","val":3}, {"name": "Alright","val": 4}, {"name": "Good","val":5}]
  onNoClick(): void {
    this.dialogRef.close();
  }
}