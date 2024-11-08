import { Alert, Text, View } from "react-native";
import { style } from "./style";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Task } from "../../components/Task";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TaskList {
	id: string;
	title: string;
	done: boolean;
}

export function Home() {
	const [textInput, setTextInput] = useState<string>("");
	const [tasksList, setTasksList] = useState<TaskList[]>([]);

	function handleAddTask() {
		if (tasksList.find((task) => task.title === textInput)) {
			Alert.alert(
				"Tarefa duplicada",
				"Tarefa com este nome já existe! Tente com um nome diferente.",
			);
			return;
		}

		if (textInput !== "") {
			setTasksList((prevState) => [
				...prevState,
				{ id: new Date().toString(), title: textInput.trim(), done: false },
			]);

			setTextInput("");
		}
	}

	function handleDoneTask(id: string) {
		setTasksList((prevState) =>
			prevState.map((task) => {
				if (task.id === id) {
					return { ...task, done: !task.done };
				}

				return task;
			}),
		);
	}

	function handleRemoveTask(id: string) {
		setTasksList((prevState) => prevState.filter((task) => task.id !== id));
	}

	const doneTasksLength = tasksList.filter((task) => task.done).length;

	return (
		<View style={style.container}>
			<Header
				onPress={handleAddTask}
				onChangeText={setTextInput}
				value={textInput}
			/>

			<View style={style.body}>
				<View style={style.taskCounterContainer}>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
						<Text style={style.tasksLength}>Criadas</Text>
						<View
							style={{
								backgroundColor: "#333333",
								borderRadius: 20,
								paddingHorizontal: 8,
								paddingVertical: 2,
							}}
						>
							<Text style={style.number}>{tasksList.length}</Text>
						</View>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
						<Text style={style.doneTasks}>Concluídas</Text>
						<View
							style={{
								backgroundColor: "#333333",
								borderRadius: 20,
								paddingHorizontal: 8,
								paddingVertical: 2,
							}}
						>
							<Text style={style.number}>{doneTasksLength}</Text>
						</View>
					</View>
				</View>

				{tasksList.length === 0 && (
					<View style={style.emptyContainer}>
						<MaterialCommunityIcons
							name="clipboard-text-outline"
							size={56}
							color="#808080"
						/>

						<View>
							<Text style={{ fontWeight: "bold", color: "#808080" }}>
								Você ainda não tem tarefas cadastradas
							</Text>

							<Text style={{ color: "#808080" }}>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					</View>
				)}

				<View style={style.taskList}>
					{tasksList.map(({ id, title, done }) => (
						<Task
							key={id}
							title={title}
							isDone={done}
							onRemove={() => handleRemoveTask(id)}
							onDone={() => handleDoneTask(id)}
						/>
					))}
				</View>
			</View>
		</View>
	);
}
