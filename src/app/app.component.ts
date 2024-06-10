import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './components/my-component/my-component.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, MyComponentComponent]
})
export class AppComponent {
  favoriteMovies: string[] = [];
  watchListMovies: string[] = [];
movies = [ {
	backdrop_path: "https://m.media-amazon.com/images/M/MV5BYTUzYTIwNWMtZWRjZC00MTMyLTlkMzYtNGZkNDcwZTYxYzU2XkEyXkFqcGdeQXVyNjMxMTE2Mjg@._V1_.jpg",
	id: 653346,
	overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
	release_date: "May 5, 2024",
	title: "Kingdom of the Planet of the Apes",
	rating: 8.5 
},
{
	backdrop_path: "https://dvvy6louqcr7j.cloudfront.net/vista/HO00014873/heroPoster/Civil-War.png",
	id: 929590,
	overview: "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
	release_date: "April 10, 2024",
	title: "Civil War",
	rating: 7.1 
},
{
	backdrop_path: "https://m.media-amazon.com/images/M/MV5BZGFlNDU4NGYtOWZlYi00YWYzLWE4MTctOWE4YjBlYzVlYjY1XkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_FMjpg_UX691_.jpg",
	id: 653346,
	overview: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
	release_date: "Mart 27, 2024",
	title: "Godzilla x Kong: The New Empire",
	rating: 7.2 
},
{
	backdrop_path: "https://m.media-amazon.com/images/M/MV5BZGYzYjQ3ZWItMGJlZC00YzAxLTgzMTItYzI5MjY2YjA4Mjk5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
	id: 653346,
	overview: "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
	release_date: "May 1, 2024",
	title: "Tarot",
	rating: 6.5 
}

]


onMovieAddedToFavorites(movieTitle: string) {
  this.favoriteMovies.push(movieTitle);
  console.log('onMovieAddedToFavorites:', this.favoriteMovies); 
}

onMovieAddedToWatchList(movieTitle: string) {
	this.watchListMovies.push(movieTitle); 
	console.log('onMovieAddedToWatchList:', this.watchListMovies); 
 }
 }


