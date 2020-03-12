import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDob]'
})
export class DobDirective {

    lastValid: string = '';
    regex = / ([0][1-9]|[1][0-2])[\/]([0][1-9]|[1-2][0-9]|[3][0-1])[\/]([1][9][3-9][0-9]|[2][0-9][0-9][0-9])/;
    regexM = new RegExp("[0]|[1]");
    regexMm = new RegExp("[0][1-9]|[1][0-2]");
    regexD = new RegExp("[0]|[1 - 2]|[3]");
    regexDd = new RegExp(" [0][1-9]|[1-2][0-9]|[3][0-1]");
    regexY = new RegExp("[1]|[2]");
    regexYy = new RegExp("[1][9]|[2][0]");
    regexYyy = new RegExp("[1][9][3-9]|[2][0][0]");
    regexYyyy = new RegExp("[1][9][3-9][0-9]|[2][0][0][0-2]");

    constructor(private el: ElementRef, private _renderer: Renderer2) { }

    @HostListener('keyup', ['$event']) handleKeyUp(event: KeyboardEvent) {
        if(this.el.nativeElement.value.length > 10) {
            this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value.substr(0, 10));
            return;
        }
        if (event.code !== "Backspace") {
            this.checkRegex(event);
        }
    }

    checkRegex(event: any) {
        var updatedVal: string = '';
        
        switch(this.el.nativeElement.value.length) {
            case 1: {
                if (this.regexM.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 2: {
                if (this.regexMm.test(this.el.nativeElement.value)) {
                    updatedVal = this.el.nativeElement.value.concat('/');
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedVal);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 4: {
                if (this.regexD.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 5: {
                if (this.regexDd.test(this.el.nativeElement.value)) {
                    updatedVal = this.el.nativeElement.value.concat('/');
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedVal);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 7: {
                if (this.regexY.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 8: {
                if (this.regexYy.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 9: {
                if (this.regexYyy.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            case 10: {
                if (this.regexYyyy.test(this.el.nativeElement.value)) {
                    this.lastValid = this.el.nativeElement.value;
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value);
                    return;
                } else {
                    this._renderer.setProperty(this.el.nativeElement, 'value', this.lastValid);
                    return;
                }
            }
            default: 
                return;
        }
    }


}
