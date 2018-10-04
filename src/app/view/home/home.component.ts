import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public albums = []
  constructor( private albumService: AlbumsService ) {

    this.albums = albumService.getAll();

   }

  ngOnInit() {
    

  }

}
