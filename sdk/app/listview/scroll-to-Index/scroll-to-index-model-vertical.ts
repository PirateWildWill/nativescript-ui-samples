import { ObservableArray } from "data/observable-array";
import observableModule = require("data/observable");
import { DataItem } from "./data-item";
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable {
    private _items: ObservableArray<DataItem>;
    private _options: Array<string> = ["None", "Top", "CenteredVertically", "Bottom"];
    private _selectionInfo;

    constructor() {
        super();
        let selectedIbdex = 1;
        this._selectionInfo = {
            options: this._options,
            index: selectedIbdex
        };
        this.set("myScrollPosition", this._options[selectedIbdex]);
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<DataItem>();

            for (var i = 1; i <= 100; i++) {
                this._items.push(new DataItem(i, "Item " + i));
            }
        }
        return this._items;
    }

    public updateViewModel() {
        var index: number = this._selectionInfo.index;
        switch (index) {
            case 1:
                this.set("myScrollPosition", this._options[1]);
                break;
            case 2:
                this.set("myScrollPosition", this._options[2]);
                break;
            case 3:
                this.set("myScrollPosition", this._options[3]);
                break;
            case 4:
                this.set("myScrollPosition", this._options[4]);
                break;
            case 5:
                this.set("myScrollPosition", this._options[5]);
                break;
            case 6:
                this.set("myScrollPosition", this._options[6]);
                break;
            case 7:
                this.set("myScrollPosition", this._options[7]);
                break;
        }
    }


    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "./navigation/options-menu/options",
            context: this._selectionInfo,
            animated: true
        };

        frameModule.topmost().navigate(navigationEntry);
    }
}