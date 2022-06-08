class Simulation2Button extends Button{
    constructor(x, y, length, width, colour, text, stateShown){
        super(x, y, length, width, colour, text, stateShown);
    }

    checkPressed(x,y, game, entities, controller){
        if (super.contains(x, y) && game.state == this.stateShown&& game.previousState == game.state){
            game.state = "inSimulation";
            game.beginTime = new Date();
            // SIMULATION #2
            entities.push(new Entity(400, 300, 10000,100, 0, 1));
            entities.push(new Entity(400, 500, 100, 10, orbitVelocity(10000, 200), 2));
            controller.focusIndex = 0;
        }
    }
}