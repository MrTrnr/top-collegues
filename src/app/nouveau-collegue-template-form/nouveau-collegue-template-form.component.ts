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

}
