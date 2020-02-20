import { MfgRect } from "./MfgRect";

/**
 *   Handles the demo logic.
 */
export class MfgDemo
{
    /** The canvas rendering context for all 2D drawing operations. */
    private                 canvasContext           :CanvasRenderingContext2D       = null;

    /** All rects to show in the demo. */
    private                 items                   :Array<MfgRect>                 = null;


    /**
     *   Creates a new demo logic.
     */
    public constructor()
    {
    }

    /**
     *   Inits this demo from scratch.
     */
    public init():void
    {
        this.initCanvas();
        this.initRects();

        this.startDemoLoop();
    }

    /**
     *   Inits the canvas and appends it to the HTML body element.
     */
    private initCanvas():void
    {
        let canvasTag:HTMLCanvasElement = document.createElement("canvas");

        canvasTag.width                 = 900;
        canvasTag.height                = 500;
        canvasTag.style.backgroundColor = "white";

        document.body.appendChild(canvasTag);

        this.canvasContext = canvasTag.getContext("2d");
    }
    /**
     *   Inits all rects for this level.
     */
    private initRects():void
    {
        this.items = [
            new MfgRect(125, 25,  75,  75,  "orange"),
            new MfgRect(300, 150, 120, 30,  "yellow"),
            new MfgRect(550, 250, 30,  120, "red"   ),
            new MfgRect(620, 75,  150, 50,  "grey"  ),
        ];


        console.log("Created [" + this.items.length + "] rects.");
    }

    /**
     *   Starts the endless demo loop.
     */
    private startDemoLoop():void
    {
        window.setInterval(this.tick, 10);
    }

    /**
     *   Handles one demo tick.
     */
    private tick=()=>
    {
        this.render();
        this.draw();
    };

    /**
     *   Renders the current game tick.
     */
    private render():void
    {
        for (let item of this.items) {
            item.y += 0.5;
        }
    }

    /**
     *   Draws the current game tick.
     */
    private draw():void
    {
        this.canvasContext.clearRect(0, 0, 900, 500);
        for (let item of this.items) {
            item.draw(this.canvasContext);
        }
    }
}