import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective, multi: true}]
})
export class NomPrenomValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl):ValidationErrors | null {
   //
    return null;
  }
}
