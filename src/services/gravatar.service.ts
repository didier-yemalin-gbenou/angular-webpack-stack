import { Md5 } from 'ts-md5/dist/md5';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

interface GravatarInterface {
  displayName?: string;
  hash?: string;
  id?: string;
  preferredUsername?: string;
  profileUrl?: string;
  requestHash?: string;
  thumbnailUrl?: string;
}

@Injectable()
export default class GravatarService {
  private gravatarUrl = '//www.gravatar.com/';

  constructor(private http: Http) { }

  public getAvatar(email: string): Observable <any> {
    const emailHash: string = Md5.hashStr(email).toString();
    const url: string = `${this.gravatarUrl}${emailHash}.json`;

    return this.http.get(url)
      .map((res: Response) => {
        console.log(res, 'response');
        return  res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}