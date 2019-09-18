import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  displayedColumns: string[] = ["texto", "psiquico", "fisiologico", "comportamental", "validado"];
  datasetList = [];

  constructor(private service: DadosService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.find().subscribe(data => (this.datasetList = data));
  }
}

