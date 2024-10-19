import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  const handleTextPress = () => console.log('Text pressed')
  const handleButtonPress = () => Alert.alert('Hello', 'Main message', [
    {text: 'Да', onPress: () => console.log('Yes button')},
    {text: 'Отмена', onPress: () => console.log('No button')}
  ])

  const handleButtonPress2 = () => Alert.prompt('Hello', 'Main message', text => console.log(text))

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Привет!{'\n'}Привет</Text>
      <Button title='Нажми на меня' color='red' onPress={handleButtonPress} />
      <Button title='Кнопка 2' color='red' onPress={handleButtonPress2} />

      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image blurRadius={2} source={{
          width: 200,
          height: 150,
          uri: 'https://avatars.mds.yandex.net/i?id=207777aadf6a147bdd6ec7e3cbca01ee_l-5233360-images-thumbs&n=13'
        }} />
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red'
  },
});
