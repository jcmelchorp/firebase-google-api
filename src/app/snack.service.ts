import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(
    private snackBar: MatSnackBar
  ) { }

  copyToClipboardSuccess() {
    this.snackBar.open('Se ha copiado el ID: ');
    return this.snackBar._openedSnackBarRef;
  }
  errorDisplay() {
    this.snackBar.open('Ocurrió un error');
    return this.snackBar._openedSnackBarRef;
  }
}
