import { cores } from '@/constants/cores';
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mapa() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const filtros = ["Todos", "Abertos", "Em execução", "Resolvidos"];
  const filtros2 = ["Mapa", "Ranking", "Notificações", "Perfil"];
  return (
    <SafeAreaView style={ styles.container }>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <View style={styles.header}>
            <Text style={{fontWeight: "bold", marginLeft: 20, fontSize: 17}}>Sinop, MT</Text>
            <Pressable onPress={() => {
              if (!estaLogado) {
                router.push('/');
              }
            }}>
              <Text style={{marginRight: 25}}>{estaLogado ? <Text>Icone de{'\n'}Perfil</Text> : <Text>Fazer login</Text>}</Text>
            </Pressable>
          </View>
          <View style={styles.searchBar}>
            <Text style={{ fontSize: 14, color: cores.cinzaEscuro }}> 🔍  Buscar endereço, bairro...</Text>
          </View>
          <View style={styles.filtroContainer}>
            {filtros.map((filtro) => {
              const ativo = filtroAtivo === filtro;

              return (
                <Pressable
                  key={filtro}
                  onPress={() => setFiltroAtivo(filtro)}
                  style={[
                    styles.filtroText,
                    ativo && styles.filtroTextAtivo,
                  ]}
                >
                  <Text
                    style={[
                      styles.filtroTextLabel,
                      ativo && styles.filtroTextLabelAtivo,
                    ]}
                  >
                    {filtro}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.mapaContainer}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Mapa dos buracos
            </Text>
          </View>
          {estaLogado &&
          <View style={styles.botaoReporteContainer}>
            <Text style={styles.botaoReporte}>+</Text>
          </View>
          }
          <View style={[styles.opcoesContainer, {marginTop: estaLogado ? 20 : 120}]} >
            {filtros2.map((filtro) => {
              const ativo = filtroAtivo === filtro;

              return (
                <Pressable
                  key={filtro}
                  onPress={() => setFiltroAtivo(filtro)}
                  style={[
                    styles.opcoesText,
                  ]}
                >
                  <Text
                    style={[
                      styles.opcoesTextLabel,
                      ativo && styles.opcoesTextLabelAtivo,
                    ]}
                  >
                    {filtro}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: cores.bgBrancoGelo,
  },
  header: {
    width: '98%',
    height: 70,
    backgroundColor: cores.branco,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: cores.preto,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  searchBar: {
    width: '90%',
    height: 47,
    backgroundColor: cores.branco,
    borderRadius: 12,
    padding: 10,
    borderColor: cores.cinzamuitoclaro,
    borderWidth: 1,
    justifyContent: 'center',
  },
  filtroContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
  filtroText: {
    borderColor: cores.cinzamuitoclaro,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    backgroundColor: cores.branco,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtroTextAtivo: {
    backgroundColor: cores.verdeClaro,
    borderColor: cores.verde,
  },
  filtroTextLabel: {
    fontSize: 14,
    color: cores.cinzaEscuro,
    fontWeight: '500',
  },
  filtroTextLabelAtivo: {
    color: cores.verde,
  },
  mapaContainer: {
     width: '90%',
     height: 400,
     backgroundColor: cores.cinzamuitoclaro,
     marginTop: 10,
     borderRadius: 15,
     justifyContent: 'center',
     alignItems: 'center' 
  },
  botaoReporteContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
  },
  botaoReporte: {
    borderRadius: 100,
    backgroundColor: cores.verde,
    color: cores.branco,
    fontSize: 30,
    marginRight: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  opcoesContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    height: 85,
    backgroundColor: cores.branco,
    borderColor: cores.cinzamuitoclaro,
    borderWidth: 1,
  },
  opcoesText: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opcoesTextLabel: {
    fontSize: 14,
    color: cores.cinzaEscuro,
    fontWeight: '500',
  },
  opcoesTextLabelAtivo: {
    color: cores.verde,
    fontWeight: 'bold',
  },
});