import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

import { ComponentModule } from './shared/component/component.module';
import { UserListModule } from './features/user-list/user-list.module';
import { UserDetailModule } from './features/user-detail/user-detail.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    UserListModule,
    UserDetailModule,
    ComponentModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: loadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
