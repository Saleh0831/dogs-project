import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sit-bar/footer/footer.component';
import { HeaderComponent } from './sit-bar/header/header.component';
import { TopbarComponent } from './sit-bar/topbar/topbar.component';
import { AboutStartComponent } from './home/about-start/about-start.component';
import { HeroComponent } from './home/hero/hero.component';
import { IndexComponent } from './home/index/index.component';
import { OfferComponent } from './home/offer/offer.component';
import { ProductComponent } from './home/product/product.component';
import { TeamComponent } from './home/team/team.component';
import { AlbumComponent } from './galary/album/album.component';
import { ThemsComponent } from './galary/thems/thems.component';
import { BlogerComponent } from './blog/bloger/bloger.component';
import { SiginComponent } from './authentication/sigin/sigin.component';
import { SigupComponent } from './authentication/sigup/sigup.component';
import { HouseComponent } from './about/house/house.component';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ParentAlbumComponent } from './galary/parent-album/parent-album.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
    AboutStartComponent,
    HeroComponent,
    IndexComponent,
    OfferComponent,
    ProductComponent,
    TeamComponent,
    AlbumComponent,
    ThemsComponent,
    BlogerComponent,
    SiginComponent,
    SigupComponent,
    HouseComponent,
    ParentAlbumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
