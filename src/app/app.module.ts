import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SortablejsModule } from 'angular-sortablejs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CreatorComponent } from './creator/creator.component';
import { HomeComponent } from './home/home.component';
import { PublishComponent } from './publish/publish.component';
import { CourseService } from './course.service';


@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent, 
    HomeComponent,
    PublishComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    SortablejsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})


export class AppModule { }

