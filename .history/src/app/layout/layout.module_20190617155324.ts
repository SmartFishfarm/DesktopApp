import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class LayoutModule { 
  
}
