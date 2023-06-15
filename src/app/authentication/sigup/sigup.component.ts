import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MatchPasswordService } from 'src/app/_validators/match-password.service';
import { UniqUsernameService } from 'src/app/_validators/uniq-username.service';
import { AuthentionService } from 'src/app/services/authention.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit,OnDestroy  {
  avaz: boolean = false;
  form: FormGroup;
  private subscription!: Subscription;

  constructor(private router:Router, private authService: AuthentionService,private matchPasswpord:MatchPasswordService,private uniqService:UniqUsernameService,private cookieService: CookieService) {
    this.form = new FormGroup({
      username: new FormControl('',
       [Validators.required, Validators.minLength(3)],
       [this.uniqService.validate.bind(this.uniqService)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(5)]),
      remamber: new FormControl(false, [Validators.required]),
    },{validators:[this.matchPasswpord.validate]})
  }
  ngOnDestroy(): void {
   
  }
  ngOnInit(): void {

  }

  onSubmitSginUp(e: any) {
    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;
    let passwordCon = this.form.controls['passwordConfirmation'].value;
   this.subscription = this.authService.sigupUser(username,password,passwordCon).subscribe();
    this.cookieService.set('esohp-cookie',JSON.stringify(this.form.value),60);
    this.authService.setCurrentUser(true);
    this.router.navigate(['/']);
    e.preventDefault();

  }


  change() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }
}
