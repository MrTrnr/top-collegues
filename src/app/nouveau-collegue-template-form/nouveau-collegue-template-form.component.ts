import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { BigCollegue } from './../model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Partial<BigCollegue>={};

  constructor(private _http:HttpClient) { }

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
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

this._http.post("https://formation-angular-collegues.herokuapp.com/api/v1/collegues",
{
  nom: "le nom",
  photo: "url de la photo",
  prenom: "le prenom",
  pseudo: "le pseudo"
},httpOptions).subscribe((data: any) => {console.log(data);},(error: HttpErrorResponse) => {
console.log("error", error);

});

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
