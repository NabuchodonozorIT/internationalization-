import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FileLoaderService {

  public dictionary$ = new EventEmitter<object>();

  constructor(private http: HttpClient) {
  }

  public initLanguagePath(language: string): void {
    this.getJSON(`languages/${language}.json`).subscribe(data => {
      this.dictionary$.next(data);
    });
  }

  public getJSON(url: string): Observable<object> {
    return this.http.get(url);
  }

}
