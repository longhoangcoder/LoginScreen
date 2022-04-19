import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    width: "80%",
    alignItems: "flex-start",
    borderColor: "gray",
    marginTop:20
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  form: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    padding: 10,
    width: "80%",
    height: 55,
    marginVertical: 10,
  },
  forgotFunction: {
    width: "80%",
    alignItems: "flex-end",
  },
  action: {
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonLogin: {
    height: 60,
    width: 200,
    borderRadius: 30,
    backgroundColor: "gray",
    justifyContent: "center",
    marginVertical:30,
  },
  buttonLoginText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
export default styles;
