class Welcome{
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("ENTER IF U DARE");
        this.title = createElement("h1");
        this.title.html("CREATIONS OF NATURE")  
      }
    
      setElementsPosition() {
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.title.position(width /2 -500, 100);
      }

      setElementsStyle() {
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.title.class("title");
      }

      hide() {
        this.title.hide();
        this.playButton.hide();
        this.input.hide();
      }

      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          playerName = this.input.value();
          gameState = 1;
        });
      }

      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
}