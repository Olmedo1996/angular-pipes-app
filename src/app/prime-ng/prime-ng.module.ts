import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
