const client : Client = require('./client')();
//const prompt = require('prompt-sync')();

//const clients = [];

const client01 = client.registerPhysicalPersonClient('Lucas da Silva', 'Masculino', '21/02/1996', '000.000.000-00', '12.345.678-9', 'Rio de Janeiro', 'RJ');
const client02 = client.registerLegalPersonClient('Netflix', '00.000.000/0001-00', 'Los Gatos', 'Califórnia');

console.log(`1º Cliente: ${client01}`);
console.log(`2º Cliente: ${client02}`);
