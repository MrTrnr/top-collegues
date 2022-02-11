import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model';

const listeCollegues = [
  {
    pseudo: 'Wonder Woman',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lynda_Carter_Wonder_Woman.JPG/250px-Lynda_Carter_Wonder_Woman.JPG',
    score: 500
  },
  {
    pseudo: 'Bionic Woman',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Bionicwoman.jpg/250px-Bionicwoman.jpg',
    score: 200
  },
  {
    pseudo: 'BatMan',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg',
    score: -100
  },
  {
    pseudo: 'SuperMan',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
    score: -300
  }
];

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})

export class ListeColleguesComponentComponent implements OnInit {
  
  collegues: Collegue[];

  constructor() {
    this.collegues = listeCollegues;
  }

  ngOnInit(): void {
  }

}
