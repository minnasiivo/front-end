import { analyzeAndValidateNgModules } from '@angular/compiler';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFilterPipe } from '../pipes/news-filter.pipe';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
  providers: [NewsFilterPipe]
})
export class CinemaComponent implements OnInit {


  cinemaData$: Observable<any>;
  searchTerm = '';



  panelOpenState = false;
  _enableDynamicHyperlinks: any;

  constructor(private cinemaService: MoviesService, private newsFilter: NewsFilterPipe) {



    this.cinemaData$ = this.cinemaService.getData();
  }

  ngOnInit(): void {

    //this.cinemaData$ = this.cinemaService.getData();
  }

}
