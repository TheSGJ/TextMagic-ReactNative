import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  Platform,
  TouchableOpacity
} from "react-native";
export default function App() {
  const [text, setText] = React.useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            onChange={handleOnChange}
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Type something..."
            placeholderTextColor="black"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={styles.buttonPlot}>
          
            <View style={styles.btnBox}>
          
            <View style={styles.textForm}>
            <TouchableOpacity onPress={handleClearText} style={styles.button}>
              <Text style={styles.textStyle}>🗑️ Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textForm}>
            <TouchableOpacity onPress={handleUpClick} style={styles.button}>
              <Text style={styles.textStyle}>Set to Uppercase</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </SafeAreaView>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}>
        Text Preview:
      </Text>
      <View style={styles.textPreview}>{text.length > 0 ? text : "Nothing to preview!"}</View>

      <Button disabled={true}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    fontSize: 22,
  },
  textPreview: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    textAlign: "center",
    fontSize: 19,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#3F0FB7",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textForm: {
    width: 90,
    marginLeft: 15,
    marginRight: 15
  },
  buttonPlot: {
    alignItems: 'center',
    fontSize: 19,
  },
  btnBox: {
    flexDirection: 'row',
    flexWrap: 'wrap' ,
    alignItems: 'flex-start',
    marginTop: 25
  }
});
