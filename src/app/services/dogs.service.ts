import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }


  getTenDogEmageRandom(sec: number) {
    return this.http.get<Observable<any>>(`https://dog.ceo/api/breeds/image/random/${sec}`);
  }

  getAllDog() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getDogBreeds(data:string){
   return this.http.get(`https://dog.ceo/api/breed/${data}/images/random/10`)
  }
}
