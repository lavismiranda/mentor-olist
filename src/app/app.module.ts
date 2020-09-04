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
import { OlistUiInfoComponent } from './components/ui/olist-ui-info/olist-ui-info.component';
import { MatMenuModule } from '@angular/material/menu';
import { OlistScreenDashboardComponent } from './components/screen/olist-screen-dashboard/olist-screen-dashboard.component';
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    OlistUiToolbarComponent,
    OlistUiTableComponent,
    OlistUiInfoComponent,
    OlistScreenDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
      }, MentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
