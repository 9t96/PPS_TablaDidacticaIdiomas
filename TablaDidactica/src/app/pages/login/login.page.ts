import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
class User{
  email:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  loginForm: FormGroup;
  message: string
  showErrorHint: boolean;

  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router, private fromBuilder: FormBuilder, private screenOrientation: ScreenOrientation) { 
    this.user = new User();
  }
  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.loginForm = this.fromBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }


  Login(){

    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    this.authService.SignIn(this.user.email, this.user.password).then( res =>{
      this.router.navigate(['home']);
    })
    .catch( err =>{ 
      err.code == "auth/wrong-password" ? this.ErrorHint("Uno o mas campos son invalidos...") : this.ErrorHint("Ha ocurrido un error vuelva a intentar.")
    })
  }

  ErrorHint(message:string){
    this.message = message;
    this.showErrorHint = true;
    setTimeout(() => {
      this.showErrorHint = false;
    }, 4000);
  }

  testUser(accountNumber: number){
    switch (accountNumber) {
      case 1:
        this.loginForm.controls['email'].setValue('admin@admin.com') 
        this.loginForm.controls['password'].setValue('111111')
        break;
      case 2:
        this.loginForm.controls['email'].setValue('invitado@invitado.com') 
        this.loginForm.controls['password'].setValue('222222')
        break;
      case 3:
        this.loginForm.controls['email'].setValue('usuario@usuario.com') 
        this.loginForm.controls['password'].setValue('333333')
        break;
      case 4:
        this.loginForm.controls['email'].setValue('anonimo@anonimo.com') 
        this.loginForm.controls['password'].setValue('444444')
        break;
      case 5:
        this.loginForm.controls['email'].setValue('tester@tester.com') 
        this.loginForm.controls['password'].setValue('555555')
        break;
    }
    
  }

/*   openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  } */

}
