import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../model';
@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(score:number): string {
    if (score < 0){
      return '- ' + (-score);
    }else if(score > 0){
      return '+ ' + score;
    }
    else {return '0'}
  }

}
