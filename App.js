import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, {enteredGoal}]);
    
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{flex: 1,flexDirection: "row",justifyContent: "space-between",alignItems: "center",}}>
        <View style={{ flex:1,marginTop: "5%",borderWidth: 1,borderColor: "yellow" }}>
          <TextInput
            style={{
                borderColor: "black",
                justifyContent: "center",
                borderWidth: 1,
                width:'100%',
            }}
            placeholder="Input Goal"
            onChangeText={goalInputHandler}
            value={enteredGoal}
            
          />
        </View>
        <View style={{ flex:1,marginTop: "5%",borderWidth: 1,borderColor: "red" }}>
          <Button 
            title="ADD"
            onPress={addGoalHandler}
          ></Button>
        </View>
      </View>

      <View style={{flex: 8,flexDirection: "column",borderWidth: 1,borderColor: "green",}}>
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => (
                <View style={{ padding:10,backgroundColor:'#ccc',borderColor:'black',borderWidth:1,marginVertical: 10}}>
                  <Text>{itemData.item}</Text>
                </View>
          )}>
          
        </FlatList>
      </View> 

    </View>
  );
}
