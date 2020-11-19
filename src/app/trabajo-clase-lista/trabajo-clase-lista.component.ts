import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { CourseWork } from './../classroom.model';

import { TrabajoClaseListaDataSource } from './trabajo-clase-lista-datasource';
@Component({
  selector: 'app-trabajo-clase-lista',
  templateUrl: './trabajo-clase-lista.component.html',
  styleUrls: ['./trabajo-clase-lista.component.scss']
})
export class TrabajoClaseListaComponent implements AfterViewInit, OnInit {
  @Input() data: CourseWork[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CourseWork>;
  //dataSource: TrabajoClaseListaDataSource;
  public dataSource: MatTableDataSource<CourseWork>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'creationTime'];
  public searchForm: FormGroup;
  public creationTimeSearch = '';
  public arrivalStation = '';
  public departureStation = '';
  ngOnInit() {
    //this.dataSource = new TrabajoClaseListaDataSource(this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.searchFormInit();
    this.dataSource.filterPredicate = this.getFilterPredicate();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  searchFormInit() {
    this.searchForm = new FormGroup({
      arrivalStation: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      departureStation: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      creationTimeSearch: new FormControl('')
    });
  }

  /* this method well be called for each row in table  */
  getFilterPredicate() {
    return (row: CourseWork, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const departureStation = filterArray[1];
      const arrivalStation = filterArray[2];

      const matchFilter = [];

      // Fetch data from row
      const columnDepartureDate = new Date(row.creationTime).toLocaleDateString();
      //const columnDepartureStation = row.route.departureStation.name;
      //const columnArrivalStation = row.route.arrivalStation.name;

      // verify fetching data by our searching values
      const customFilterDD = columnDepartureDate.toLowerCase().includes(departureDate);
      //const customFilterDS = columnDepartureStation.toLowerCase().includes(departureStation);
      //const customFilterAS = columnArrivalStation.toLowerCase().includes(arrivalStation);

      // push boolean values into array
      matchFilter.push(customFilterDD);
      // matchFilter.push(customFilterDS);
      // matchFilter.push(customFilterAS);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }
  applyFilter() {
    const date = this.searchForm.get('creationTimeSearch').value;
    // const as = this.searchForm.get('arrivalStation').value;
    // const ds = this.searchForm.get('departureStation').value;
    const fixedDate = new Date(date);
    this.creationTimeSearch = (date === null || date === '') ? '' : fixedDate.toLocaleDateString();
    // this.arrivalStation = as === null ? '' : as;
    // this.departureStation = ds === null ? '' : ds;

    // create string of our searching values and split if by '$'
    const filterValue = this.creationTimeSearch + '$' + this.departureStation + '$' + this.arrivalStation;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* availableSeats(seats: Seat[]): number {
    return seats.filter(seat => seat.status === SeatStatus.AVAILABLE).length;
  }

  unavailableSeats(seats: Seat[]): number {
    return seats.filter(seat => seat.status === SeatStatus.UNAVAILABLE).length;
  }

  soldSeats(seats: Seat[]): number {
    return seats.filter(seat => seat.status === SeatStatus.SOLD).length;
  }

  reserveSeats(seats: Seat[]): number {
    return seats.filter(seat => seat.status === SeatStatus.RESERVE).length;
  } */

}
