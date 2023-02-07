import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../model/tour";
import {Observable} from "rxjs";
import {TourService} from "../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formTour!: FormGroup;
  tours: Tour[] = [];
  tour!: Tour;

  constructor(private routerActive: ActivatedRoute,
              private router: Router, private tourService: TourService) {
  }

  ngOnInit(): void {
    const id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.formTour = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    })
    this.tourService.getById(id).subscribe((rs) => {
      this.tour = rs
      this.formTour.patchValue(rs);
    })
  }

  onSubmit() {
    this.tour = this.formTour.value
    if (this.tour.id==null || this.tour.id==0){
      this.tourService.save(this.tour).subscribe((data) => {
        this.tours = data
        this.router.navigate(['/tour'])
      })
    }else {
      this.tourService.edit(this.tour,this.tour.id).subscribe((data) => {
        this.tours = data
        this.router.navigate(['/tour'])
      })

    }

  }
}
