import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }

  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    let existingContacts = [];

    if (fileContent.trim() !== '') {
      existingContacts = JSON.parse(fileContent);
    }

    const newFileContent = [...existingContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(newFileContent), 'utf8');
    console.log(`Successfully generated and added ${number} contacts.`);
  } catch (error) {
    console.error('Error generating or writing contacts:', error);
  }
};

generateContacts(5);