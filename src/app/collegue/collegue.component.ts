import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from './../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  // @Input() col!: Collegue;



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

  traiterEvtAvis(avisEmis: Avis){
    if (this.col){
      if (avisEmis === Avis.AIMER){
        this.col.score = this.col.score + 100;
      }
      else if(avisEmis === Avis.DETESTER){
        this.col.score = this.col.score - 100;
      }
    }
  }

}
