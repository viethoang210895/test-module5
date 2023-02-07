import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../model/tour";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  formDetail!: FormGroup;
  tours: Tour[] = [];
  tour!: Tour;
  constructor(private routerActive: ActivatedRoute,
              private router: Router, private tourService: TourService) {
  }

  ngOnInit(): void {
    const id = Number(this.routerActive.snapshot.paramMap.get("id"))
    this.formDetail = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    })
    this.tourService.getById(id).subscribe((rs) => {
      this.tour = rs
      this.formDetail.patchValue(rs);
    })
  }

}
