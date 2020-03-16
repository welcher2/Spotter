import { Directive, ElementRef, Renderer2, OnDestroy, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[dob-mask]'
})
export class DobDirective implements OnDestroy, OnInit {
    private _dobControl: AbstractControl;
    private _preValue: string;

    @Input()
    set dobControl(control: AbstractControl) {
        this._dobControl = control;
    }
    @Input()
    set preValue(value: string) {
        this._preValue = value;
    }

    private sub: Subscription;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.dobValidate();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    dobValidate() {

        this.sub = this._dobControl.valueChanges.subscribe(data => {

            let preInputValue: string = this._preValue;
            var lastChar: string = preInputValue.substr(preInputValue.length - 1);
            var newVal = data.replace(/\D/g, '');

            //Get the initial starting index of the text
            let start = this.renderer.selectRootElement('#dob').selectionStart;
            //Get the cursor location or end of selection
            let end = this.renderer.selectRootElement('#dob').selectionEnd;

            //If a char was deleted
            if (data.length < preInputValue.length) {
                if (preInputValue.length < start) {
                    if (lastChar == '/') {
                        newVal = newVal.substr(0, newVal.length - 1);
                    }
                } if (newVal.length == 0) {
                    newVal = '';
                }
                else if (newVal.length <= 2) {
                    newVal = newVal.replace(/^(\d{0,2})/, '$1/');
                } else if (newVal.length <= 5) {
                    newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2/');
                } else {
                    newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
                }

                this._dobControl.setValue(newVal, { emitEvent: false });
                this.renderer.selectRootElement('#dob').setSelectionRange(start, end);
            } else {
                var removedD = data.charAt(start);
                if (newVal.length == 0) {
                    newVal = '';
                }
                else if (newVal.length <= 2) {
                    newVal = newVal.replace(/^(\d{0,2})/, '$1/');
                } else if (newVal.length <= 5) {
                    newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2/');
                } else {
                    newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
                }
                if (preInputValue.length >= start) {
                    if (removedD == '/') {
                        start = start + 1;
                        end = end + 1;
                    }
                    this._dobControl.setValue(newVal, { emitEvent: false });
                    this.renderer.selectRootElement('#dob').setSelectionRange(start, end);
                } else {
                    this._dobControl.setValue(newVal, { emitEvent: false });
                    this.renderer.selectRootElement('#dob').setSelectionRange(start + 2, end + 2);
                }
            }
        });
    }
}
