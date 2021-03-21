import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: 'http://gg.gg/omzv7' }}>
        <Image style={styles.profile} source={{ uri: "http://gg.gg/omzvd" }} />
        <Text style={styles.title}>M Lukman Al Hakim</Text>
        <View style={styles.baris}>
          <TextInput placeholder='   type here' style={styles.textInput} />
          <Button title='Search' onPress={() => alert('Ini Button Search')} />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Life Style</Text>
          <Text style={styles.paragraf}>
            Gaya hidup merupakan mekanisme kultural kompleks yang sangat mempengaruhi mindset dan mental set  pada segala aspek kehidupan anak muda.
            Kehidupan keseharian anak muda dengan berbagai dinamika yang mereka hadapi, selalu memiliki potensi mengubah gaya hidup seorang anak muda,
            tujuannya untuk mengintergrasikan dirinya dengan ekosistem kebudayaan dari komunitas tertentu yang ingin mereka masuki.
            Karena pada akhirnya gaya hidup sangat terkait dengan pemosisian sosial (social positioning).
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.plusButton} onPress={() => alert('Ini Button Tambah')} >
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>+</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'orange',
    textAlign: 'center',
    marginVertical: 18,
    fontSize: 40,
  },
  baris: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 10,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  content: {
    height: 520,
    backgroundColor: "#425C5A",
    width: 360,
    alignSelf: 'center',
    borderRadius: 10,
  },
  paragraf: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'black',
    alignSelf: 'center',
    marginVertical: 18,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "white",
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    margin: 11,
  },
});


