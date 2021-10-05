import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  //Até neste momento só estou criando um observable.
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${environment.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${environment.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }
}
