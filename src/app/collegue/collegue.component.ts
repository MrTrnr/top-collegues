import { Component, OnInit } from '@angular/core';
import * as collegue from './../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  pseudo!: string;
  adresseUrl!: string;
  score!: number;


  constructor() { }

  ngOnInit(): void {
    this.pseudo = 'moi super pseudo';
    this.adresseUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Valentino_Rossi_2010_Qatar.jpg/420px-Valentino_Rossi_2010_Qatar.jpg';
    this.score = 15;

  }

}
