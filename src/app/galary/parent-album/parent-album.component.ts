import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { DogsService } from 'src/app/services/dogs.service';
interface Item {
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-parent-album',
  templateUrl: './parent-album.component.html',
  styleUrls: ['./parent-album.component.scss']
})
export class ParentAlbumComponent implements OnInit {
  galleryImages:Item[]=[];
  constructor(private dogsService:DogsService){}
  ngOnInit(): void {
     this.dogsService.getTenDogEmageRandom(12).pipe(
      
      map((res: any) => {

        for (let item=0;item<res.message.length; item++) {
          
          
          this.galleryImages.push(
            {
              imageSrc:res.message[item],
              imageAlt:item.toString()
            }
          )

        }
      })

    ).subscribe()

  }
  data:Item[]=[
    {
      imageSrc: '/assets/img/blog-2.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000',
      imageAlt: '2'
    },
    {
      imageSrc: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000',
      imageAlt: '3'
    },
    {
      imageSrc: 'https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png',
      imageAlt: '4'
    },
    {
      imageSrc: 'https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png',
      imageAlt: '5'
    },
    {
      imageSrc: 'https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png',
      imageAlt: '6'
    },
    {
      imageSrc: 'https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png',
      imageAlt: '7'
    },
    {
      imageSrc: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      imageAlt: '8'
    },
    {
      imageSrc: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      imageAlt: '9'
    },
    {
      imageSrc: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '11'
    },
    {
      imageSrc: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000',
      imageAlt: '12'
    },
    {
      imageSrc: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000',
      imageAlt: '13'
    }
  ];

}
