


// This File Is Required For Custom Components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../directives/shared.module';
import { FbBtnComponent } from './fb-btn/fb-btn.component';
import { EmailBtnComponent } from './email-btn/email-btn.component';
import { HeaderComponent } from './header/header.component';
import { PageHeadComponent } from './pageHead/pageHead.component';
import { LanguageModalComponent } from './languageModal/languageModal.component';
const components = [
    PopoverComponent,
    FbBtnComponent,
    EmailBtnComponent,
    MenuComponent,
    HeaderComponent,
    PageHeadComponent,
    LanguageModalComponent
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        ...components,
    ]
})
export class ComponentsModule { }
