import jsonData from '../api/data.json';
import { plainToClass } from "class-transformer";

// Defining our Todo class
export class Finding {
    type?: string;
    x?: string;
    y?: string;
    label?: string;
    note?: string;
    hours?: string;
    minutes?: string;
    distanceFromCenter?: string;
}

export interface IFinding {
    type?: string;
    x?: string;
    y?: string;
    label?: string;
    note?: string;
    hours?: string;
    minutes?: string;
    distanceFromCenter?: string;
}
// export const FindingData = plainToClass(Finding, jsonData);
   
// Object.assign() will clone jsonData into
// Todo class object Storing the new class
// object in a typescript variable

// export const FindingData = plainToClass(Finding, jsonData);