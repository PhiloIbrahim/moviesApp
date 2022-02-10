import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:object[];
  userData = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.minLength(7)]),
    userAge: new FormControl('',[Validators.min(15),Validators.max(50)]),
    userSakary: new FormControl('')

  })
  submitForm() {
    console.log(this.userData.value)
  }

constructor(_MoviesService:MoviesService) { 
  _MoviesService.getMovies().subscribe(data => {this.movies = data.results;})
}

  ngOnInit(): void {
  }

}
