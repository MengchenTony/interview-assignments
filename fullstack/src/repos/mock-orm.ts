/* eslint-disable @typescript-eslint/no-unsafe-return */

import jsonfile from 'jsonfile';

import { IUrl } from '@src/models/Url';


// **** Variables **** //

const dbFileName = 'database.json';


// **** Types **** //

interface IDb {
  urls: IUrl[];
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + dbFileName);
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + dbFileName), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
