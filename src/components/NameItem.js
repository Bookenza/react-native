import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


const nameItem = props => {
    return (

    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}> 
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>

    )
};


const styles = StyleSheet.create({
   
listItem:{
    padding:10,
    marginVertical:3,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
  },

});

export default nameItem;
