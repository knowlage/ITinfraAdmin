import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isProfileName:Observable<String>

  

  ngOnInit() {
    this.isProfileName = this.authService.isProfileName
  }

  onLogout(){
    this.authService.logout()
  }

}
