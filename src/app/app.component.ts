import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthentionService } from './services/authention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  cookieValue:any;
  constructor(private cookieService: CookieService,private authService:AuthentionService,private router:Router){
    this.cookieValue = this.cookieService.get('esohp-cookie');
  }
  ngOnInit(): void {
    alert('این سایت از api خارجی استفاده میکند لطفا فیلتر شکن خود را روشن کنید');
    if(this.cookieValue){
      this.authService.setCurrentUser(true);
    }

    
    
    
    
  }
/*   carouselOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
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
    }
  };
  teamMembers = [
    {
      fullName: 'Full Name 1',
      designation: 'Designation 1',
      image: 'assets/img/team-1.jpg'
    },
    {
      fullName: 'Full Name 2',
      designation: 'Designation 2',
      image: 'assets/img/team-3.jpg'
    },
    {
      fullName: 'Full Name 3',
      designation: 'Designation 3',
      image: 'assets/img/team-4.jpg'
    },
    {
      fullName: 'Full Name 4',
      designation: 'Designation 4',
      image: 'assets/img/team-5.jpg'
    }
  ];

  carouselOptions2 = {
    loop: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  }; */



}
