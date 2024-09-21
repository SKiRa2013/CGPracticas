import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarPageComponent } from "./modules/sidebar/views/sidebar-page/sidebar.component";
import { HomePageComponent } from './modules/home/views/home-page/home.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarPageComponent, HomePageComponent, AuthPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-routes';
}
