import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type = 'password';
  public barLabel: string = "Strong password:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];

  fieldTextType: boolean;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
   }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  
    // Switching method 
    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }

}
