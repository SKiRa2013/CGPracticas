import { Component } from '@angular/core';
import { SidebarPageComponent } from "../../../sidebar/views/sidebar-page/sidebar.component";
import { AuthPageComponent } from "../../../auth/views/auth-page/auth.component";
import { ContentPageComponent } from "../../../content/views/content-page/content-page.component";
import { SidetopPageComponent } from "../../../sidetop/views/sidetop-page/sidetop-page.component";
import { PrimePageComponent } from "../../../UI/views/prime-page/prime-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarPageComponent, AuthPageComponent, ContentPageComponent, 
            SidetopPageComponent, PrimePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent {

}
