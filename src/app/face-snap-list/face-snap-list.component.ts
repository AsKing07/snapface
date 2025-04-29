import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {

   }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }


  addNewFaceSnap(): void {
    this.router.navigateByUrl('/create');

  }
}
