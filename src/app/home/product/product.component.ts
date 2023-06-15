import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnDestroy  {
  private subscription!: Subscription;

  imageDogApi:[]=[];
  constructor(private dogsService:DogsService){ }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dogsService.getTenDogEmageRandom(10).subscribe((data:any)=>{
this.imageDogApi=data.message
    })
  }
  carouselOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    margin:10,
    lazyLoad:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    /* navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'], */
    
    
  };
}
