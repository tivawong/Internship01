import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
 
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, 
      {id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop: 50}}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      
      <View style={{flex: 8,flexDirection: "column",borderWidth: 1,borderColor: "green",}}>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => 
            <GoalItem 
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value} 
            />
          } 
        />
      </View> 

    </View>
  );
}
