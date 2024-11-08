import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import logoImage from "../../assets/logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface HeaderProps {
	onPress: () => void;
	onChangeText: (text: string) => void;
	value: string;
}

export function Header({ onPress, onChangeText, value }: HeaderProps) {
	return (
		<View style={style.container}>
			<View style={style.logoContainer}>
				<Image source={logoImage} />
			</View>
			<View style={style.formContainer}>
				<View style={style.form}>
					<TextInput
						style={style.input}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="#808080"
						onChangeText={onChangeText}
						value={value}
					/>
					<TouchableOpacity
						style={style.button}
						activeOpacity={0.7}
						onPress={onPress}
					>
						<MaterialCommunityIcons
							name="plus-circle-outline"
							size={16}
							color="#FFF"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
