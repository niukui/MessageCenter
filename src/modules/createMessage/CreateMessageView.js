import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class CreateMessageView extends Component {
    constructor(props) {
    super(props);
    this.state = {
      background: 'red',
      currentMessage:this.props.navigation.state.params,
      text:''
    };
    this.send=this.send.bind(this)
  }
  static displayName = 'MessageDetailView';

  static navigationOptions = {
    title: 'CreateMessageView',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      )
    }),
    // TODO: move this into global config?
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd',
        paddingRight:10
      },
    right : (
      <TouchableOpacity onPress={this.send}>
        <Icon name={'send'} size={24} color='blue'/>
      </TouchableOpacity>
    )
    }
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  send(message){
    this.props.CreateMessageStateActions.sendMessage(message);
  }

  render() {
    return (
      <View>
        <View style={{flexDirection:'row',height:40,borderBottomWidth:1,borderBottomColor:'#ccc',alignItems:'center'}}>
           <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{flex:1}}>
            <Icon name='arrow-long-left' size={30} color={'orange'} />
          </TouchableOpacity>
          <Text style={{flex:5,textAlign:'center'}}>reply</Text>
          <TouchableOpacity onPress={()=>this.send(this.state.currentMessage.Message)} style={{flex:1}}>
            <Icon name='direction' size={30} color={'orange'} />
          </TouchableOpacity>   
        </View>
        <View style={{marginLeft:10,marginTop:10,marginRight:10,flexDirection:'column'}}>
          <Text style={{fontSize:16,height:30,justifyContent: 'center',borderBottomWidth:1,borderBottomColor:'#ddd'}}>To:{this.state.currentMessage.Message.From.PersonName}</Text>
          <Text style={{fontSize:16,height:30,justifyContent: 'center',borderBottomWidth:1,borderBottomColor:'#ddd'}}>From:Yanliang Sun</Text>
          <Text style={{fontSize:16,height:30,justifyContent: 'center',borderBottomWidth:1,borderBottomColor:'#ddd'}}>Subject:reply: {this.state.currentMessage.Message.Subject}</Text>
          <TextInput
            style={{borderColor: 'gray', minHeight:200,borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline={true}
          />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CreateMessageView;