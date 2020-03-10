import { Component, OnInit } from '@angular/core';
import { faCar, faCaravan, faMotorcycle, faTruck } from '@fortawesome/free-solid-svg-icons';
import * as L from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    faCar = faCar;
    faTruck = faTruck;
    faCaravan = faCaravan;
    faMotorcycle = faMotorcycle;
    private map;

    constructor() { }

    ngOnInit(): void {
        this.initMap();
    }

    private initMap(): void {
        this.map = L.map('map', {
            center: [36.2172, -81.6810],
            zoom: 13
        });
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);
    }

}
