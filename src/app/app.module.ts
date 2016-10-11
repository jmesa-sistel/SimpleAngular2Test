import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// import {AccordionModule} from 'primeng/components/accordion/accordion';
// import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
// import {BreadcrumbModule} from 'primeng/components/breadcrumb/breadcrumb';
import {ButtonModule} from 'primeng/components/button/button';
// import {CalendarModule} from 'primeng/components/calendar/calendar';
// import {CarouselModule} from 'primeng/components/carousel/carousel';
// import {ChartModule} from 'primeng/components/chart/chart';
// import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
// import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
// import {SharedModule} from 'primeng/components/common/shared';
// import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
// import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
// import {DataGridModule} from 'primeng/components/datagrid/datagrid';
// import {DataListModule} from 'primeng/components/datalist/datalist';
// import {DataScrollerModule} from 'primeng/components/datascroller/datascroller';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
// import {DialogModule} from 'primeng/components/dialog/dialog';
// import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
// import {DropdownModule} from 'primeng/components/dropdown/dropdown';
// import {EditorModule} from 'primeng/components/editor/editor';
// import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
// import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
// import {GalleriaModule} from 'primeng/components/galleria/galleria';
// import {GMapModule} from 'primeng/components/gmap/gmap';
// import {GrowlModule} from 'primeng/components/growl/growl';
// import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
// import {InputSwitchModule} from 'primeng/components/inputswitch/inputswitch';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
// import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
// import {LightboxModule} from 'primeng/components/lightbox/lightbox';
// import {ListboxModule} from 'primeng/components/listbox/listbox';
// import {MegaMenuModule} from 'primeng/components/megamenu/megamenu';
// import {MenuModule} from 'primeng/components/menu/menu';
// import {MenubarModule} from 'primeng/components/menubar/menubar';
// import {MessagesModule} from 'primeng/components/messages/messages';
// import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
// import {OrderListModule} from 'primeng/components/orderlist/orderlist';
// import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
// import {PaginatorModule} from 'primeng/components/paginator/paginator';
// import {PanelModule} from 'primeng/components/panel/panel';
// import {PanelMenuModule} from 'primeng/components/panelmenu/panelmenu';
// import {PasswordModule} from 'primeng/components/password/password';
// import {PickListModule} from 'primeng/components/picklist/picklist';
// import {ProgressBarModule} from 'primeng/components/progressbar/progressbar';
// import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
// import {RatingModule} from 'primeng/components/rating/rating';
// import {ScheduleModule} from 'primeng/components/schedule/schedule';
// import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
// import {SlideMenuModule} from 'primeng/components/slidemenu/slidemenu';
// import {SliderModule} from 'primeng/components/slider/slider';
// import {SpinnerModule} from 'primeng/components/spinner/spinner';
// import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
// import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
// import {TabViewModule} from 'primeng/components/tabview/tabview';
// import {TerminalModule} from 'primeng/components/terminal/terminal';
// import {TieredMenuModule} from 'primeng/components/tieredmenu/tieredmenu';
// import {ToggleButtonModule} from 'primeng/components/togglebutton/togglebutton';
// import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
// import {TooltipModule} from 'primeng/components/tooltip/tooltip';
// import {TreeModule} from 'primeng/components/tree/tree';
// import {TreeTableModule} from 'primeng/components/treetable/treetable';
// import {TriStateCheckboxModule} from 'primeng/components/tristatecheckbox/tristatecheckbox';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // AccordionModule,
    // AutoCompleteModule,
    // BreadcrumbModule,
    ButtonModule,
    // CalendarModule,
    // CarouselModule,
    // ChartModule,
    // CheckboxModule,
    // CodeHighlighterModule,
    // SharedModule,
    // ContextMenuModule,
    // DataGridModule,
    // DataListModule,
    // DataScrollerModule,
    // DataTableModule,
    // DialogModule,
    // ConfirmDialogModule,
    // DragDropModule,
    // DropdownModule,
    // EditorModule,
    // FieldsetModule,
    // FileUploadModule,
    // GalleriaModule,
    // GMapModule,
    // GrowlModule,
    // InputMaskModule,
    // InputSwitchModule,
    InputTextModule
    // InputTextareaModule,
    // LightboxModule,
    // ListboxModule,
    // MegaMenuModule,
    // MenuModule,
    // MenubarModule,
    // MessagesModule,
    // MultiSelectModule,
    // OrderListModule,
    // OverlayPanelModule,
    // PaginatorModule,
    // PanelModule,
    // PanelMenuModule,
    // PasswordModule,
    // PickListModule,
    // ProgressBarModule,
    // RadioButtonModule,
    // RatingModule,
    // ScheduleModule,
    // SelectButtonModule,
    // SlideMenuModule,
    // SliderModule,
    // SpinnerModule,
    // SplitButtonModule,
    // TabMenuModule,
    // TabViewModule,
    // TerminalModule,
    // TieredMenuModule,
    // ToggleButtonModule,
    // ToolbarModule,
    // TooltipModule,
    // TreeModule,
    // TreeTableModule,
    // TriStateCheckboxModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
