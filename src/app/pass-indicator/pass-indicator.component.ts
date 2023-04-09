import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pass-indicator',
  templateUrl: './pass-indicator.component.html',
  styleUrls: ['./pass-indicator.component.css']
})
export class PassIndicatorComponent {
  @Input() password!: string;
  passwordStrength = 0;
  passwordStrengthMessage = '';
  progressBarColor = '';

  ngOnChanges(changes: SimpleChanges) {
    if ('password' in changes) {
      this.passwordStrength = this.getPasswordStrength(this.password);
      this.updateStrengthMessageAndColor();
    }
  }

  private getPasswordStrength(password: string | undefined): number {
    let strength = 0;

    // Check password length
    if (this.password.length >= 3 && this.password.length <= 24) {
      strength += this.password.length;
    }

    // Check for uppercase characters
    if (/[A-Z]/.test(this.password)) {
      strength += 5;
    }

    // Check for lowercase characters
    if (/[a-z]/.test(this.password)) {
      strength += 5;
    }

    // Check for numbers
    if (/\d/.test(this.password)) {
      strength += 5;
    }

    // Check for symbols
    if (/[\W_]/.test(this.password)) {
      strength += 5;
    }

    return strength;
  }
  private updateStrengthMessageAndColor(): void {
    if (this.passwordStrength <= 20) {
      this.passwordStrengthMessage = 'Very weak';
      this.progressBarColor = 'red';
    } else if (this.passwordStrength <= 3) {
      this.passwordStrengthMessage = 'Weak';
      this.progressBarColor = 'orange';
    } else if (this.passwordStrength <= 10) {
      this.passwordStrengthMessage = 'Good';
      this.progressBarColor = 'yellow';
    } else if (this.passwordStrength <= 15) {
      this.passwordStrengthMessage = 'Strong';
      this.progressBarColor = 'lightgreen';
    } else {
      this.passwordStrengthMessage = 'Very strong';
      this.progressBarColor = 'green';
    }
}
}
