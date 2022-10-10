import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './App.style';

//Data
import music_data from '../assets/json/music-data.json';

//Components
import Card from './components/card';
import Search from './components/serachBar/search';

const App = () => {
  const [list, setList] = useState(music_data);
  const renderCardData = ({item}) => <Card data={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;

  const search = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filteredList);
  };
  return (
    <View style={styles.contianer}>
      <Search onSearch={search} />
      <FlatList
        data={list}
        renderItem={renderCardData}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;
