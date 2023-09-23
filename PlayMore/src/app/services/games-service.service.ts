import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  private games_url = 'https://api.igdb.com/v4'
  private token_req = 'https://id.twitch.tv/oauth2/token'
  private token : any
  client_id= 'yufxbypgbmtv4cw8gojp0pjamus1q6'

  client_secret='6rt25yje2my2na1g2huu0xy2wctvht'
  

  constructor(private http: HttpClient) { 

    // http_token = http.post()
    let header = new HttpHeaders({"client_id":this.client_id, "client_secret":this.client_secret, "grant_type":"client_credentials" })

    this.token = http.post(this.token_req, {}, {headers: header}).subscribe(data<token_response> => {
      return data.access_token
    })

  }





}
