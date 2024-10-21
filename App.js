import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Помыть машину', key: '2'},
    {text: 'Купить картошку', key: '3'},
    {text: 'Стать миллионером', key: '4'},
  ])

  const addHandler = (text) => {
    setListOfItems([
      {text: text, key: Math.random().toString(36).substring(7)},
      ...listOfItems
    ])
  }

  const deleteHandler = (key) => {
    setListOfItems(listOfItems.filter(item => item.key !== key))
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
