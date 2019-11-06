import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  usuario = '';
  labelList = {
    0: "Nenhum",
    1: "Fisiológico",
    2: "Comportamental",
    3: "Psíquico"
  };

  displayedColumns: string[] = ["texto", "label", "validado", "data"];
  datasetList = [];

  constructor(private service: DadosService) { }

  ngOnInit() {
  }

  findAll() {
    this.service.findTimelines(this.usuario).subscribe(data => (this.datasetList = data));
  }

}
