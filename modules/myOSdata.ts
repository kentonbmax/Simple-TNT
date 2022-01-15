// the os module has lots of good info about your host operating system.
import * as OS from 'os';

export interface IOSdata {
    type: string;
    cpuInfos: OS.CpuInfo[];
    hostName: string;
    totalMemory: number;

}
export function getOSData(): IOSdata  {
    const data = {
        type: OS.type(),
        cpuInfos: OS.cpus(),
        hostName: OS.hostname(),
        totalMemory: OS.totalmem()
    }

    return data;
}