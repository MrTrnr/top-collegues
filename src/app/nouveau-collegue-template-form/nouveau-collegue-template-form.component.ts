import { Component, OnInit } from '@angular/core';
import { BigCollegue } from '../model';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Partial<BigCollegue>={};

  constructor() { }

  ngOnInit(): void {
  }

  ajouter(){
// POST sur url avec les données de type BigCollegue
// /collegues
// {
//   "nom": "string",
//   "photo": "string",
//   "prenom": "string",
//   "pseudo": "string"
// }

    console.log(this.collegue);


    this.collegue ={};
  }

  // ajouter(collegue: BigCollegue): Observable<Collegue> {

  //   return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1", {
  //     avis,
  //     pseudo: collegue.pseudo
  //   }
  //   );
  // }
}
