import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setText] = useState('')

    const onChange = (text) => {
        setText(text)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder='Впишите задачу...'
            />
            <Button color='green' onPress={() => addHandler(text)} title='Добавить задачу' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});