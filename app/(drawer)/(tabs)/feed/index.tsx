import { View, StyleSheet, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Tweet from '../../../../components/Tweet';
import tweets from '../../../../assets/data/tweets';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item} /> }  />
      <Link href="/new-tweet" asChild >
        <Entypo name="plus" size={24} color="white" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
  floatingButton: {
    backgroundColor: '#1DA1F2',
    borderRadius: 25,
    padding: 15,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  }
});