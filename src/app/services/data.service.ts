import { HttpClient } from '@angular/common/http';
import { Collegue } from './../model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private busTabCollegues = new Subject<Collegue[]>();

  constructor(private http: HttpClient) { }

  abonnerFluxTabCollegues(): Observable<Collegue[]> {
    return this.busTabCollegues.asObservable();
  }

  rechercherCollegueParPseudo(pseudo: string) : Observable<Collegue> {
    return this.http.get<Collegue>(`https://formation-angular-collegues.herokuapp.com/api/v1/collegues/${pseudo}`);
  }
}

