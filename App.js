import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
 
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, 
      {id: Math.random().toString(), value: enteredGoal}
    ]);
  };

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
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => <GoalItem title={itemData.item.value} />} 
          
      />
      </View> 

    </View>
  );
}
