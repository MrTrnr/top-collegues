import { Component, OnInit } from '@angular/core';
import { Collegue } from './../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  col: Collegue = {
    pseudo: 'moi super pseudo',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/ValeYellow46_Signature.png',
    score: 0
  };
  // pseudo!: string;
  // adresseUrl!: string;
  // score!: number;


  constructor() { }

  ngOnInit(): void {
    }

}
