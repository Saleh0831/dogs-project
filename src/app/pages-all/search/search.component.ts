import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchResponse } from 'src/app/interface/wiki';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {
  searchWiki:any;
  form:FormGroup;
  private subscription!: Subscription;
  
  constructor(private wikiService:WikiService){
    this.form = new FormGroup({
    search:new FormControl('',[Validators.required,Validators.minLength(3)])
  })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
ngOnInit(): void {
}




onSubmit(){
  let search = this.form.controls['search'].value;
 this.subscription = this.wikiService.searchWikiList(search).subscribe((res:SearchResponse)=>{
    this.searchWiki = res.query.search;
  });
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  }); 
}
}
