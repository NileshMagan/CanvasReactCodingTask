import jsonData from '../api/data.json';
import { plainToClass } from "class-transformer";

export class Finding {
    id?: number;
    type?: string;
    x?: string;
    y?: string;
    label?: string;
    note?: string;
    hours?: string;
    minutes?: string;
    distanceFromCenter?: string;
}
