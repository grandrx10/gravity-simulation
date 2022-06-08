class TutorialButton extends Button{
    constructor(x, y, length, width, colour, text, stateShown){
        super(x, y, length, width, colour, text, stateShown);
    }

    checkPressed(x,y, game, entities, controller){
        if (super.contains(x, y) && game.state == this.stateShown && game.previousState == game.state){
            game.state = "inExplanation";
            game.text = "W - Move the camera up\n" +
            "A - Move the camera left\n" +
            "S - Move the camera down\n" + 
            "D - Move the camera right\n" +
            "LEFT MOUSE CLICK - Select an object to focus on\n"+
            "Trail Length - Changes the length of the shadow left by objects\n"+
            "Simulation Speed - Changes the speed at which the simulation runs";
        }
    }
}