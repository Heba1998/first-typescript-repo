import { digimonURL } from './config';
import { Digimons } from './interfaces';

export async function getdigimons(): Promise<Digimons[]> {
    const response: Response = await fetch(digimonURL);
    const digimons: Digimons[] = await response.json();
    return digimons;
  }
  