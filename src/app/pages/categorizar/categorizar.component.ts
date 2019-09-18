import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material';
import { DadosService } from 'src/app/services/dados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorizar',
  templateUrl: './categorizar.component.html',
  styleUrls: ['./categorizar.component.scss']
})
export class CategorizarComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  dados = [];

  constructor(
    private service: DadosService,
    // private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.findTweets();
  }

  findTweets() {
    this.service.findCategorizar().subscribe(
      data => this.dados = data,
      () => this.showMessage("Erro ao buscar dados")
    )
  }

  showMessage(message: string) {
    // this.snackBar.open(message, "Ok", {
    //   duration: 3000
    // });
  }

  onSubmit() {

    this.service.save(this.dados).subscribe(
      () => {
        this.showMessage("Dado atualizado com sucesso");
        this.findTweets();
      },
      () => this.showMessage("Erro ao salvar dado")
    );

  }
}