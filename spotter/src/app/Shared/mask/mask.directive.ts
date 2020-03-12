import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[telephone-input-mask]'
})
export class MaskDirective {

    constructor(private el: ElementRef, private _renderer: Renderer2) {
    }

    @HostListener('keyup', ['$event']) handleKeyUp(event: KeyboardEvent) {
        var updatedValue: string = this.el.nativeElement.value;
        if(this.el.nativeElement.value.length > 14) {
            this._renderer.setProperty(this.el.nativeElement, 'value', this.el.nativeElement.value.substr(0, 14));
            return;
        }
        if(!isNaN(Number(event.key))) {
            switch(this.el.nativeElement.value.length) {
                case 1: {
                    updatedValue = '(' + updatedValue;
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedValue);
                    return;
                }
                case 4: {
                    updatedValue = updatedValue + ') ';
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedValue);
                    return;
                }
                case 5: {
                    updatedValue = updatedValue.substr(0, 4) + ') ' + updatedValue.substr(4, 1);
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedValue);
                    return;
                }
                case 6: {
                    updatedValue = updatedValue + ' ';
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedValue);
                    return;
                }
                case 10: {
                    updatedValue = updatedValue.substr(0, 9) + '-' + updatedValue.substr(9, 1);
                    this._renderer.setProperty(this.el.nativeElement, 'value', updatedValue);
                    return;
                }
            }
        }
    }

}
