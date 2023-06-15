import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-about-start',
  templateUrl: './about-start.component.html',
  styleUrls: ['./about-start.component.scss']
})
export class AboutStartComponent implements OnInit, OnDestroy {
  private subscription1!: Subscription;
  private subscription2!: Subscription;

  dataIndexDog: any;
  dataIndexWolf: any;

  corre: boolean = false

  changeDog() {
    this.corre = false
  }
  changeWolf() {
    this.corre = true
  }

  constructor(private wikiService: WikiService) { }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription1 = this.wikiService.searchWikiPersion('گرگ').subscribe((res: any) => {


      let secondDotIndex = res.query.pages[14920].extract.indexOf(".", res.query.pages[14920].extract.indexOf(".") + 1);
      secondDotIndex = res.query.pages[14920].extract.indexOf(".", secondDotIndex + 1);
      let displayData = res.query.pages[14920].extract.slice(0, secondDotIndex)

      this.dataIndexWolf = displayData


    });
    this.subscription2 = this.wikiService.searchWikiPersion('سگ').subscribe((res: any) => {
      let secondDotIndex = res.query.pages[15178].extract.indexOf(".", res.query.pages[15178].extract.indexOf(".") + 1);
      secondDotIndex = res.query.pages[15178].extract.indexOf(".", secondDotIndex + 1);
      let displayData = res.query.pages[15178].extract.slice(0, secondDotIndex)

      this.dataIndexDog = displayData;
    });
  }
}
