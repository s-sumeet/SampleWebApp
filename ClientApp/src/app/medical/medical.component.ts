import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultIterableDiffer, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { MedicineService } from './medicine.service';
import { Medicine, MedicineColumns } from './Medicine';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html'
})
export class MedicalComponent {
  displayedColumns: string[] = MedicineColumns.map((col) => col.key);
  columnsSchema: any = MedicineColumns;
  dataSource = new MatTableDataSource<Medicine>();
  valid: any = {};

  constructor(public dialog: MatDialog, private medicineService: MedicineService) { }

  //ngOnInit() {
  //  this.medicineService.getMedicines().subscribe((res: any) => {
  //    this.dataSource.data = res;
  //  });
  //}

  //editRow(row: Medicine) {
  //  if (row.id === 0) {
  //    this.medicineService.addMedicine(row).subscribe((newUser: Medicine) => {
  //      row.id = newUser.id;
  //      row.isEdit = false;
  //    });
  //  } else {
  //    this.medicineService.updateMedicine(row).subscribe(() => (row.isEdit = false));
  //  }
  //}

  //addRow() {
  //  const newRow: Medicine = {
  //    id: 0,
  //    fullName: '',
  //    notes: '',
  //    expDate: '',
  //    quantity: 0,
  //    isEdit: true,
  //    isSelected: false,
  //  };
  //  this.dataSource.data = [newRow, ...this.dataSource.data];
  //}

  //removeRow(id: number) {
  //  this.medicineService.deleteMedicine(id).subscribe(() => {
  //    this.dataSource.data = this.dataSource.data.filter(
  //      (u: Medicine) => u.id !== id
  //    );
  //  });
  //}

  ////removeSelectedRows() {
  ////  const users = this.dataSource.data.filter((u: Medicine) => u.isSelected);
  ////  this.dialog
  ////    .open(ConfirmDialogComponent)
  ////    .afterClosed()
  ////    .subscribe((confirm) => {
  ////      if (confirm) {
  ////        this.medicineService.deleteMedicines(users).subscribe(() => {
  ////          this.dataSource.data = this.dataSource.data.filter(
  ////            (u: Medicine) => !u.isSelected
  ////          );
  ////        });
  ////      }
  ////    });
  ////}

  //inputHandler(e: any, id: number, key: string) {
  //  if (!this.valid[id]) {
  //    this.valid[id] = {};
  //  }
  //  this.valid[id][key] = e.target.validity.valid;
  //}

  //disableSubmit(id: number) {
  //  if (this.valid[id]) {
  //    return Object.values(this.valid[id]).some((item) => item === false);
  //  }
  //  return false;
  //}
}

