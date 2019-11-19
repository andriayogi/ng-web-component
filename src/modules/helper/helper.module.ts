import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OjekButtonComponent } from './components/button/button.component';
import { OjekInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        AngularFontAwesomeModule
    ],
    exports: [
        OjekButtonComponent,
        OjekInputComponent
    ],
    declarations: [
        OjekButtonComponent,
        OjekInputComponent
    ],
    providers: [],
    bootstrap: [OjekButtonComponent, OjekInputComponent]
})
export class HelperModule { }
