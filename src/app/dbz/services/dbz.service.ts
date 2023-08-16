import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ //Decorador que le dice a Angular que esto es un servicio
    providedIn: 'root' //Desde Angular 6 esto esta por defecto
})
export class DbzService {


    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }

    ];

    addCharacter(character: Character): void {

        const newCharacter: Character = {id: uuid(), ...character };

        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number) {
    //     this.characters.splice(index, 1);
    // }


    deleteCharacterById(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
    }



}