import { style, transition, trigger,AnimationEvent, animation, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations:[
    trigger('animation',[
      transition('void => visible',[
        style({transform:'scale(0.5)'}),
        animate('150ms',style({transform:'scale(1)'}))
      ]),
      transition('visible => void',[
        style({transform:'scale(1)'}),
        animate('150ms',style({transform:'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2',[
      transition(':leave',[
        style({opactiy:0.8}),
        animate('50ms',style({opactiy:0.8}))
      ])
    ])
  ]
})
export class AlbumComponent implements OnInit {
@Input() galleryData:Item[]=[];
@Input() showCount=false;


  previewimage = false;
  showMask=false;
  currentLightboxImage!:Item;
  currentIndex = 0;
  controls = true;
  totalInageCount=0;


 
  

  ngOnInit(): void {
    this.currentLightboxImage=this.galleryData[0];
    this.totalInageCount = this.galleryData.length;
  }

  
 onPreviewImage(index:any){
  this.showMask=true;
  this.previewimage=true
  this.currentIndex = index;
  this.currentLightboxImage = this.galleryData[index]
  }

  onAnimationEnd(event:any){
    if(event.toState === 'void'){
      this.showMask = false
    }
  }

  onClosePreview(){
    this.previewimage=false;
  }
next(){
  this.currentIndex = this.currentIndex+1;
  if(this.currentIndex > this.galleryData.length -1){
    this.currentIndex = 0;
  }
  this.currentLightboxImage = this.galleryData[this.currentIndex];
}
prev(){
  this.currentIndex = this.currentIndex-1;
  if(this.currentIndex < 0){
    this.currentIndex = this.galleryData.length -1;
  }
  this.currentLightboxImage = this.galleryData[this.currentIndex];

}
}
