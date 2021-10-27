import { CardTitleComponent } from './components/card/card-title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { AppPipeModule } from './pipes/appPipe.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { GridDirective, GridItemDirective, FlexItemDirective, IsLinkActiveDirective, } from './directives';
import {
    HeaderComponent,
    IconComponent,
    NotfoundComponent,
    PageComponent,
    CountDownComponent,
    OnModelComponent,
    CardComponent
} from './components';




@NgModule({
    declarations: [
        HeaderComponent,
        IconComponent,
        NotfoundComponent,
        PageComponent,
        LayoutComponent,
        MenuComponent,
        GridDirective,
        GridItemDirective,
        FlexItemDirective,
        IsLinkActiveDirective,
        CountDownComponent,
        OnModelComponent,
        CardComponent,
        CardTitleComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppPipeModule,
        DragDropModule,
        MatRippleModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatSnackBarModule,
    ],
    exports: [
        CommonModule,
        DragDropModule,
        MatRippleModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatSnackBarModule,



        HeaderComponent,
        LayoutComponent,
        MenuComponent,
        IconComponent,
        NotfoundComponent,
        PageComponent,
        CountDownComponent,
        OnModelComponent,
        CardComponent,
        CardTitleComponent,


        AppPipeModule,


        GridDirective,
        GridItemDirective,
        FlexItemDirective,
        IsLinkActiveDirective

    ]
})
export class CoreModule { }
