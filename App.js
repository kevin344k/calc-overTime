import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,ScrollView
} from "react-native";
import Table from "./assets/components/Table";


export default function App() {
  const [salario, setSalario] = useState("");
  const [diasLab, setDiasLab] = useState("");
  const [nochesLab, setNochesLab] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [noches25, setNoches25] = useState(0);
  const [hor50, setHor50] = useState(0);
  const [hor100, setHor100] = useState(0);

  const [valor25, setValor25] = useState(0);
  const [valor50, setValor50] = useState(0);
  const [valor100, setValor100] = useState(0);

  let jornadaNocheX25 = 8;
  let jornadaNocheX50 = 1.25;
  let jornadaDiaX50 = 4;
  let jornadaNochex100 = 2.75;

  const preHoraNormal = (salario / 30 / 8).toFixed(2);
  const preHoraAl25 = (preHoraNormal * 0.25).toFixed(2);
  const preHoraAl50 = (preHoraNormal * 1.5).toFixed(2);
  const preHoraAl100 = (preHoraNormal * 2).toFixed(2);

  const [total, setTotal] = useState("");

  const onPressFunction = () => {
    if (salario != 0 && salario != "" && diasLab != "" && nochesLab != "") {
      setIsActive(true)
      setNoches25(nochesLab * jornadaNocheX25);

      setHor50(nochesLab * jornadaNocheX50 + diasLab * jornadaDiaX50);

      setHor100(nochesLab * jornadaNochex100);

      setValor25(nochesLab * jornadaNocheX25 * preHoraAl25);
      setValor50(
        (nochesLab * jornadaNocheX50 + diasLab * jornadaDiaX50) * preHoraAl50
      );
      setValor100(nochesLab * jornadaNochex100 * preHoraAl100);

      setTotal(
        nochesLab * jornadaNocheX25 * preHoraAl25 +
          (nochesLab * jornadaNocheX50 + diasLab * jornadaDiaX50) *
            preHoraAl50 +
          nochesLab * jornadaNochex100 * preHoraAl100
      );
    } else {
      setIsActive(false)
      Alert.alert("Ingresa el salario/Dias y Noches");
    }
  };

  const clearFunction = () => {
    setTotal("");
    setDiasLab("");
    setSalario("");
    setNochesLab("");
    setIsActive(false)
  };

  return (

    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Calculadora de Sobretiempo</Text>
      </View>
      {/* Input salario basico*/}
      <View style={styles.containerInput}>
        <View style={styles.containerTitleInput}>
          <Text style={styles.titleInput}>Sueldo Básico</Text>
        </View>
        <TextInput
          style={styles.textInput}
          value={salario}
          onChangeText={(text) => setSalario(text)}
          autoFocus={true}
          inputMode="numeric"
        />
      </View>

      <View style={styles.containerInputDiasNoches}>
        {/* input Dias laborados*/}
        <View style={styles.containerInputDiasLab}>
          <Text style={styles.titleInputDias}>Dias</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setDiasLab(text)}
            inputMode="numeric"
            value={diasLab}
          />
        </View>
        {/* input noches laborados*/}
        <View style={styles.containerInputDiasLab}>
          <Text style={styles.titleInputDias}>Noches</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNochesLab(text)}
            inputMode="numeric"
            value={nochesLab}
          />
        </View>
      </View>
      {/*boton para el calculo de horas */}
      <View style={styles.containerButt}>
        <Pressable style={styles.button} onPress={onPressFunction}>
          <Text style={styles.textPress}>Calcular</Text>
        </Pressable>
      </View>
      {/* contenedor para el resultado*/}
      <Text style={{color:"white",textAlign:"center",marginBottom:8,}}>Detalle de las horas:</Text>
      {/* PRECIO DE LAS HORAS  */}
      <View style={styles.containerAllPrecioHora}>
        <View style={{width:"100%",alignItems:"center",paddingVertical:3,}}>
        <Text>Precio de las Horas</Text>
        </View>
        <View style={styles.containerPrecioHora}>
        <Text>Normal</Text>
          <Text>25%</Text>
          <Text>+50%</Text>
          <Text>+100%</Text>
        </View>
        <View style={styles.containerPrecioHora}>
        <Text>{preHoraNormal}</Text>
          <Text>{`${Number(preHoraAl25)}`}</Text>
          <Text>{Number(preHoraAl50)}</Text>
          <Text>{Number(preHoraAl100)}</Text>
        </View>
      </View>
      {/* END PRECIO DE LAS HORAS  */}

{/*start table component*/}

{isActive?<Table  dias={diasLab} noches={nochesLab} ></Table>:
console.log(isActive)
}

{/*end table component*/}


      <View style={styles.containerInputDiasLabResult}>
        <Text style={{color:"white"}}>Total de horas</Text>
        {/* resultado al 25%*/}
        <View style={styles.containerTextResult}>
          <View style={styles.containerSecondResult}>
            <Text>al 25%: </Text>
            <Text>{noches25}</Text>
          </View>
          <View style={styles.containerSecondResult}>
            <Text>valor($):</Text>
            <Text> {valor25.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.containerTextResult}>
          <View style={styles.containerSecondResult}>
            <Text style={styles.textResult}>al 50%: </Text>
            <Text>{hor50} </Text>
          </View>
          <View style={styles.containerSecondResult}>
            <Text style={styles.textResult}>valor($):</Text>
            <Text> {valor50.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.containerTextResult}>
          <View style={styles.containerSecondResult}>
            <Text>al 100%: </Text>
            <Text>{hor100}</Text>
          </View>
          <View style={styles.containerSecondResult}>
            <Text>valor($):</Text>
            <Text> {valor100.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <Text style={{ marginTop: 12 ,color:"white"}}>
        Total $ en sobretiempo:
      </Text>
      <View style={styles.containerCardResult}>
        <Text style={styles.textResultCard}>${Number(total).toFixed(3)}</Text>
      </View>
      <View style={styles.containerButtonTrash}>
        <Pressable style={styles.buttonTrash} onPress={clearFunction}>
          <Image
            style={styles.imageTrash}
            source={require("./assets/reload.png")}
          />
        </Pressable>
      </View>
      <Text style={{textAlign:"center",color:"white",marginBottom:12}}>creado por Kevin A.</Text>
      </ScrollView>
      <StatusBar style="light" />
   
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141e30",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 50,
  },
  containerTitle: {
    paddingBottom: 15,
    marginBottom: 15,
    borderColor: "#b02a37",
    borderBottomWidth: 2,
  },

  containerInput: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    color: "#b02a37",
    fontSize: 24,
    width: "100%",
    fontWeight: "bold",
  },
  titleInput: {
    color: "#495057",
  },
  containerTitleInput: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    fontSize: 20,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderRightColor: "#e9ecef",
    height: 40,
    color: "#495057",
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    width: 150,
  },
  textInput: {
    backgroundColor: "white",
    fontSize: 20,
    height: 40,
    width: 150,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    paddingHorizontal: 5,
  },
  titleInputDias: {
    fontSize: 20,
    color: "white",
  },
  containerInputDiasLab: {
    flexDirection: "column",
    marginTop: 10,
  },
  containerInputDiasNoches: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerButt: {
    width: "100%",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#157347",
    marginBottom: 10,
  },
  textPress: {
    color: "white",
    fontSize: 18,
  },
  containerInputDiasLabResult: {
    width: "100%",
    alignItems: "center",
    marginTop: 12,
  },
  containerTextResult: {
    flexDirection: "row",
    borderRadius: 3,
    width: "100%",
    marginTop: 12,
    backgroundColor: "gray",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  imageTrash: {
    width: 30,
    height: 30,
  },
  buttonTrash: {
    backgroundColor: "#ffc107",
    marginTop: 12,
    padding: 5,
    borderRadius: 3,
  },
  containerButtonTrash: {
    alignItems: "flex-start",
    width: "100%",
  },
  containerCardResult: {
    width: "100%",
    height: 80,
    backgroundColor: "#f4f6fb",
    borderRadius: 6,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  textResultCard: {
    fontSize: 28,
    fontWeight: "bold",
  },
  containerSecondResult: {
    flexDirection: "row",
  },
  containerAllPrecioHora:{
    backgroundColor: "#f4f6fb",
    width:"100%",
   

  },containerPrecioHora:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"white",
  },
});
