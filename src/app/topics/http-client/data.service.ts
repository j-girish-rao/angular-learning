import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DataService {
    
    _httpClient : HttpClient;
    

    constructor(private httpClient : HttpClient) {
        this._httpClient = httpClient;
    }

    getData(endPoint : string) {
        return this._httpClient.get(endPoint)
        .pipe(catchError((error) => {
            console.error(error);
            throw error;
        }));
    }

    // getData(endPoint : string) {

    //     const httpOptions = {
    //         headers : new HttpHeaders({
    //             'Content-Type' : 'application/json',
    //             'Authorization' : ''
    //         })
    //     };

    //     return this._httpClient.get(endPoint, httpOptions)
    //     .pipe(catchError((error) => {
    //         console.error(error);
    //         throw error;
    //     }));
    // }
}