import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CommonService } from 'src/app/Services/Common/common.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { ModelsService } from 'src/app/Models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public menuCtrl: MenuController,
    public commonService: CommonService,
    public modelService: ModelsService,
    public navCtrl: NavController,
  ) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }



  onSubmit() {
    let data = this.modelService.signIn.value;
    this.authService.loginM(data).then(res => {
      this.modelService.signIn.reset();
    }).catch(err => {
      this.commonService.presentToast(err.message);
    }).then(() => {
      if (this.authService.isLoggedIn()) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });
  }

}
