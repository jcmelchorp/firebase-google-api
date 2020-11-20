import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { faEdit } from '@fortawesome/free-regular-svg-icons';

import { CourseWork, State, CourseState } from './../classroom.model';

import { TrabajoClaseListaDataSource } from './trabajo-clase-lista-datasource';
const { keys } = Object;
const SELECTED_SLICE_KEY = 'SELECTED_SLICE_KEY';
@Component({
  selector: 'app-trabajo-clase-lista',
  templateUrl: './trabajo-clase-lista.component.html',
  styleUrls: ['./trabajo-clase-lista.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TrabajoClaseListaComponent implements AfterViewInit, OnInit {
  @Input() data: CourseWork[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CourseWork>;
  public dataSource: MatTableDataSource<CourseWork>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'state', 'creationTime', 'actions'];
  expandedElement: any;
  public searchForm: FormGroup;
  public creationTimeSearch = '';
  public courseWorkTitle = '';
  select;
  faEdit = faEdit;
  courseWorkState: State;
  searching = false;
  public menus: string[] = keys(State).map(k => State[k]);
  isExpansionDetailRow = (i: number, row: CourseWork) => row.hasOwnProperty('detailRow');
  ngOnInit() {
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
      courseWorkTitle: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      creationTimeSearch: new FormControl(''),
      select: new FormControl(this.courseWorkState)
    });
  }

  /* this method well be called for each row in table  */
  getFilterPredicate() {
    return (row: CourseWork, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const courseWorkTitle = filterArray[1];

      const matchFilter = [];

      // Fetch data from row
      const columnDepartureDate = new Date(row.creationTime).toLocaleDateString();
      const columnCourseWorkTitle = row.title;

      // verify fetching data by our searching values
      const customFilterDD = columnDepartureDate.toLowerCase().includes(departureDate);
      const customFilterCW = columnCourseWorkTitle.toLowerCase().includes(courseWorkTitle);

      // push boolean values into array
      matchFilter.push(customFilterDD);
      matchFilter.push(customFilterCW);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }
  applyFilter() {
    const date = this.searchForm.get('creationTimeSearch').value;
    const as = this.searchForm.get('courseWorkTitle').value;
    // const ds = this.searchForm.get('departureStation').value;
    const fixedDate = new Date(date);
    this.creationTimeSearch = (date === null || date === '') ? '' : fixedDate.toLocaleDateString();
    this.courseWorkTitle = as === null ? '' : as;

    // create string of our searching values and split if by '$'
    const filterValue = this.creationTimeSearch + '$' + this.courseWorkTitle /*+ '$' + this.arrivalStation*/;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterCourseWorkPublish(courseWork: CourseWork[]): CourseWork[] {
    return courseWork.filter(cw => cw.state.toString() === this.courseWorkState.toString());
  }
  /*
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
