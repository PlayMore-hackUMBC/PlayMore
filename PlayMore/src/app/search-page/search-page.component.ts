import { Component, OnInit, OnChanges } from '@angular/core';
import { GamesServiceService } from '../services/games-service.service';
import { ActivatedRoute, RouterEvent, Event, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

  public games :any

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GamesServiceService){

      router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        console.log(event);

        // First get the game id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const gamenameFromRoute = String(routeParams.get('searchval'));
        let nm = gamenameFromRoute.split(' ').join('-').toLowerCase()
        // Find the game that correspond with the id provided in route.
        console.log("calling the get game by id")
        this.gameService.findGameByName(nm).subscribe(resp => {
          this.games=resp; 
          if (this.games.results !== undefined) {
            this.games = this.games.results
            console.log(this.games.results); // now string
          } 
        });
        
    });
  }

  ngOnInit(){
    // First get the game id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const gamenameFromRoute = String(routeParams.get('searchval'));
    let nm = gamenameFromRoute.split(' ').join('-').toLowerCase()
    // Find the game that correspond with the id provided in route.
    console.log("calling the get game by id")
    this.gameService.findGameByName(nm).subscribe(resp => {
      this.games=resp; 
      if (this.games.results !== undefined) {
        this.games = this.games.results
        console.log(this.games.results); // now string
      } 
    });
  }
}
