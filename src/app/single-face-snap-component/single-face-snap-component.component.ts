import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, DecimalPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { FaceSnap } from '../models/face-snaps';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss'
})
export class SingleFaceSnapComponentComponent implements OnInit {
   faceSnap! : FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService,
private route: ActivatedRoute

  ) { }

alreadySnapped: boolean = false; // Variable to track if the user has already snapped
  

  ngOnInit(): void {
this.getFaceSnap();
  
  }
  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];

    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap()
  {
    this.alreadySnapped? this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap') : this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');

   
    this.alreadySnapped = !this.alreadySnapped;

  }
}
