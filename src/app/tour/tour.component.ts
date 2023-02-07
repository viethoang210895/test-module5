import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Tour} from "../model/tour";
import {Observable} from "rxjs";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit{

  formTour!: FormGroup;
  tours: Tour[] = [];
  tour!: Observable<Tour>;
constructor(private tourService:TourService) {
}
  ngOnInit(): void {
    this.tourService.findAll().subscribe((data) => {
      this.tours = data;
    });
  }
  delete(id: number) {
    if (confirm("Are you want to delete this student?")) {
      this.tourService.deleteById(id).subscribe(() => {
        this.ngOnInit()
      })
    }
  }
}
