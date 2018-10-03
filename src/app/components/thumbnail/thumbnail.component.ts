import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

@Input() album = {}

  public showSongs = false;

  constructor() { }

  ngOnInit() {
    console.log( this.album )
  }

  toggleSongs(){
    this.showSongs = !this.showSongs;
  }

  songsFalse(){
    this.showSongs = false;
  }

}
