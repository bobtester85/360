import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile : Profile = new Profile();
  constructor() { 
    this.profile.name = "Eugene"
  }

  ngOnInit(): void {
  }

}
