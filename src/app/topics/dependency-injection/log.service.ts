import { Injectable } from "@angular/core";
// Root means provide servicein the root of the application. 
// That is visible through out the application.
@Injectable({
    providedIn: 'root'
})
export class LogService {
    logMessage(msg : string): void {
        console.log(msg);
    }

    logCritical(msg : string): void {
        console.error(msg);
    }

    logInfo(msg : string): void {
        console.info(msg);
    }
}