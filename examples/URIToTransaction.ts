import {TransactionURI} from "../src/uris/TransactionURI";

const serializedTransaction = 'B500000000000000406D262D78CE449BC743A2F27FFE05A677A922C6FBA0B6FD' +
    'F7EE115E01F76A60D2B027C4F8F2826F727ADEC0E6406C2ECC7C67C49FED2DAD' +
    '973F539046EE8A02CC499067D981CB2EA28D43537D8B3D91E1E0A1F7DA12DB13' +
    '5C1B9867DB80553B000000000198544140420F000000000015D6FE9001000000' +
    '99659BB8A2019FE9C60000000000000000000000000000000001050000000000' +
    '90D69CD255E556C640420F00000000000074657374';

const URI = 'web+symbol://transaction?data='+ serializedTransaction + '&generationHash=test' +
    '&nodeUrl=http://localhost:3000&webhookUrl=http://myapp.local/id';
const transactionURI = TransactionURI.fromURI(URI);

const transaction = transactionURI.toTransaction();
console.log(transaction);
