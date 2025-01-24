

const {SerialPort, ReadlineParser} = require('serialport');


const parser = new ReadlineParser({
    delimiter: '\r\n'
});

var port = new SerialPort({
    path : '/./COM3',
    baudRate : 9600
});

port.pipe(parser);

const sendRedSignalToArduino = ()=>{

    console.log('SENDING RED')

    port.write('r')
}

const sendGreenSignalToArduino = ()=>{
    console.log('SENDING GREEN')
port.write('g')
}

const sendYellowSignalToArduino = ()=>{
    console.log('SENDING Yellow')
port.write('y')
}

const sendOffSignalToArduino = ()=>{
    console.log('SENDING Off')
port.write('o')
}




module.exports= {
    sendGreenSignalToArduino, sendRedSignalToArduino, sendYellowSignalToArduino, sendOffSignalToArduino
}