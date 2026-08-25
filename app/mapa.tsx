import {Redirect} from "expo-router";
import {Text} from "react-native";

export default function Mapa({ logado = false }: { logado?: boolean }) {
  return (
    <> {/*Tags fragment para agrupar elementos */}
        {logado ? 
        <Text style={{ color: 'green' }}>Sim está logado</Text>
         : 
        <Text style={{ color: 'red' }}>Não está logado</Text>}
        <Text style={{ color: 'white' }}>Mapa dos buracos</Text>
    </>
  );
}

