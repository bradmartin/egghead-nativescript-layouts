import { Observable } from 'data/observable';
import { topmost } from 'ui/frame';

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    public goToStack() {
        topmost().navigate('./pages/stack');
    }
    public goToAbsolute() {
        topmost().navigate('./pages/absolute');
    }
    public goToFlex() {
        topmost().navigate('./pages/flex');
    }
    public goToWrap() {
        topmost().navigate('./pages/wrap');
    }
    public goToDock() {
        topmost().navigate('./pages/dock');
    }
    public goToGrid() {
        topmost().navigate('./pages/grid');
    }

}