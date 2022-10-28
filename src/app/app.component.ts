import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', 
  standalone: true,
  providers: [
    AuthInterceptor,
  ],
  imports: [
    RouterModule
  ]
})
export class AppComponent {  
}
