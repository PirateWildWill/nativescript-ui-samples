import { ViewModel } from "./scroll-to-index-model-vertical";
import { RadListView } from "nativescript-telerik-ui-pro/listView";
import frameModule = require("ui/frame");

var viewModelContext: ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new ViewModel();
    }
    
    page.bindingContext = viewModelContext;
}

export function onNavigatedTo(args) {
    viewModelContext.updateViewModel();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onTap() {
    let listView: RadListView = <RadListView>(frameModule.topmost().currentPage.getViewById("listView"));
    listView.scrollToIndex(49);
}