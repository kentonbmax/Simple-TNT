// Main application entry point as defined in our "start". A function main is not required. 
// injecting our modules
import * as momentModule from './modules/myMomentModule';
import { Utility } from './classes/utility';
import { ICustom, Custom } from './classes/custom';
import config from './modules/myJsonConfig'
import * as _ from 'lodash';
import * as osData from './modules/myOSdata';

function buildNew(instance:ICustom): ICustom {
    let newInstance = new Custom(instance.name, instance.index);
    return newInstance;
}

function writeToConsole(): void {

    let util = new Utility();
    console.log(momentModule.getCurrentDate());
    console.log('Convert moment to Date', new Date(momentModule.getCurrentDate().toISOString()));
    console.log('Port:' + config.Port + 'Environment:' + config.Environment);
    console.log(`**Operating System Info: ${JSON.stringify(osData.getOSData())}`);
    console.log(`**Random String Generator ${util.randomString()}`)
}

writeToConsole();