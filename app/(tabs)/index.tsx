import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo moreno</Text>
      <Text style={styles.subtitulo}>Este é o seu aplicativo React Native!</Text>
      <Text style={styles.corpo}>
        O Lorem Ipsum é um texto modelo da indústria tipográfica 
        e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
        desde o ano de 1500, quando uma misturou os caracteres de um texto para criar 
        um espécime de livro. Este texto não só sobreviveu 5 séculos, 
        mas também o salto para a tipografia electrónica, 
        mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a 
        disponibilização das folhas de Letraset, que continham passagens com 
        Lorem Ipsum, e mais recentemente com os programas de publicação 
        como o Aldus PageMaker que incluem versões do Lorem Ipsum. 
      </Text>
      <TouchableOpacity style={{
        backgroundColor: 'black',
        padding: 10,
        height: 'auto',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => alert('Ai meu pézinho eduardo')}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Clique aqui pra uma
        </Text>
      </TouchableOpacity>
      <Text style={{ color: '#f5f5f5', fontSize: 15, textAlign: 'center', marginVertical: 100}}>
        Cuidado
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3fa103',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#f5f5f5',
    fontSize: 20,
    textAlign: 'center',
  },
  corpo: {
    color: '#f5f5f5',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
