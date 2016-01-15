/**
 * Created by jgluhov on 15/01/16.
 */
import './app.component.styl';
import {Component} from 'angular2/core';
import {AppFormComponent} from '../form/form.component';

@Component({
    selector: 'app',
    template: `<app-form></app-form>`,
    directives: [AppFormComponent]
})

export class AppComponent {}