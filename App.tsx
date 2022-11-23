import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={startAnimation} title="click here"></Button>
      <Animated.Text style={{ opacity: fadeAnim, fontSize: 20, color: "blue" }}>
        Surprise, thank you!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
