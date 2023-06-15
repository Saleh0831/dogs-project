import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-bloger',
  templateUrl: './bloger.component.html',
  styleUrls: ['./bloger.component.scss']
})
export class BlogerComponent implements OnInit,OnDestroy  {
  shows: boolean = false;
  immges:any;
  private subscription1!: Subscription;
  private subscription2!: Subscription;

  constructor(private dogsService: DogsService) { }
  ngOnDestroy(): void {
   
  }
  allDogs:any;
  ngOnInit(): void {
   this.subscription1 = this.dogsService.getAllDog().subscribe((res:any)=>{
      let breedsData = Object.keys(res.message).filter(breed => res.message[breed].length > 0);
      this.allDogs =Object.entries(breedsData);
      this.allDogs = this.allDogs.map((item:any) => item[1]);
    });
    
  }

  public showsMenu(){
    this.shows=!this.shows;
  }

  data(event:any){
    const clickedElement = event.target as HTMLAnchorElement;
    const clickedItem = clickedElement.innerText;
   this.subscription2 == this.dogsService.getDogBreeds(clickedItem).subscribe((res:any)=>{
      this.immges = res.message;
      
    })
  }
}


