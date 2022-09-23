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
  TouchableOpacity,
  ScrollView
} from "react-native";
export default function App() {
  const [textPreview, setTextPreview] = useState("");
  const handleOnChange = (event) => {
    setTextPreview(event.target.value);
  };

  const handleClearText = () => {
    let clearText = "";
    setTextPreview(clearText);
  };
 
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Appbar.Header style={{ background: '#87CEEB' }}>
        <Appbar.Content title="TextMagic" />
        </Appbar.Header>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            onChange={handleOnChange}
            value={textPreview}
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
            
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView>
      <ScrollView scrollEnabled={true}>
        <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 22, marginTop:10 }}>
        Text Preview:
      </Text>
        </View>
      <View style={styles.textPreview}><Text>{textPreview}</Text></View>
      </ScrollView>
      </SafeAreaView>
      <Button title='TextMagic - Dev Version v1.0.1' disabled={true}></Button>
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
    fontSize: 18,
  },
  textPreview: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    textAlign: "center",
    fontSize: 19,
    marginLeft: 18,
    marginRight:18,
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
    paddingTop: 8,
    paddingBottom: 20
  },
  btnBox: {
    flexDirection: 'row',
    flexWrap: 'wrap' ,
    alignItems: 'flex-start',
    marginTop: 25
  }
});
