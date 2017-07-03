import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any [] = [];
  searchUrl: string = "https://api.spotify.com/v1/search";
  artistUrl: string = "https://api.spotify.com/v1/artists/";

  constructor( private http: Http) { }

  getArtists(searchTerm: string){
    let query = "?q=" + searchTerm + "&type=artist";
    let url = this.searchUrl + query;

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDAi8r_FRQlsobQN6zFpe1lWb7E17H_yHX9ZmZ2Dd3bbUExjLTrC_qyVmGBJrMbLtDu3n7V0tcSz-mnYYUO7A');

    return this.http.get( url,  {headers}  )
      .map( res => {
        this.artists = res.json().artists.items;
        return res.json().artists.items;
      });

  }

  getArtist(id: string){
    let url = this.artistUrl + id ;

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDAi8r_FRQlsobQN6zFpe1lWb7E17H_yHX9ZmZ2Dd3bbUExjLTrC_qyVmGBJrMbLtDu3n7V0tcSz-mnYYUO7A');

    return this.http.get( url,  {headers}  )
      .map( res => {
        return res.json();
      });

  }

  getTopSongs(id: string){
    let url = this.artistUrl + id + "/top-tracks?country=ES";

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDAi8r_FRQlsobQN6zFpe1lWb7E17H_yHX9ZmZ2Dd3bbUExjLTrC_qyVmGBJrMbLtDu3n7V0tcSz-mnYYUO7A');

    return this.http.get( url,  {headers}  )
      .map( res => {
        return res.json().tracks;
      });

  }

}
