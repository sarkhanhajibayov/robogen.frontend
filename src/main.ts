import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom([AppRoutingModule,BrowserAnimationsModule]),
    provideHttpClient(),
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ]
})
  .catch((err) => console.error(err));
