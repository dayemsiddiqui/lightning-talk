import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTooltipModule,
  MatButtonModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {}
