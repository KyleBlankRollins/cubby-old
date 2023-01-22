import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";

import { buttonStyles } from "../styles/button";
import colors from "../styles/colors";
import { shadows } from "../styles/shadows";

type AddCubbyFormProps = {
  onSubmit: (description: string, name: string) => void;
};

export const AddCubbyForm: React.FC<AddCubbyFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSubmit(description, name);
    setDescription("");
    setName("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={name}
        placeholder="Enter new Cubby name"
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TextInput
        value={description}
        placeholder="Enter new Cubby description"
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    ...shadows,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
  },
  submit: {
    ...buttonStyles.button,
    width: 50,
    height: "100%",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginLeft: 20,
    marginRight: 0,
  },
  icon: {
    ...buttonStyles.text,
  },
});
