import { MfgRect } from './MfgRect';
import { KeyCodes } from './KeyCodes';
import { KeySystem } from './KeySystem';

/**
 *   Handles the demo logic.
 */
export class MfgDemo
{
    /** The canvas rendering context for all 2D drawing operations. */
    private                 canvasContext           :CanvasRenderingContext2D       = null;
    /** The key system. */
    private                 keySystem               :KeySystem                      = null;

    /** All rects to show in the demo. */
    private                 items                   :MfgRect[]                 = null;

    private                 player                  :MfgRect                        = null;

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
        this.initKeySystem();
        this.initGameElements();

        this.startDemoLoop();
    }

    /**
     *   Inits the canvas and appends it to the HTML body element.
     */
    private initCanvas():void
    {
        const canvasTag:HTMLCanvasElement = document.createElement('canvas');

        canvasTag.width                 = 1200;
        canvasTag.height                = 700;
        canvasTag.style.backgroundColor = 'white';

        document.body.appendChild(canvasTag);

        this.canvasContext = canvasTag.getContext('2d');
    }

    /**
     *   Inits the key system.
     */
    private initKeySystem():void
    {
        this.keySystem = new KeySystem();
    }

    /**
     *   Inits all rects for this level.
     */
    private initGameElements():void
    {
        this.items = [
            new MfgRect(125, 25,  75,  75,  'orange'),
            new MfgRect(300, 150, 120, 30,  'yellow'),
            new MfgRect(550, 250, 30,  120, 'red'   ),
            new MfgRect(620, 75,  100, 50,  'grey'  ),
            new MfgRect( 800, 40, 300, 50, 'red' ),
        ];

        this.player = new MfgRect(100, 200, 50, 40, 'blue');

        // eslint-disable-next-line no-console
        console.log('Created [' + this.items.length + '] rects.');
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
        for (const item of this.items) {
            item.y += 0.8;
        }

        if ( this.keySystem.isPressed( KeyCodes.KEY_RIGHT ) )
        {
            this.player.x += 5.0;
        }

        if ( this.keySystem.isPressed( KeyCodes.KEY_LEFT ) )
        {
            this.player.x -= 5.0;
        }

        if ( this.keySystem.isPressed( KeyCodes.KEY_UP ) )
        {
            this.player.y -= 5.0
        }

        if ( this.keySystem.isPressed( KeyCodes.KEY_DOWN ) )
        {
            this.player.y += 5.0
        }

        // check collision of player with item
        for (const item of this.items) {

            if ( this.player.collidesWithRect( item  ) )
            {
                // console.log( "kollision!" );

                item.color = 'transparent';
            }
        }

        // lets player move threw a wall to the opposite wall
        if ( this.player.x <=0 ) {

            // console.log( "hit the end." );

            this.player.x = 1200
        }

        if ( this.player.x == 1205 ) {

            this.player.x = 0
        }

       if ( this.player.y <=0 ) {

           this.player.y = 700
        }

        if ( this.player.y === 705 ) {

            this.player.y = 0
        }


        for (const item of this.items) {

            if ( this.player.collidesWithRect ( item ) ) {
                location.reload( true);
            }
            }

    }

    /**
     *   Draws the current game tick.
     */
    private draw():void
    {
        this.canvasContext.clearRect(0, 0, 1200, 700);

        for (const item of this.items) {
            item.draw(this.canvasContext);
        }
        // this.canvasContext.clearRect(0, 0, 900, 500);

        this.player.draw(this.canvasContext);

    }
}
