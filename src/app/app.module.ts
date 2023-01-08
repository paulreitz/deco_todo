import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BackdropComponent } from './containers/backdrop/backdrop.component';
import { ScreenComponent } from './containers/screen/screen.component';
import { ContentComponent } from './containers/content/content.component';
import { BackBorderComponent } from './deco/back-border/back-border.component';
import { ShadowScreenComponent } from './containers/shadow-screen/shadow-screen.component';
import { UpperDecoComponent } from './deco/upper-deco/upper-deco.component';
import { MidDecoComponent } from './deco/mid-deco/mid-deco.component';
import { LowerDecoComponent } from './deco/lower-deco/lower-deco.component';
import { TitleDecoComponent } from './deco/title-deco/title-deco.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        BackdropComponent,
        ScreenComponent,
        ContentComponent,
        BackBorderComponent,
        ShadowScreenComponent,
        UpperDecoComponent,
        MidDecoComponent,
        LowerDecoComponent,
        TitleDecoComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
