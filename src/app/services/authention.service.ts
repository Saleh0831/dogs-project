import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentionService {

  private currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setCurrentUser(user: boolean): void {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<boolean> {
    return this.currentUser;
  }
  url: string = 'https://api.angular-email.com';
  constructor(private http: HttpClient,private cookie: CookieService) { }


  sigupUser(username: string, password: string, passwordConfirmation: string) {
    return this.http.post(`${this.url}/auth/signup`,
      { "username": username, "password": password, "passwordConfirmation": passwordConfirmation });
  }





  siginUser(username: string, password: string) {
    return this.http.post(`${this.url}/auth/signin`,
      { "username": username, "password": password }).pipe(
        catchError((error:any)=>{
          if(error.error.username){
           return  throwError(()=>error.error);
            
          }
          else{
            
            return of(error);
          }
         
          
        })
      );
  }

  logOutCook(){
    this.cookie.delete('esohp-cookie');
  }
}
