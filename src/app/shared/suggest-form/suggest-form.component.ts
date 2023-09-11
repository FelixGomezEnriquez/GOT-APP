import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-suggest-form',
  templateUrl: './suggest-form.component.html',
  styleUrls: ['./suggest-form.component.scss'],
})
export class SuggestFormComponent {
  constructor(private _snackBar: MatSnackBar) {}
  public suggestForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(),
  });

  getErrorMessage() {
    if (this.suggestForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.suggestForm.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  onSubmit() {
    console.log(this.suggestForm.value);
    this.suggestForm.reset({ email: '', message: '' });
    this.openSnackBar('Email send!', 'X', ['green-snackbar']);
  }
  openSnackBar(message: string, action: string, style: string[]): void {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: style,
    });
  }
}
