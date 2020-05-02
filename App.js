import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frases
  let frases = Array();
  frases[0] = `"Medir o progresso de um programa por linhas de código é como medir o processo de montagem de um avião pelo peso." Bill Gates`;
  frases[1] = `"Não me interessa se roda na sua máquina! Nós não estamos entregando a sua máquina!. Vadiu Platon"`;
  frases[2] = `"Um dos meus dias mais produtivos foi quando eu joguei fora 1000 linhas de código." Ken Thompson`;
  frases[3] = `"Mais vale uma crítica construtiva do que cem comentários inúteis." TânatosMaker`;
  frases[4] = `"O estudo da ciência da computação não consegue transformar qualquer um em um excelente programador, da mesma forma que o estudo de tintas e pincéis não transforma qualquer um em um excelente pintor." Eric S. Raymond`;

  Alert.alert(frases[numeroAleatorio]);
}

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./imagem/logo.png')} />

        <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>

          <Text style={styles.textobotao}>
             Nova Frase
          </Text>
        </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textobotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
