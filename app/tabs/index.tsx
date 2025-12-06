import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { use } from "react";
import useTheme from "../../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screens222.</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>toggleDarkMode</Text></TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});