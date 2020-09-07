import { MentorService } from './service/mentor/mentor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './mock/HttpMockRequestInterceptor';
import { HttpRequestInterceptor } from './mock/HttpRequestInterceptor';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OlistUiToolbarComponent } from './components/ui/olist-ui-toolbar/olist-ui-toolbar.component';
import { OlistUiTableComponent } from './components/ui/olist-ui-table/olist-ui-table.component';
import { MatMenuModule } from '@angular/material/menu';
import { OlistScreenDashboardComponent } from './components/screen/olist-screen-dashboard/olist-screen-dashboard.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { OlistUiInfoCardComponent } from './components/ui/olist-ui-info-card/olist-ui-info-card.component';
import { OlistUiOpointsComponent } from './components/ui/olist-ui-opoints/olist-ui-opoints.component';
import { OlistUiCompletedComponent } from './components/ui/olist-ui-completed/olist-ui-completed.component';
import { OlistUiSentComponent } from './components/ui/olist-ui-sent/olist-ui-sent.component';
import { OlistUiEvaluationComponent } from './components/ui/olist-ui-evaluation/olist-ui-evaluation.component';
import { OlistScreenProfileComponent } from './components/screen/olist-screen-profile/olist-screen-profile.component';
import { OlistUiProfileComponent } from './components/ui/olist-ui-profile/olist-ui-profile.component';
import { OlistUiComentComponent } from './components/ui/olist-ui-coment/olist-ui-coment.component';
import { OlistOpointsScreenComponent } from './components/screen/olist-opoints-screen/olist-opoints-screen.component';
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    OlistUiToolbarComponent,
    OlistUiTableComponent,
    OlistScreenDashboardComponent,
    OlistUiInfoCardComponent,
    OlistUiOpointsComponent,
    OlistUiCompletedComponent,
    OlistUiSentComponent,
    OlistUiEvaluationComponent,
    OlistScreenProfileComponent,
    OlistUiProfileComponent,
    OlistUiComentComponent,
    OlistOpointsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
      }, MentorService],
  bootstrap: [AppComponent],
  exports: [OlistScreenDashboardComponent, OlistScreenProfileComponent]
})
export class AppModule { }
