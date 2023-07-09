import { Component } from '@angular/core';
import { AuthService } from "../../auth.service";

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor (public authService: AuthService, private recaptchaV3Service: ReCaptchaV3Service) { };
  
  gglAuth(){
    this.authService.GoogleAuth();

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }
  
  signIn(uname:string, pwd:string){
    this.authService.SignIn(uname, pwd);

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }
}
