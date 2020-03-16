import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaskDirective } from '../Shared/mask/mask.directive';
import { DobDirective } from '../Shared/mask/dob.directive';



@NgModule({
  declarations: [
    MaskDirective,
    DobDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
      CommonModule,
      ReactiveFormsModule,
      FontAwesomeModule,
      MaskDirective,
      DobDirective
  ]
})
export class SharedModule { }
