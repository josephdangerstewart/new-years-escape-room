import { SerialPort, ReadlineParser } from 'serialport';

const port = new SerialPort({
	path: 'COM3',
	baudRate: 9600,
});
const parser = new ReadlineParser();

port.pipe(parser);

export function listenForArduino(
	listener: (message: string) => void,
): () => void {
	const handleMessage = (raw: string) => {
		listener(raw.replace(/\n?\r?$/, ''));
	};
	parser.on('data', handleMessage);
	return () => parser.off('data', handleMessage);
}
