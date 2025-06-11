import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }

  faceSnaps$!: Observable<FaceSnap[]>; 
  

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    const faceSnap = this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
   return this.getFaceSnapById(faceSnapId).pipe(
    map(faceSnap =>({
      ...faceSnap,
      snaps: snapType === 'snap' ? faceSnap.snaps + 1 : faceSnap.snaps - 1
    })),
    switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
   )
  }


  addFaceSnap(formValue: { title: string; description: string; imageUrl: string; location?: string; }) : Observable<boolean> {
    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(facesnaps => facesnaps[facesnaps.length - 1].id + 1),
      switchMap(newId => {
        return this.http.post<FaceSnap>('http://localhost:3000/facesnaps', {
          ...formValue,
          id: newId,
          createdDate: new Date(),
          snaps: 0
        });
      }),
      map(() => true)
    );
  }
   
}
