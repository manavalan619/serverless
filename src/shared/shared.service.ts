
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public DESKTOP_API = 'http://34.199.109.78:8000/desktop';
    public MOBILE_API = '/api/mobile';
}
