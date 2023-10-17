import * as dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import bs58 from 'bs58'

dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is (unit8array): `, keypair.secretKey);
console.log(`The secret key is: `, bs58.encode(keypair.secretKey));