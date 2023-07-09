import { Component } from '@angular/core';
import { AuthService } from "../../auth.service";

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor (public authService: AuthService, private recaptchaV3Service: ReCaptchaV3Service) { };

  gglAuth(){
    this.authService.GoogleAuth();

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }
  SignUp(userEmail:string, userPwd:string){
    this.authService.SignUp(userEmail, userPwd);

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }
}
