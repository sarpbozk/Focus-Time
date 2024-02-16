import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { RoundedButton } from "../components/roundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          onChangeText={setSubject}
          label="What would you like to focus on "
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  TextInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    flexDirection: "row",
    padding: spacing.lg,
    justifyContent: "top",
  },
  buttonContainer: {
    justifyContent: "center",
  },
  textStyle: {
    color: colors.white,
  },
});
