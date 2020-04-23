import React from 'react';
import { View, Text, TouchableNativeFeedback} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableNativeFeedback
            onPress={props.onDelete.bind(this, props.id)}>
            <View style={{ padding:10,backgroundColor:'#ccc',borderColor:'black',borderWidth:1,marginVertical: 10}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default GoalItem;