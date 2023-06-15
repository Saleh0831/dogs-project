import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthentionService } from 'src/app/services/authention.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  form: FormGroup;
  errorShow: string = '';


  constructor(private authenService: AuthentionService, private cookieService: CookieService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remamber: new FormControl(false, [Validators.required]),

    })
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {

  }


  onSubmitSigin(e: any) {

    e.preventDefault()

  }

  change() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  submitEmail() {
    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;
    this.subscription = this.authenService.siginUser(username, password).subscribe((res: any) => {
      this.cookieService.set('esohp-cookie', JSON.stringify(this.form.value), 60);
      this.authenService.setCurrentUser(true);
      this.router.navigate(['/']);
    }, error => {
      if (error.username) {
        this.errorShow = 'حساب کاربری وجود ندارد';
        setTimeout(() => {
          this.errorShow = '';
        }, 3000)
      } else if (error.password) {
        this.errorShow = 'رمز عبور اشتباه است';
      }

    });
  }

}
