/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component}  from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NameItem from './src/components/NameItem';

function App()  {

    //Const Declaration
  const img = require("./src/images/logo.png")
  // const [textInputEmail, setTextInputEmail] = useState("jay@gmail.com");
  const [enteredName, setEnteredName] = useState('');
  const [nameLists, setNameLists] = useState([]);
  console.log('RE_RENDERING COMPONENT');
  console.log(nameLists);

  //Button Actions
  function AddButtonAction() {
    console.log(enteredName)

    if (enteredName.length === 0) {
      Alert.alert('Please enter name')
      return;
    }
    // setNameLists(currentNames => [...currentNames, enteredName]);
    setNameLists(currentNames => [...currentNames, 
    { id:Math.random().toString(), value:enteredName}]);

  console.log(nameLists)

  }


const NameInputHandler = (enteredText) => {
  setEnteredName(enteredText);
}

const removeNameHandler = nameId => {

  // Alert.alert(
  //   "Confirmation!",
  //   "Do you want to delete this name?",
  //   [
  //     {
  //       text: "NO",
  //       onPress: () => console.log("No Pressed"),
  //       style: "cancel"
  //     },
  //     { text: "YES", onPress: () => console.log("YES Pressed") }
  //   ]
  // );

  console.log('To be deleted: ' + nameId);
  console.log(nameLists);

  setNameLists(currentNames => {
    return currentNames.filter((name) => name.id != nameId);
  });

}



  return (

    // View
 <View>

<View style={styles.ScreenStyle}>


   {/* Text  */}
    <Text style={styles.TextStyle}>Hello World!</Text>

    
   {/* Image  */}
<Image style={styles.ImageStyle} source={img}></Image>

   {/* Button  */}
{/* <Button style={styles.BtnStyle} title="Save"></Button> */}

   {/* Text Input  */}
<TextInput style={styles.NameTextInput} 
             placeholder="Enter Name"
             placeholderTextColor = "gray"
             keyboardType='default'
             returnKeyType = 'done'
             autoCorrect = {false}
             onChangeText={NameInputHandler}
             value = {enteredName}
             />


   {/* Touchable Opacity  */}
<TouchableOpacity onPress={AddButtonAction} style={styles.addBtnStyles} >
             <Text style={styles.addBtnTextStyle}>Add Name</Text>
</TouchableOpacity>

   {/* outputting a lists of items  */}
<View style={styles.nameListViewStyle}>

{/* <ScrollView>
{nameLists.map((name) => 
<View style={styles.listItem}> 
<Text>{name}</Text>
</View>)}
</ScrollView> */}

<FlatList 
keyExtractor={(item, index) => item.id}
data={nameLists}
// renderItem={itemData => <NameItem title={itemData.item.value}/>
// renderItem={itemData => <NameItem onDelete={() => console.log('Does that work?')} title={itemData.item.value}/>
renderItem={itemData => <NameItem 
  id={itemData.item.id}
  onDelete={removeNameHandler} 
  title={itemData.item.value}/>

}

/>


</View>

</View>

    </View>
  )
  

   
};

const styles = StyleSheet.create({

  ScreenStyle:{
    top:0,
    height:Dimensions.get('screen').height,
    left:0,
    right:0,
    backgroundColor:'white',
    // position:'absolute'
  },

  TextStyle:{
    top:65,
    font:15,
    left:20,
    right:20,
    textAlign:'center',
    position:'absolute'
  },

  ImageStyle:{
    left:Dimensions.get('screen').width/2-60,
    top:110,
    width:120,
    height:120,
    resizeMode:'cover',
    position:'absolute',
    borderRadius:2,
  },

  BtnStyle:{
    top:400,
    width:200,
    height:50,
    resizeMode:'center'
  },

  NameTextInput: {
    top:250,
    backgroundColor:'white',
    height: 45,
    margin: 15,
    marginLeft:20,
    marginRight:20,
    borderWidth: 0,
    padding: 15,
    // placeholderTextColor: 'black',
    borderBottomWidth : 0.5,
    borderBottomColor : 'gray',
    // borderTopLeftRadius: 5, 
    // borderTopRightRadius: 5,
    borderRadius:5,
},

addBtnStyles: {
  backgroundColor:'red',
  height: 40,
  top:270,
  width:200,
  marginLeft:Dimensions.get('screen').width/2 - 100,
  // marginRight:20,
  padding: 0,
},

addBtnTextStyle: {
  top:7.5,
  fontSize : 18,
  fontWeight:'bold',
  color:'white',
  // textDecorationLine:'underline',
  // textDecorationColor:'#d30b24',
  textAlign : 'center',
  // height:35,
},

nameListViewStyle:{
  top:400,
  // height:Dimensions.get('screen').height,
  left:20,
  right:20,
  bottom:30,
  backgroundColor:'white',
  position:'absolute'
},

});

export default App;
