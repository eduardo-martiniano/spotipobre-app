import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  date = new Date().getFullYear();
  converting = false;
  format = 'downloadmp3';
  url = '';

  constructor(
    private spotiService: SpotiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  convert() {
    this.converting = true;
    this.spotiService.validate(this.url).then((response) => {
      if (response.valid) {
        this.spotiService
          .download(this.url, this.format)
          .then((response) => {
            this.converting = false;
            this.snackBar.open('Baixando...', 'Fechar', {
              duration: 3 * 1000,
            });
            this.url = '';
          })
          .catch((message) => {
            this.snackBar.open(message, 'Fechar');
            this.converting = false;
          });
      } else {
        this.snackBar.open('URL invalida', 'Fechar');
        this.url = '';
        this.converting = false;
      }
    });
  }

  buttonDisabled(): Boolean {
    let empty = this.url.replace(' ', '') == '';
    return empty || this.converting;
  }
}
