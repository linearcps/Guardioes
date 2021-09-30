const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const labelDefault = 
{
  fontSize:14,
  color: 'gray'
};
const labelTitulo = 
{
  color: "green", 
  fontSize: 14
};

import {  PixelRatio } from "react-native";
export default {
  
  container: {
    backgroundColor: "#fff"
  },
  ImageContainer: {
    borderRadius: Platform.OS === "android" ? 150 : deviceHeight / 80,
    width: 160,
    height: 160,
    borderColor: "#9B9B9B",
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS === "android" ? deviceHeight / 80 : deviceHeight / 100,
    marginBottom: 15
  },
  ButtonRegister:
  {
    width: 150,
    height: 35,
    marginTop: 15,
    left: Platform.OS === "android" ? deviceWidth / 3.7 : deviceWidth /3.7,
    marginBottom: 25

  },
  TextSaveUser:
  {
    left: Platform.OS === "android" ? deviceWidth / 11 : deviceWidth / 11,
    textAlign: "center",
  },
  LabelDataNascimento:
  {
    ...labelDefault,
    left: Platform.OS === "android" ? deviceWidth / 22 : deviceWidth / 18,
    marginTop: 8,
  },
  InputDataNascimento:
  {
    left: Platform.OS === "android" ? deviceWidth / 18 : deviceWidth / 18,
    width: "95%",
  },
  icon: {
    position: 'absolute',
    top:  Platform.OS === "android" ? deviceHeight / 15 : deviceHeight / 17,
    right: 8,
    color: 'gray'
  },
  LabelError:
  {
    left: Platform.OS === "android" ? deviceWidth / 18 : deviceWidth / 25,
    color: '#cc0033',
    fontSize: 12
  },
  TextSavePassword:
  {
    left: Platform.OS === "android" ? deviceWidth / 12 : deviceWidth / 11,
    textAlign: "center",
  },
  InputCurriculum:
  {
    left: Platform.OS === "android" ? deviceWidth / 30 : deviceWidth / 9,
    width: "95%",
  },
  TitleTermsOfUse:
  {
    left: Platform.OS === "android" ? deviceWidth / 30 : deviceWidth / 9,
    color: "#cc9933",
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold'
  },
  TextTermsOfUse:
  {
    left: Platform.OS === "android" ? deviceWidth / 40 : deviceWidth / 9,
    marginTop: 5,
    fontSize: 14,
    color: 'gray'
  },
  checkBoxStyle:
  {
    marginLeft: Platform.OS === "android" ? deviceWidth / 40 : deviceWidth / 9,  
  },
  LabelEmail:
  {
    left: Platform.OS === "android" ? deviceWidth / 72 : deviceWidth / 18,
    marginTop: 8,
  },
  LabelDefault:
  {
    ...labelDefault
  },
  LabelTitulo:
  {
    ...labelTitulo
  },
  LabelNotificacao:
  {
    ...labelDefault,
    left: Platform.OS === "android" ? deviceWidth / 72 : deviceWidth / 18,
  },
  LabelInfo:{
    left: Platform.OS === "android" ? deviceWidth / 65 : deviceWidth / 18,
    fontSize:15, 
    color: "#696" 
  },
  LabelTermosUso:{
    ...labelDefault,
    marginLeft: 15
  },
  LabelInfo2:{
    left: Platform.OS === "android" ? deviceWidth / 65 : deviceWidth / 18,
    fontSize:13,  
  },

};
