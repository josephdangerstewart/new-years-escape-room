import { SerialPort, ReadlineParser } from 'serialport';

const port = new SerialPort({
	path: 'COM1',
	baudRate: 9600,
});
const parser = new ReadlineParser();

port.pipe(parser);

parser.on('data', console.log);