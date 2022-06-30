
import jsonData from '../api/data.json';
import { plainToClass } from "class-transformer";
import { Finding } from "../data-structures/data";

export abstract class API {         

    public static async GetFindings(): Promise<any[]> {
        return plainToClass(Finding, jsonData);
    }
}
