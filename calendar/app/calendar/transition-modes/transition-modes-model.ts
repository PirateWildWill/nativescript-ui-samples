import * as calendarModule from "nativescript-ui-calendar";
import * as observableModule from "tns-core-modules/data/observable";
import * as frameModule from "tns-core-modules/ui/frame";

export class ViewModel extends observableModule.Observable {
    private _transitionInfo;
    constructor() {
        super();
        this._transitionInfo = {
            options: ["None", "Slide", "Stack", "Flip", "Fold", "Float", "Rotate"],
            index: 1
        };
    }

    set calendarTransition(value: calendarModule.CalendarTransitionMode) {
        this.set("CalendarTransition", value);
    }

    get calendarTransition(): calendarModule.CalendarTransitionMode {
        return this.get("CalendarTransition");
    }

    public updateTransitionMode() {
        const index: number = this._transitionInfo.index;
        switch (index) {
            case 0:
                this.calendarTransition = calendarModule.CalendarTransitionMode.None;
                break;
            case 1:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Slide;
                break;
            case 2:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Stack;
                break;
            case 3:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Flip;
                break;
            case 4:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Fold;
                break;
            case 5:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Float;
                break;
            case 6:
                this.calendarTransition = calendarModule.CalendarTransitionMode.Rotate;
                break;
            default:
                break;
        }
    }

    public onOptionsTapped() {
        const navigationEntry = {
            moduleName: "navigation/options-menu/options-page",
            context: this._transitionInfo,
            animated: true
        };

        frameModule.topmost().navigate(navigationEntry);
    }

}