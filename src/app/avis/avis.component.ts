import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() aviserEvt = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

aimer(){
  this.score++;
}

aviser(){
  this.aviserEvt.emit();
}

}
