import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { IBugInterface } from '../models/ibug-interface';

@Component({
  selector: 'app-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})

export class BugsListComponent implements OnInit{
  bugs:IBugInterface[]= [];
  
  constructor(private dataService: DataServiceService){ 
    this.dataService.getData().subscribe((data) => {this.bugs = data});
  }

  ngOnInit() {
  }

  importBug() {
    var comments : string[] = [];
    const newItem:IBugInterface = {"id": (this.bugs.length + 1).toString() ,
                      'title': 'titse test',
                      'description': 'desc test',
                      'priority': 1,
                      'reporter': 'DEV',
                      'status': 'status test',
                      'created': 'date test',
                      'comments': comments
                    };
    this.dataService.addData(newItem);
    this.dataService.getData().subscribe((data) => {this.bugs = data});

  }
}
