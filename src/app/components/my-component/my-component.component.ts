import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
	selector: 'app-my-component',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './my-component.component.html',
	styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
	@Input() data: any[] = [];
	@Output() movieAddedToFavorites = new EventEmitter<string>();
	@Output() movieAddedToWatchList = new EventEmitter<string>();
 
	addToFavorites(movie: any) {
	  this.movieAddedToFavorites.emit(movie.title);
	  console.log('addToFavorites:', movie.title);

	}
 
	addToWatchList(movie: any) {
	  this.movieAddedToWatchList.emit(movie.title);
	}
 }
