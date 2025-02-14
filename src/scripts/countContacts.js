import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';


export const countContacts = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(contacts).length;
    } catch(error) {
        console.error('Error getting or counting contacts:', error);
    }
};

console.log(await countContacts());