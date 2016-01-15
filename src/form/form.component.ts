/**
 * Created by jgluhov on 15/01/16.
 */
import {Component} from 'angular2/core';
import {
    FORM_DIRECTIVES,
    ControlGroup,
    FormBuilder,
    Validators,
    AbstractControl,
    Control
} from 'angular2/common';

@Component({
    selector: 'app-form',
    directives: [FORM_DIRECTIVES],
    template: `
    <div class="uk-vertical-align uk-text-center uk-height-1-1">
        <div class="uk-vertical-align-middle app-component-form">
            <form [ngFormModel]="appForm" (ngSubmit)="onSubmit(appForm.value)" class="uk-panel uk-panel-box uk-form">
                <div class="uk-alert uk-alert-danger" *ngIf="!username.valid && username.touched">Username is invalid</div>
                <div class="uk-alert uk-alert-danger" *ngIf="username.hasError('required') && username.touched">Username is required</div>
                <div class="uk-alert uk-alert-danger" *ngIf="username.hasError('invalidUsername') && username.touched">Username not begin with 'jgluhov'</div>
                <fieldset>
                    <div class="uk-form-row">
                        <label for="username" class="uk-hidden">Username</label>
                        <input type="text"
                               id="username"
                               class="uk-width-1-1 uk-form-large"
                               placeholder="Username"
                               [class.uk-form-danger]="!username.valid && username.touched"
                               [ngFormControl]="username">
                    </div>
                    <div class="uk-form-row">
                        <label for="password" class="uk-hidden">Password</label>
                        <input type="password"
                               class="uk-width-1-1 uk-form-large"
                               placeholder="Password"
                               [class.uk-form-danger]="!password.valid && password.touched"
                               [ngFormControl]="password">
                    </div>
                    <div class="uk-form-row">
                        <button type="submit" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
    `
})

export class AppFormComponent {
    appForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;

    constructor(fb: FormBuilder) {
        this.appForm = fb.group({
            'username': ['', Validators.compose([
                Validators.required,
                this.usernameValidator
            ])],
            'password': ['', Validators.required]
        });

        this.username = this.appForm.controls['username'];

        this.username.valueChanges.subscribe((value: string) => {
           console.log(`username changed to: ${value}`);
        });

        this.password = this.appForm.controls['password'];

        this.password.valueChanges.subscribe((value: string) => {
           console.log(`password changed to: ${value}`);
        });

        this.appForm.valueChanges.subscribe((value: string) => {
           console.log(`form changed to: `, value);
        });
    }
    onSubmit(value: string): void {
        console.log(`you submitted  value: ${value}`);
    }
    usernameValidator(control: Control): { [s:string]: boolean } {
        if(!control.value.match(/^jgluhov/)) {
            return {invalidUsername: true};
        }
    }
}