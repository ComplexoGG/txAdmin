import TxAdmin from "@core/txAdmin";
import { RoomType } from "../webSocket";
import {getLogBuffer} from "@extras/console";

export default (txAdmin: TxAdmin): RoomType =>({
    permission: 'console.view',
    eventName: 'systemConsoleData',
    cumulativeBuffer: false,
    outBuffer: '',
    initialData: () => Buffer.from(getLogBuffer()).toString('base64'),
})