import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqUsernameService implements AsyncValidator {
  url: string = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http.post(`${this.url}/auth/username`, { username: control.value }).pipe(
      map((res: any) => {
        if (res.available === true) {
          return null
        }else{
          return of()
        }
      }),
      catchError((error) => {
        if (error.error.username) {
          return of({ nonUniqUsername: true });
        } else
          return of({ unKnownError: true });
      })
    );

  }
}


