import React from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

// Komponen portofolio (misalnya menampilkan gambar dan deskripsi diri)
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header atau Nama */}
        <Text style={styles.header}>Portofolio Saya</Text>

        {/* Deskripsi singkat */}
        <Text style={styles.description}>
          Saya seorang developer yang berfokus pada pengembangan aplikasi mobile dengan React Native.
        </Text>

        {/* Contoh Card untuk menampilkan proyek */}
        <Card style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}  // Gantilah dengan gambar proyek Anda
            style={styles.image}
          />
          <Text style={styles.cardText}>Proyek Aplikasi 1</Text>
        </Card>

        <Card style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}  // Gantilah dengan gambar proyek Anda
            style={styles.image}
          />
          <Text style={styles.cardText}>Proyek Aplikasi 2</Text>
        </Card>

        {/* Tambahkan lebih banyak bagian sesuai kebutuhan */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 50,
  },
  scrollView: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  card: {
    marginBottom: 20,
    width: 250,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,  // Memberikan efek shadow pada card
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardText: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});
