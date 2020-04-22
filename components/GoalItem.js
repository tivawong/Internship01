import React from 'react';
import { View, Text, StyleSheet} from ' react-native';

const GoalItem = props => {
    return (
        <View style={{ padding:10,backgroundColor:'#ccc',borderColor:'black',borderWidth:1,marginVertical: 10}}>
            <Text>{props.title}</Text>
        </View>
    );
};

export default GoalItem;