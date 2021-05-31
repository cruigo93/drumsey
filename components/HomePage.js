import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyles } from '../styles/style'

export default function HomePage({ navigation }) {

  const [news, setNews] = useState([
    { name: "Breaks: Good to Show off", anons: "Free drum course online", full: "", key: 1, img: 'https://vse-kursy.com/uploads/posts/2019-01/1547474771_drums-2778190_1280.jpg' },
    { name: "Nirvana: Lithium", anons: "Free drum course online", full: "Full text of news2", key: 2, img: 'https://vse-kursy.com/uploads/posts/2019-01/1547474771_drums-2778190_1280.jpg' },
    { name: "Linkin Park: Numb", anons: "Free drum course online", full: "Full text of news3", key: 3, img: 'https://vse-kursy.com/uploads/posts/2019-01/1547474771_drums-2778190_1280.jpg' },
  ]);
  return (
    <View style={gStyles.main}>
      <FlatList data={news} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
          <View style={gStyles.course}>
            <Image source={{
              width: '100%',
              height: 100,
              uri: item.img
            }} />
            <Text style={gStyles.title}>{item.name}</Text>
            <Text style={gStyles.annons}>{item.anons}</Text>
          </View>

        </TouchableOpacity>
      )} ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
