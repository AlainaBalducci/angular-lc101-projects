import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos:)';
  image1 = 'https://media.istockphoto.com/id/938702108/photo/white-cat-lies-on-womans-knees.jpg?s=612x612&w=0&k=20&c=5cASPIkTo6iYodgTCgooXO_GpBC5cA_6czTQsjxqka0=';
  image2 = 'https://media.istockphoto.com/id/1168451046/photo/cat-and-dog-sleeping-puppy-and-kitten-sleep.jpg?s=612x612&w=0&k=20&c=WufdaqZhhwOT6sJFAb6g7-laVoBWaf66XefiWUt44BQ=';
  image3 = 'https://media.istockphoto.com/id/1097490360/vector/vector-illustration-of-cute-black-cat.jpg?s=612x612&w=0&k=20&c=Ef0qYl79aZJ6NJXJVbJ0onjXVNnSyqrN_TKPjieAIGE=';

  constructor() { }

  ngOnInit() {
  }

}