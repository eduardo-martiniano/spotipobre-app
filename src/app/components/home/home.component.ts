import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date = new Date().getFullYear();
  public convertButtonDisabled = false;
  public format = 'downloadmp3';
  public url = "https://www.youtube.com/watch?v=Iy-dJwHVX84&list=RDIy-dJwHVX84&start_radio=1&ab_channel=KendrickLamar-Topic";
  
  constructor(private spotiService: SpotiService, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }

  convert() {
    this.convertButtonDisabled = true;
    this.spotiService.validate(this.url).then(response => {
      if (response.valid) {
        this.spotiService.download(this.url, this.format).then(response => {
          this.convertButtonDisabled = false;
          this.snackBar.open("Baixando...", "Fechar", {
            duration: 3 * 1000
          });
          this.url = ""; 
        }).catch((message) => {
          this.snackBar.open(message, "Fechar");
          this.convertButtonDisabled = false;
        });
      }
      else {
        this.snackBar.open("URL invalida", "Fechar");
        this.url = "";
        this.convertButtonDisabled = false;
      }
    });

  }

}
