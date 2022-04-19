import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Medicine } from './Medicine';
@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  serviceUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl;
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Medicine[]>(map((data: any) => data.users));
  }

  updateMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.patch<Medicine>(`${this.serviceUrl}/${medicine.id}`, medicine);
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.serviceUrl}/add`, medicine);
  }

  deleteMedicine(id: number): Observable<Medicine> {
    return this.http.delete<Medicine>(`${this.serviceUrl}/${id}`);
  }

  deleteMedicines(medicines: Medicine[]): Observable<Medicine[]> {
    return forkJoin(
      medicines.map((medicine) =>
        this.http.delete<Medicine>(`${this.serviceUrl}/${medicine.id}`)
      )
    );
  }
}
