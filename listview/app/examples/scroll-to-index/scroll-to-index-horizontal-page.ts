import { ViewModel } from "./scroll-to-index-model-horizontal";
import { RadListView } from "nativescript-ui-listview";
import { topmost } from "tns-core-modules/ui/frame";

let viewModelContext: ViewModel;

export function onPageLoaded(args) {
    const page = args.object;
    if (viewModelContext === undefined) {
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
    let listView: RadListView = <RadListView>(topmost().currentPage.getViewById("listView"));
    listView.scrollToIndex(50, false, viewModelContext.get('myScrollPosition'));
}