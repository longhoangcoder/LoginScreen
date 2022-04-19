import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles/styles";

export default function App() {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Hello</Text>
              <Text style={styles.subTitle}>Sign in to your account</Text>
            </View>
            <View style={styles.form}>
              <TextInput placeholder="example@email.com" style={styles.input} />
              <TextInput
                placeholder="enter your password"
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <View style={styles.forgotFunction}>
              <TouchableOpacity>
                <Text style={{ color: "gray" }}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.action}>
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonLoginText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={{ fontWeight: "bold" }}> Create</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
