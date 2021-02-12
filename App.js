import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

export default class Project extends Component{
  
  constructor(){
    super();
    this.state={
      Number : 1
    }
  }

  GenerateRandomNumber=()=>{
    var RandomNumber = Math.floor(Math.random() * 6) + 1 ;
    this.setState({
      Number : RandomNumber
    })
  }

  a(){

    if(this.state.Number==1){
      return(
        <View>
          <Image source={require('./images/1.jpg')} style={styles.img}/>
        </View>
      )
    } else if(this.state.Number==2){
      return(
        <View>
          <Image source={require('./images/2.jpg')} style={styles.img}/>
        </View>
      )
    } else if(this.state.Number==3){
      return(
        <View>
          <Image source={require('./images/3.jpg')} style={styles.img}/>
        </View>
      )
    } else if(this.state.Number==4){
      return(
        <View>
          <Image source={require('./images/4.jpg')} style={styles.img}/>
        </View>
      )
    } else if(this.state.Number==5){
      return(
        <View>
          <Image source={require('./images/5.jpg')} style={styles.img}/>
        </View>
      )
    } else if(this.state.Number==6){
      return(
        <View>
          <Image source={require('./images/6.jpg')} style={styles.img}/>
        </View>
      )
    }
    return null

  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.a()}</Text>
        <TouchableOpacity onPress={this.GenerateRandomNumber} style={styles.btn}>
          <Text style={styles.btn_txt}>Roll The Dice</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    marginTop: 50,
    elevation: 10,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  btn_txt: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  img: {
    width: 250,
    height: 250
  }
  
});
