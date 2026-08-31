import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mapa() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f6f8fa" }}>
      <View>
        {estaLogado ? (
          <>
          <Text style={{ color: "green", fontWeight: "bold" }}>Sim está logado</Text>
          <Text style={{ fontSize: 18 }}>Botão adiciona buraco</Text>
          </>
        ) : (
          <Text style={{ color: "red", fontWeight: "bold" }}>Não está logado</Text>
        )}
        <Text style={{ fontSize: 18, alignItems: "baseline" }}>Mapa dos buracos</Text>
      </View>
    </SafeAreaView>
  );
}

