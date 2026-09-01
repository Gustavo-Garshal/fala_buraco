import { cores } from '@/constants/cores';
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mapa() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  return (
    <SafeAreaView style={ styles.container }>
      {estaLogado ? (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <View style={styles.header}>
            <Text style={{fontWeight: "bold", marginLeft: 20, fontSize: 18}}>Sinop, MT</Text>
            <Text style={{marginRight: 25}}>Icone</Text>
          </View>
          <View style={styles.searchBar}>
            <Text style={{ fontSize: 14, color: cores.cinzaEscuro }}> 🔍  Buscar endereço, bairro...</Text>
          </View>
          <View style={styles.filtro}>
            <Text style={styles.filtroText}>Todos</Text>
            <Text style={styles.filtroText}>Abertos</Text>
            <Text style={styles.filtroText}>Em execução</Text>
            <Text style={styles.filtroText}>Resolvidos</Text>
          </View>
        </View>
      ) : (
        <Text style={{ color: "red", fontWeight: "bold" }}>Não está logado</Text>
      )}
      <Text style={{ fontSize: 18 }}>Mapa dos buracos</Text>
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
  filtro: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
  filtroText: {
    fontSize: 14,
    color: cores.cinzaEscuro,
    borderColor: cores.cinzamuitoclaro,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cores.branco,
  },
});