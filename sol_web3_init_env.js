import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, bs58.encode(keypair.secretKey));
console.log(`${Keypair.fromSecretKey(keypair.secretKey).publicKey}`);
console.log(`${bs58.encode(Keypair.fromSecretKey(keypair.secretKey).secretKey)}`);

// 8ZZ921ig1minQVtBkGBzpyasyXdtoGZzWopz3JX3vKuB
// 5ty5AJvteZ2nCVmo79RJR6cwXDNZn2ZJHKAzYfNTAyQSCUwPN6oG4PGxL4ubmuJtLMBk8aKqNUQPLXAaEdyKM3HT