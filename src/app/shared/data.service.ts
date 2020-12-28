
import * as data from "../../assets/data.json";

export class dataService {

    /* siteData = [
        {name: "page one"},
        {
            name: "page TWO TWO"
        },
        {
            name: "three is the best"
        }
    ]; */

    siteData: any = (data as any).default;


    getData() {
        return this.siteData;
    }

}