import React from 'react';
import {TextInput, View} from 'react-native';

//Style
import styles from './search.style';

const Search = (prop) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChangeText={prop.onSearch}
      />
    </View>
  );
};

export default Search;
