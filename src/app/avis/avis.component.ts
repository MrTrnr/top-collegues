import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from '../model';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();
  @Input() jaimeActif = true;
  @Input() jeDestesteActif = true;

  constructor() { }

  ngOnInit(): void {
  }

aimer(){
  this.avis.emit(Avis.AIMER);
}

detester(){
  this.avis.emit(Avis.DETESTER);
}

}
