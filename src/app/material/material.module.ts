import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const material = [
   MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
]
@NgModule({
  imports: [
   material
  ],
  exports: [
   material
  ]
})
export class MaterialModule {}
