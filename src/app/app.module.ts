import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoleBtnDirective } from './directives/role-btn.directive';

@NgModule({
  declarations: [AppComponent, RoleBtnDirective],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
