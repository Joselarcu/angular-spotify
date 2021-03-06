import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists = [];
  searchTerm: string = "";
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
   
  }

  searchArtist(){
     this.spotifyService.getArtists(this.searchTerm).subscribe(data=> this.artists = data);
  }

}
