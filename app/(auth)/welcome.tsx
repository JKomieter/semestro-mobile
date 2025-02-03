import { styles } from "@/styles";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    return (
        <SafeAreaView style={{...styles.container, ...styles.blackBg}}>
            <View style={{
                height: "100%",
            }}>

            </View>
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                
            </View>
        </SafeAreaView>
    )
}

