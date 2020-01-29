import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      const contacts = [
        {
          [Contacts.Fields.FirstName]: 'Micah',
          [Contacts.Fields.LastName]: 'Zaayer',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5039158238' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Rachael',
          [Contacts.Fields.LastName]: 'Bouissey',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: ' 7073912225' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Jen',
          [Contacts.Fields.LastName]: 'Batara',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5035442829' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Lauren',
          [Contacts.Fields.LastName]: 'Musante',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '2069209575' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Erin',
          [Contacts.Fields.LastName]: 'Deuel',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5035602289' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Jacqueline',
          [Contacts.Fields.LastName]: 'Remmel',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '9494448439' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Mike',
          [Contacts.Fields.LastName]: 'McShane',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5038695289' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Chris',
          [Contacts.Fields.LastName]: 'Burge',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5413014330' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Christine',
          [Contacts.Fields.LastName]: 'Frank',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '4254636369' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Jason',
          [Contacts.Fields.LastName]: 'Huels',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '8319054813' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Joel',
          [Contacts.Fields.LastName]: 'Stockamp',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5412319749' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Anita',
          [Contacts.Fields.LastName]: 'Kemp',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5412506397' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Carrie',
          [Contacts.Fields.LastName]: 'Schmid',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5034592850' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Neha',
          [Contacts.Fields.LastName]: 'Malhotra',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '9713003607' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Kira',
          [Contacts.Fields.LastName]: 'Roberts',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5039498497' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Devin',
          [Contacts.Fields.LastName]: 'Cooley',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5415791617' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Andrew',
          [Contacts.Fields.LastName]: 'Peterson',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '9714207970' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Sofia',
          [Contacts.Fields.LastName]: 'Giordano',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5038881846' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Molly',
          [Contacts.Fields.LastName]: 'Stambaugh',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '2166333118' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Hailey',
          [Contacts.Fields.LastName]: 'Gaylor',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '9714095104' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Nikhil',
          [Contacts.Fields.LastName]: 'Batta',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '3609999430' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Ethan',
          [Contacts.Fields.LastName]: 'Samuels-Ellingson',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5039849460' }],
        },
        {
          [Contacts.Fields.FirstName]: 'Loewy',
          [Contacts.Fields.LastName]: 'Malkovich',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '6179907910' }],
        }
      ];

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        //Duplicate checker not working

        // for(let i=0; i<contacts.length; i++) {
        //   for(let j=0; j<data.length; j++) {
        //     if (contacts[i].phoneNumbers[0].number === data[j].phoneNumbers[0].number.replace(/\D/g, '')) {
        //       contacts.splice(i, 1);
        //     }
        //   }
        // }
      }

      contacts.forEach(async contact => {
        try {
          await Contacts.addContactAsync(contact);
        } catch(err) {throw err}
      });
      
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Check your contacts</Text>
    </View>
  );
}