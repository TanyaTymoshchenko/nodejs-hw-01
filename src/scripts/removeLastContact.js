import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";


export const removeLastContact = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(fileContent);
        if(contacts.length > 0) {
            console.log(contacts.pop());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
        console.log('Successfully deleted last contacts');
    } catch(error) {
        console.log(`Error deleting last contact: ${error}`);
    }
};

removeLastContact();