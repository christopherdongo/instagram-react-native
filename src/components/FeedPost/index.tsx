
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    LogBox,
    SafeAreaView,
  } from 'react-native';
  import { useState, useEffect } from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import {styles} from '../../styles/post';
import { Post } from '../../types/index';
import { Comment } from '../Comment';



export const FeedPost = (  {user, images,comments,id,description,nofComments,nofLikes,} : Post )  => {

  const [open, setOpen] = useState(false);
  const [viewCountComment, setViewCountComment] = useState(false);


  const viewComments = ()=>{
    setOpen(true);
    if(viewCountComment===true){

    }else{
      setViewCountComment(true)
    }
  }

/*
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  },[])
*/

    return (
            <View style={styles.post}>
              {/*Header*/}
              <View style={styles.header}>
                <Image
                  source={{
                    uri: images,
                  }}
                  style={styles.useAvatar}
                />
    
                <Text style={styles.userName}>{user.username}</Text>
                <Entypo
                  style={styles.threeDots}
                  name="dots-three-horizontal"
                  size={16}
                />
              </View>
    
              {/*content*/}
              <Image
                source={{
                  uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
                }}
                style={styles.image}
              />
              {/*footer*/}
              <View style={styles.footer}>
                <View style={styles.iconContainer}>
                  <AntDesign name={'hearto'} size={24} style={styles.icon} />
                  <Ionicons
                    name="chatbubble-outline"
                    size={24}
                    style={styles.icon}
                  />
    
                  <Feather name="send" size={24} style={styles.icon} />
    
                  <Feather
                    name="bookmark"
                    size={24}
                    style={[{marginLeft: 'auto'}, styles.icon]}
                  />
                </View>
                 {/*likes*/}
                <Text
                style={styles.text}
                >
                  Liked by{' '} <Text style={styles.textFonts}>lgrivecius</Text> and{' '}
                  <Text style={styles.textFonts}>{nofLikes} others</Text>
                </Text>
    
                {/*post description*/}
                <Text
                style={styles.text}
                >
                  
                  <Text style={styles.textFonts}>vadimnotjustdev</Text> {description} 
                </Text>
    
                {/*comments*/}
                {viewCountComment===false? <Text
                onPress={viewComments}
                >View all {comments.length} comments</Text> : false}
                {
                  open===true? 
                  <ScrollView 
                  
                   style={{flex:1}}
                  >
                    <FlatList 
                  renderItem={ ({item}) => <Comment {...item} />}
                  data={comments}
                  keyExtractor={item => item.id}
                  /> 
                  </ScrollView>
                  : false
                }
              {/*posted date*/}
              <Text>19 December, 2023</Text>
              </View>
    
            </View>

      );
}
