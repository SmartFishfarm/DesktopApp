import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class LayoutModule { 

}
