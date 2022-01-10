// injecting our modules
import * as momentModule from './modules/myMomentModule';
import { ICustom, Custom } from './classes/custom';
import config from './modules/myJsonConfig'
import * as _ from 'lodash';
import * as osData from './modules/myOSdata';

function buildNew(instance:ICustom): ICustom {
    let newInstance = new Custom(instance.name, instance.index);
    return newInstance;
}

function writeToConsole(): void {

    console.log(momentModule.getCurrentDate());
    console.log('Convert moment to Date', new Date(momentModule.getCurrentDate().toISOString()));
    console.log('Port:' + config.Port + 'Environment:' + config.Environment);
    console.log(JSON.stringify(osData.getOSData()));
}

writeToConsole();