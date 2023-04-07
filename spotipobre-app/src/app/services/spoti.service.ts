import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotiService {
  private baseUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  validate(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseUrl + 'validate?url=' + url).subscribe(
        (result) => resolve(result),
        (error) => reject(error)
      );
    });
  }

  async download(url: string, format: string) {
    const res = await fetch(`${this.baseUrl}${format}?url=${url}`);
    if (res.status == 200) {
      var a = document.createElement('a');
      a.href = `${this.baseUrl}${format}?url=${url}`;
      a.setAttribute('download', '');
      a.click();
    }
  }
}
