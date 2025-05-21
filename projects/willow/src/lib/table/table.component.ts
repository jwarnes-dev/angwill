import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Column {
  field: string;
  headerName: string;
  width?: number;
  sortable?: boolean;
}

export interface Row {
  [key: string]: any;
}

export type RowStyle = 'stripes' | 'lines';
export type HeaderStyle = 'basic' | 'heavy';
export type Density = 'normal' | 'condensed';
export type SortDirection = 'asc' | 'desc' | null;

@Component({
  selector: 'willow-table',
  templateUrl: './table.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() rows: Row[] = [];
  @Input() rowStyle: RowStyle = 'lines';
  @Input() headerStyle: HeaderStyle = 'basic';
  @Input() density: Density = 'normal';

  sortField: string | null = null;
  sortDirection: SortDirection = null;
  sortedRows: Row[] = [];

  ngOnInit(): void {
    this.sortedRows = [...this.rows];
  }

  isSortable(column: Column): boolean {
    return column.sortable !== false;
  }

  sort(column: Column): void {
    if (!this.isSortable(column)) {
      return;
    }

    const field = column.field;

    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' :
        this.sortDirection === 'desc' ? null : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }

  private sortData(): void {
    if (!this.sortField || this.sortDirection === null) {
      this.sortedRows = [...this.rows];
      return;
    }

    this.sortedRows = [...this.rows].sort((a, b) => {
      const valueA = a[this.sortField!];
      const valueB = b[this.sortField!];

      if (valueA === valueB) {
        return 0;
      }

      const direction = this.sortDirection === 'asc' ? 1 : -1;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * direction;
      }

      return (valueA < valueB ? -1 : 1) * direction;
    });
  }
}
