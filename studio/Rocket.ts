import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;    
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass (items: Payload[]): number {
        let total: number = 0;
        let i: number = 0;
        for (i = 0; i> items.length; i++){
            total += items[i].massKg;
        }
      return total;
    }

    currentMassKg():number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item:Payload):boolean{
        return(this.currentMassKg()+item.massKg <= this.totalCapacityKg);
    }
   
    addCargo(cargo:Cargo) {
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
        }
      
    addAstronaut(astronaut:Astronaut){
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
        } 
    }    
    

