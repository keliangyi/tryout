import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent, IconComponent, NotfoundComponent, PageComponent } from './components';
import { AppPipeModule } from './pipes/appPipe.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { GridDirective, GridItemDirective, FlexItemDirective } from './directives';




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
    ],
    exports: [
        CommonModule,
        DragDropModule,
        MatRippleModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,



        HeaderComponent,
        LayoutComponent,
        MenuComponent,
        IconComponent,
        NotfoundComponent,
        PageComponent,
        AppPipeModule,
        GridDirective,
        GridItemDirective,
        FlexItemDirective

    ]
})
export class JdyModuleModule { }
