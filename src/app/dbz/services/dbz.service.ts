import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ //Decorador que le dice a Angular que esto es un servicio
    providedIn: 'root' //Desde Angular 6 esto esta por defecto
})
export class DbzService {


    public characters: Character[] = [{
        name:'Krilin',
        power:1000
    },{
        name: 'Goku',
        power: 9500
    },{
        name: 'Vegeta',
        power: 7500
    }

];

    onNewCharacter(character:Character):void{
       this.characters.push(character);
    }
    
    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
    }
    



}