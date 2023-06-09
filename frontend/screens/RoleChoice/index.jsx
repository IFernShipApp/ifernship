import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";

import Title from "../../components/Title/index.jsx";
import Paragraph from "../../components/Paragraph/index.jsx";
import RoleButton from "../../components/RoleButton/index.jsx";

import styles from "./style.js";

export default function RoleChoice({ navigation }) {
  const navigate = (role) => {
    navigation.navigate("Signup", { role });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <View style={styles.main}>
        <Title>Quem é você?</Title>
        <Paragraph>
          Selecione o botão correspondente ao seu título na instituição:
        </Paragraph>
      </View>
      <View style={styles.buttons}>
        <RoleButton
          behavior={() => navigate("coordenador")}
          icon={<Image source={require("../../assets/coordinator.png")} />}
        >
          Coordenador
        </RoleButton>
        <RoleButton
          behavior={() => navigate("estagiário")}
          icon={<Image source={require("../../assets/student.png")} />}
        >
          Estudante
        </RoleButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
