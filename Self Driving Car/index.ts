import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface autonomousCarProps {
    isRunning?: boolean;
    steeringControl:Steering;
}

interface Events {
    [i: string]: boolean;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

class Car implements AutonomousCar {
    
    isRunning;
    steeringControl;
    
    constructor(props: autonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl=props.steeringControl;
    }

    respond(events: Events) {
        if (this.isRunning) {

        } else {
            console.log('Car is off');
        }
    }
}

class SteeringControl implements Steering {
    execute(command: string) {
        console.log(`Executing:${command}`);
    }
    
    turn(direction:string){
        this.execute(`turn ${direction}`);
    }
}


let steering =new SteeringControl();
steering.turn('izquierda');
let autonomousCar = new Car({ isRunning: true });

console.log(autonomousCar.respond(getObstacleEvents()));