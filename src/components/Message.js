import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import {MessageFormatDate} from './../utils/dateTimeHelper'


class MessageView extends Component{
  static propTypes = {
    messageData:PropTypes.object
  };
  
render() {
  return <TouchableOpacity onPress={this.props.transformMessage.bind(this,this.props.messageData)}>
    <View
      style={{
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10
    }}>
      <View style={circle}>
        <Image
          style={{
          width: 40,
          height: 40,
          borderRadius: 20
        }}
          source={require('./../../images/headportrait.png')}></Image>
      </View>
      <View
        style={{
        flex: 3,
        marginLeft: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 4
      }}>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{
            fontSize: 18
          }}>{this.props.messageData.Message.From.PersonName}</Text>
          <Text>{MessageFormatDate(this.props.messageData.Message.Timestamp)}</Text>
        </View>

        <Text style={{
          fontSize: 14
        }}>{this.props.messageData.Message.Subject}</Text>
        <Text style={{
          fontSize: 14
        }}>{this.props.messageData.Message.MessageBody}</Text>
      </View>
    </View>
  </TouchableOpacity>
}
}
const circle = {
  borderWidth: 0,
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent:'center',
  alignItems:'center',
  overflow:'hidden'
};

export default MessageView;