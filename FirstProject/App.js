import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalVisible, setModalVisible] = useState(true);

	function addGoalHandler(enteredText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredText, id: Math.random().toString() },
		]);
		closeAddGoalHandler();
	}

  function deleteItemHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals .filter(goal => goal.id !== id);
    });
  }

	function openAddGoalHandler() {
		setModalVisible(true);
	}

	function closeAddGoalHandler() {
		setModalVisible(false);
	}

	return (
		<View style={styles.appContainer}>
			<Pressable onPress={openAddGoalHandler}>
				<View>
					<Text style={styles.addGoalText}>Add New Goal</Text>
				</View>
			</Pressable>
			<GoalInput 
				onAddGoal={addGoalHandler} 
				modalVisible={modalVisible}
				closeModal={closeAddGoalHandler}
			/>
			<View style={styles.goalList}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem 
                      text={itemData.item.text} 
                      id={itemData.item.id}
                      onDeleteItem={deleteItemHandler}
                    />;
					}} 
					keyExtractor={(item) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		alignItems: "center",
		flex: 1,
	},
	goalList: {
		flex: 8,
		width: "90%",
		marginTop: 10
	},
	addGoalText: {
		fontSize: 20,
		color: "blue"
	}
});
