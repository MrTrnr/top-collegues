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
  
  boutonJaimeActif = false;
  boutonJeDetesteActif = false;

  constructor() { }

  ngOnInit(): void {
    this.gererEtatBoutons();
    }

    gererEtatBoutons(){
      if(this.col){
        const{score}=this.col;
        if(score >= 1000){
          this.boutonJaimeActif = false;
          this.boutonJeDetesteActif = true;
        }
        else if (score <= -1000){
          this.boutonJeDetesteActif = false;
          this.boutonJaimeActif = true;
        }
        else {
          this.boutonJaimeActif=true;
          this.boutonJeDetesteActif=true;
      }
      }
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
    this.gererEtatBoutons();
  }

}
