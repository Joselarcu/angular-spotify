import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any ;
  songs: any[];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(params => params['id']).subscribe(id => {
    this.spotifyService.getArtist(id).
    subscribe(res => this.artist = res);

    this.spotifyService.getTopSongs(id).
    subscribe(res => this.songs = res);
  });
  }

}
