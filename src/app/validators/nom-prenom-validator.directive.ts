import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from '../nouveau-collegue-template-form/nouveau-collegue-template-form.component';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective, multi: true}]
})
export class NomPrenomValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl):ValidationErrors | null {
   if (NouveauCollegueTemplateFormComponent.nom==NouveauCollegueTemplateFormComponent.prenom){
     return {nomPrenomIdentique : true}
   }
    return null;
  }
}
