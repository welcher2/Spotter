import { Directive, ElementRef, Renderer2, OnDestroy, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[telephone-input-mask]'
})
export class MaskDirective implements OnDestroy, OnInit{
    private _phoneControl: AbstractControl;
    private _preValue: string;

    @Input()
    set phoneControl(control: AbstractControl) {
        this._phoneControl = control;
    }
    @Input()
    set preValue(value: string) {
        this._preValue = value;
    }

    private sub: Subscription;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.phoneValidate();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    phoneValidate() {

        this.sub = this._phoneControl.valueChanges.subscribe(data => {

            let preInputValue: string = this._preValue;
            var lastChar: string = preInputValue.substr(preInputValue.length - 1);
            var newVal = data.replace(/\D/g, '');

            //Get the initial starting index of the text
            let start = this.renderer.selectRootElement('#tel').selectionStart;
            //Get the cursor location or end of selection
            let end = this.renderer.selectRootElement('#tel').selectionEnd;

            //If a char was deleted
            if (data.length < preInputValue.length) {
                if (preInputValue.length < start) {
                    if (lastChar == ')') {
                        newVal = newVal.substr(0, newVal.length - 1);
                    }
                }
                if (newVal.length == 0) {
                    newVal = '';
                }
                else if (newVal.length <= 3) {
                    newVal = newVal.replace(/^(\d{0,3})/, '($1');
                } else if (newVal.length <= 6) {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
                } else {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
                }

                this._phoneControl.setValue(newVal, { emitEvent: false });
                this.renderer.selectRootElement('#tel').setSelectionRange(start, end);
            } else {
                var removedD = data.charAt(start);
                if (newVal.length == 0) {
                    newVal = '';
                }
                else if (newVal.length <= 3) {
                    newVal = newVal.replace(/^(\d{0,3})/, '($1)');
                } else if (newVal.length <= 6) {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
                } else {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
                }
                if (preInputValue.length >= start) {
                    if (removedD == '(') {
                        start = start + 1;
                        end = end + 1;
                    }
                    if (removedD == ')') {
                        start = start + 2;
                        end = end + 2;
                    }
                    if (removedD == '-') {
                        start = start + 1;
                        end = end + 1;
                    }
                    if (removedD == " ") {
                        start = start + 1;
                        end = end + 1;
                    }
                    this._phoneControl.setValue(newVal, { emitEvent: false });
                    this.renderer.selectRootElement('#tel').setSelectionRange(start, end);
                } else {
                    this._phoneControl.setValue(newVal, { emitEvent: false });
                    this.renderer.selectRootElement('#tel').setSelectionRange(start + 2, end + 2); 
                }
            }
        });
    }
}
