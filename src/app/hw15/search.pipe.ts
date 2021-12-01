import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from './interfaces/interface';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: IUser[], newField: string): any {
    if (!newField) {
      return users;
    }
    if (!users) {
      return []
    }
    return users.filter(user =>  user.name.toLowerCase().includes(newField.toLowerCase()) ||
         user.lastname.toLowerCase().includes(newField.toLowerCase()) ||
         user.phone.includes(newField)
      )
  }

}
