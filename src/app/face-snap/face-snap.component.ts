import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { DatePipe, DecimalPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
  ],
  standalone: true,
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService,

    private router: Router
  ) { }

alreadySnapped: boolean = false; // Variable to track if the user has already snapped
  

  ngOnInit(): void {
  
  }

  onSnap()
  {
    this.alreadySnapped? this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap') : this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');

   
    this.alreadySnapped = !this.alreadySnapped;

  }

  onViewFaceSnap()
  {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }

}


