import { Pipe, PipeTransform } from '@angular/core';
import { ProfessionModel } from '../../models/profession.model';

@Pipe({
  name: 'professionPipe'
})
export class ProfessionPipe implements PipeTransform {

  transform(value: ProfessionModel[], search: string): ProfessionModel[] {
    if(search == "")
      return value;
    
    return value.filter(p=> p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
