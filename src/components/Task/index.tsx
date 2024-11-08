import { Text, View } from "react-native";
import { style } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TaskProps {
	isDone: boolean;
	title: string;
	onRemove: () => void;
	onDone: () => void;
}

export function Task({ isDone, title, onRemove, onDone }: TaskProps) {
	return (
		<View style={style.container}>
			<MaterialCommunityIcons
				name={isDone ? "check-circle" : "circle-outline"}
				size={24}
				color={isDone ? "#5E60CE" : "#4EA8DE"}
				onPress={onDone}
			/>

			<Text
				style={{
					color: isDone ? "#808080" : "#FFF",
					flex: 1,
					textDecorationLine: isDone ? "line-through" : "none",
				}}
			>
				{title}
			</Text>

			<MaterialCommunityIcons
				name="trash-can-outline"
				size={20}
				color="#808080"
				onPress={onRemove}
			/>
		</View>
	);
}
