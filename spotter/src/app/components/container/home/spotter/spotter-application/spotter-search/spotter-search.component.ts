import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-spotter-search',
  templateUrl: './spotter-search.component.html',
  styleUrls: ['./spotter-search.component.css']
})
export class SpotterSearchComponent implements OnInit {
    searchForm;
    resultLocations;

    constructor(
        private formBuilder: FormBuilder
    ) { 
        this.searchForm = this.formBuilder.group({
            location: '',
            shortTerm: '',
            longTerm: '',
        });
        this.resultLocations = [];
    }

    ngOnInit(): void {

    }

    onSubmit(searchForm): void {
        //Send form information to a service to retrieve all viable locations within 3 miles
        this.resultLocations = [{
            latitude: '39.8282',
            longitude: '-98.5795',
            price: '2.50',
            rate: 'hour'
        }, 
        {
            latitude: '37.0896',
            longitude: '-95.7027',
            price: '2.55',
            rate: 'hour'
        }];
    }

}
