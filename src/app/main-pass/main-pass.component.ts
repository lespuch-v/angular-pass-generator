import { Component, OnInit, ViewChild } from '@angular/core';
import { MainPassOptionsComponent } from '../main-pass-options/main-pass-options.component';

@Component({
  selector: 'app-main-pass',
  templateUrl: './main-pass.component.html',
  styleUrls: ['./main-pass.component.css']
})
export class MainPassComponent implements OnInit {
  password: string = '';

  ngOnInit() {}

  onPasswordChanged(newPassword: string) {
    this.password = newPassword;
    console.log(this.password, '❤️❤️');
  }
}
