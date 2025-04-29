import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps-service';
import { interval, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';



@Component({
  selector: 'app-face-snap-list',
  imports: [
  FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy 
{

  faceSnaps!: FaceSnap[];
  private destroy$! : Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService)
  {}
 
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
 this.faceSnaps = this.faceSnapsService.getFaceSnaps();
//  this.faceSnaps[1].setLocation('à la montagne');

interval(1000).pipe(
  // take(10),
  tap(console.log),
  takeUntil(this.destroy$),
  
).subscribe();
    
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
      
  }

}
