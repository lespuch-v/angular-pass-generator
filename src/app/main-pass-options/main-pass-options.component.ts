import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-pass-options',
  templateUrl: './main-pass-options.component.html',
  styleUrls: ['./main-pass-options.component.css']
})
export class MainPassOptionsComponent {

  characterRange: number = 6;
  isUpperCaseAllowed: boolean = false;
  isLowerCaseAllowed: boolean = false;
  isNumberAllowed: boolean = false;
  isSymbolsAllowed: boolean = false;
  newPassword = '';

  @Output() passwordChanged = new EventEmitter<string>();

  upperCaseLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  lowerCaseLetters = [...'abcdefghijklmnopqrstuvwxyz'];
  symbolsAndNonNumeric = [...'!@#$%^&*()-_=+[]{};:\'",.<>/?`~|\\'];
  nubs = [...'0123456789'];

  generateRandomIndex(arr: Array<string | number>): number {
    return Math.floor(Math.random() * arr.length);
  }

  getPassword() {
    this.newPassword = '';
    let allowedCharacters: any[] = [];

    if (this.isUpperCaseAllowed) {
      allowedCharacters = allowedCharacters.concat(this.upperCaseLetters);
    }
    if (this.isLowerCaseAllowed) {
      allowedCharacters = allowedCharacters.concat(this.lowerCaseLetters);
    }
    if (this.isNumberAllowed) {
      allowedCharacters = allowedCharacters.concat(this.nubs);
    }
    if (this.isSymbolsAllowed) {
      allowedCharacters = allowedCharacters.concat(this.symbolsAndNonNumeric);
    }

    if (allowedCharacters.length === 0) {
      alert('Please select at least one option for the password.');
      return;
    }

    for (let i = 0; i < this.characterRange; i++) {
      this.newPassword += allowedCharacters[this.generateRandomIndex(allowedCharacters)];
    }

    this.passwordChanged.emit(this.newPassword);
  }

  updateValues($event: any) {
    this.characterRange = $event.target.value;
  }
}
