
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('Bienvenue sur Smart Farming !');

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🌱</Text>

      <Text style={styles.title}>Smart Farming</Text>

      <Text style={styles.subtitle}>
        Votre agriculture, notre avenir.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ma première application</Text>
        <Text style={styles.description}>
          Ceci est une page de test créée avec React Native et Expo.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => setMessage('Bravo ! Le bouton fonctionne 🎉')}
      >
        <Text style={styles.buttonText}>Tester le bouton</Text>
      </Pressable>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F7F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 64,
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#216E39',
  },
  subtitle: {
    fontSize: 16,
    color: '#55705B',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    width: '100%',
    marginBottom: 24,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#216E39',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#216E39',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    color: '#216E39',
    fontSize: 15,
    textAlign: 'center',
  },
});
