// import jsonp = require('jsonp');
import {Md5} from 'ts-md5/dist/md5';
import {Injectable} from '@angular/core';
import {Response, Jsonp} from '@angular/http';
import {Observable} from 'rxjs';
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

interface EntryInterface {
  entry?: GravatarInterface[];
}

@Injectable()
export default class GravatarService {
  private static readonly gravatarUrl = '//www.gravatar.com/';

  constructor(private jsonp: Jsonp) { }

  public getAvatar(email: string) {
    const emailHash: string = Md5.hashStr(email).toString();
    const url: string = `${GravatarService.gravatarUrl}${emailHash}.json?callback=JSONP_CALLBACK`;

    return this.jsonp.request(url)
      .map((res: Response) => {
        const data: EntryInterface = res.json();

        return data.entry[0].thumbnailUrl;
      })
      .catch((error) => (
        Observable.throw(error.json().error || 'No image in gravatar'))
      );
  }
}