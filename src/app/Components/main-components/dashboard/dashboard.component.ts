import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    public menuCtrl  : MenuController,
  ) { }

  ngOnInit() { 
    this.menuCtrl.enable(true);
  }

  

}
