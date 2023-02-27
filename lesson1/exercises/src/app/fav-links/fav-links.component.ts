import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  urlTitle = "My Favorite Links"
  favLinks = ["https://unsplash.com/s/photos/cute-animal", "https://www.buzzfeed.com/ishabassi/cute-animal-photos"];
  constructor() { }

  ngOnInit() {
  }

}
