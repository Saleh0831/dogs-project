import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit,OnDestroy  {
  private subscription!: Subscription;

  data:string=''
  constructor(private wikiService:WikiService){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
   this.subscription = this.wikiService.searchWikiPersion('سگ‌سانان').subscribe((res:any)=>{
      this.data=res.query.pages[239784].extract;
    })
  }

}
