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

  public motor: boolean = false;
  public hear: boolean = false;
  public see:boolean=false;
  public other:boolean=false;

  constructor(
    public dialogRef: MatDialogRef<CreateReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Review) {
      data.date_created = String(new Date());
      data.game_id = String(new Date());
      data.feature_ratings= [
        {"disability": "Hard of Hearing or Deaf", "name": "Subtitles", "rating": -1},
        {"disability": "Hard of Hearing or Deaf", "name": "Directional Indicators for Subtitles","rating": -1},
        {"disability": "Hard of Hearing or Deaf", "name": "Changing Font and Size","rating": -1},
        {"disability": "Vision Impairment", "name": "Color Contrasts","rating": -1},
        {"disability": "Vision Impairment", "name": "Color Blind Modes", "rating": -1},
        {"disability": "Vision Impairment", "name": "Partially sighted filters", "rating": -1},
        {"disability": "Vision Impairment", "name": "Text-to-Speech", "rating": -1},
        {"disability": "Motor Disability", "name": "Remapping controls", "rating": -1},
        {"disability": "Motor Disability", "name": "One-handed controls","rating": -1},
        {"disability": "Motor Disability", "name": "Alternative Grip Solutions", "rating": -1},
        {"disability": "Motor Disability", "name": "Adaptive Controller", "rating": -1},
        {"disability": "Motor Disability", "name": "Various game speeds","rating": -1},
        {"disability": "Other Disability", "name": "Dynamic skill difficulty", "rating": -1},
        {"disability": "Other Disability", "name": "Content warnings" ,"rating": -1},
        {"disability": "Other Disability", "name": "Skip triggering scenes","rating": -1},

      ]
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  show(flip: string){
    console.log(flip)
    if (flip == 'hear'){
      this.hear = !this.hear
    }
    if(flip == 'motor'){
      this.motor = !this.motor
    }
    if (flip == 'see'){
      this.see = !this.see
    }
    if(flip == 'other'){
      this.other = !this.other
    }
  }
}