import { CardTitleComponent } from "./components/card/card-title.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppPipeModule } from "./pipes/appPipe.module";
import { LayoutComponent } from "./components/layout/layout.component";
import { MenuComponent } from "./components/menu/menu.component";
import {
	GridDirective,
	GridItemDirective,
	FlexItemDirective,
	IsLinkActiveDirective,
} from "./directives";
import {
	HeaderComponent,
	IconComponent,
	NotfoundComponent,
	PageComponent,
	CountDownComponent,
	OnModelComponent,
	CardComponent,
} from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
		FormsModule,
		ReactiveFormsModule,
		AppPipeModule,
		DragDropModule,
		MatRippleModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatSnackBarModule,
		MatSelectModule,
		MatRadioModule,
		MatCheckboxModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DragDropModule,
		MatRippleModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatSnackBarModule,
		MatSelectModule,
		MatRadioModule,
		MatCheckboxModule,

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
		IsLinkActiveDirective,
	],
})
export class CoreModule {}
