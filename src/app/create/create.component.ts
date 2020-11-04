import { Component, OnInit } from '@angular/core';

import { CreateService } from './create.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

one = {
   Name: '',
   Email: ''
};

  constructor(
private createService: CreateService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.createService.GpCreate(this.one)
  .subscribe(
    data => {
       console.log('data created successfully');
this.one.Name = '';

this.one.Email = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}