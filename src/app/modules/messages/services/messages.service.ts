import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {apiUrl} from '../../../config/app-config';

@Injectable()
export class MessagesService {

  constructor(private http: Http) {
  }

  getMessages() {
    const url = `${apiUrl}/podaci.json`;
    return this.http.get(url)
      .map((response: Response) => {
        const data = response.json();
        return data;
      });
  }

}
