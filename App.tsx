import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {FeedPost} from './src/components/FeedPost';
// import Post from './src/assets/data/posts.json'

const post = {
  id: '1',
  createdAt: '19 December 2021',
  images: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <View style={styles.app}>
          <FeedPost {...post} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
