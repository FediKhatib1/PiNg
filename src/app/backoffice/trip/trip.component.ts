

import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/collections';
import { ChartData, ChartOptions } from 'chart.js';

import { Trip } from '../model/Trip';
import { TripService } from '../services/tripservice.service';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: 'trip.component.html',
 
})

export class TripComponent implements OnInit {
  displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];
  exampleDatabase: TripService | null;
  //triplist : any[];
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  triplist : Observable<Trip[]>;
  tripnbr : number = 0;
  country : any[]
  nbrVisit : number=0;
  nbrSemi : number = 0;
  tripChartData : ChartData
  barChartOptions: ChartOptions;
  barChartType:any;
  ss:any;
  barChartData: { data: number[]; label: string; }[];
  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: TripService) {}

              
              public barChartLabels = ['Trips Type'];
              public  = 'bar';
              public barChartLegend = true;
              

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {

  
    this.loadData();
    this.dataService.getalltrips().subscribe(res=>{
     this.tripnbr=res.length;
     this.nbrVisit = res.filter(trip =>trip.object == "VISIT").length;
     this.nbrSemi = res.filter(trip =>trip.object == "SEMENAR").length;
this.barChartOptions ={responsive: true,
plugins: {
  title: {
    display: true,
    text: 'Trips Charts',
  },
},
};
      this.barChartType = 'bar'
     this.barChartData = [
      {data: [this.nbrVisit], label: 'visit'},
      {data: [this.nbrSemi,], label: 'semenar'},
    ];


        
      
    })
   
  

  }

  refresh() {
    this.loadData();
    console.log(this.tripnbr)
   
   
  }

  
  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {issue: Trip }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
       // this.exampleDatabase.addProduct(this.dataService.getDialogData());
        this.refresh();
    
      }
    });
  }
 
  deleteItem(i: number, idTrip: number,destination:string) {
    this.index = i;
    this.id = idTrip;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {idTrip: idTrip,destination:destination}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.idTrip === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refresh();
      }
    });
  }

  startEdit(i: number, idTrip: number, destination: string, object: string, departureDate: Date, arrivalDate: Date, program: string) {
    this.id = idTrip;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {idTrip: idTrip, destination: destination, object: object, departureDate: departureDate, arrivalDate: arrivalDate, program: program}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.idTrip === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refresh();
      }
    });
  }



  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }






  

  /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    // OLD METHOD:
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }*/



  public loadData() {
    this.exampleDatabase = new TripService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });


    
  }
}

export class ExampleDataSource extends DataSource<Trip> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Trip[] = [];
  renderedData: Trip[] = [];

  constructor(public _exampleDatabase: TripService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Trip[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();


    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((issue: Trip) => {
          const searchStr = (issue.idTrip + issue.program ).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }

  disconnect() {}


  /** Returns a sorted copy of the database data. */
  sortData(data: Trip[]): Trip[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.idTrip, b.idTrip]; break;
       
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
