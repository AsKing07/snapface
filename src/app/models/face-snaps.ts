// export class FaceSnap {
    
//     title: string;
//     description: string;
//     createdAt: Date;
//     snaps: number;
//     imageUrl: string;

//     constructor( title: string, description: string, imageUrl:string) {
//        this.title = title;
//         this.description = description;
//         this.createdAt = new Date();
//         this.snaps = 0;
//         this.imageUrl = imageUrl;
//     }
// }

export class FaceSnap {
    
  location?: string; // Optional property
  id: string;

    constructor(
        public title: string, 
        public description: string, 
        public imageUrl:string,
        public createdAt: Date = new Date(),
        public snaps: number ,
    ) {
        this.id = crypto.randomUUID().substring(0,8);
       
    }

    addSnap(): void {
        this.snaps++;   
    }
    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.location = location;
        return this;
    }
}