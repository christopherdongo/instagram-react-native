import React from 'react'
import { styles } from '../../styles/post'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CommentsUser } from '../../types'

export const Comment = ({id, comment, user}:CommentsUser) => {
  return (
    <View
    style={styles.comment}
    >
    <Text
    style={styles.commentText}
    >
      
      <Text style={styles.textFonts}>{user?.username}</Text> {comment}
    </Text>
    <AntDesign name={'hearto'} size={16} style={[styles.icon]} />
    </View>
  )
}
