import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatButtonDirective } from './directives/mat-btn.directive';

@NgModule({
  declarations: [AppComponent, MatButtonDirective],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
