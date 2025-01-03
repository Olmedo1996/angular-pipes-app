import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    CardModule
  ]
})
export class PrimeNgModule { }