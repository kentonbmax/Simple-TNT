import {ICustom} from '../classes/custom'
var customCollection:ICustom[] = require('../custom.json')

export class Utility {

    // Reads json file in class type
    getDataFromJsonFile(): ICustom[] {
        if(customCollection.length > 0 ) {
            return customCollection
        }
    }

    // generates a random string
    randomString() :string {
        const r = Math.random().toString(36);
        return r.substring(2,9);
    }
}