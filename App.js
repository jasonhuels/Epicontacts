import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      // const contact = {
      //   [Contacts.Fields.FirstName]: 'First',
      //   [Contacts.Fields.LastName]: 'Last',
      //   [Contacts.Fields.PhoneNumbers]: [{label: "mobile", number: '12345687900'}],
      //   [Contacts.Fields.emails]: ['']
      // };
      const contacts = [
        {
          [Contacts.Fields.FirstName]: 'Micah',
          [Contacts.Fields.LastName]: 'Zaayer',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '5039158238' }],
          [Contacts.Fields.emails]: ['Micah.Zaayer@gmail.com']
        },
        {
          [Contacts.Fields.FirstName]: 'Rachael',
          [Contacts.Fields.LastName]: 'Bouissey',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: ' 7073912225' }],
          [Contacts.Fields.emails]: ['rbouissey@gmail.com']
        },
        {
          [Contacts.Fields.FirstName]: 'First',
          [Contacts.Fields.LastName]: 'Last',
          [Contacts.Fields.PhoneNumbers]: [{ label: "mobile", number: '12345687900' }],
          [Contacts.Fields.emails]: ['']
        }
      ];

      contacts.forEach(contact => {
        await Contacts.addContactAsync(contact);
      });
      //const contactId = await Contacts.addContactAsync(contact);

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
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
      <Text>Contacts Module Example</Text>
    </View>
  );
}