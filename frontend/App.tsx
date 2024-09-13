import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (text: string) => {
    setNumber(text);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/sqrt', {
        params: { number: parseFloat(number) },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error calculating square root:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Square Root Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={handleInputChange}
        placeholder="Enter a number"
      />
      <Button title="Calculate Square Root" onPress={handleSubmit} />
      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Result: {result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  resultContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 20,
  },
});

export default App;
