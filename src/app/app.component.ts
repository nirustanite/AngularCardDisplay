import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    { 
      title: "Neat Tree",
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this near tree today'
    },
    { 
      title: "Snowy Mountain",
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here ias a picture of snowy mountain'
    },
    { 
      title: "Mountain Biking",
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking122',
      content: 'I did some biking today'
    }
  ]
}
