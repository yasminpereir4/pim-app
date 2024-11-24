import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GoBackButton } from "../../components/GoBackButton";

interface TermsOfUseProps {}

export const TermsOfUse: React.FC<TermsOfUseProps> = () => {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <GoBackButton onPress={() => goBack()} />

      <View className="p-6 mt-20">
        <Text className="text-[#fb923c] font-title text-3xl capitalize">
          Termos de uso
        </Text>
        <Text className="text-base font-body mt-6 text-[#1c1917]">
          {"   "}Bem-vindo ao aplicativo da Fazenda FarmTech. Ao utilizar nossos
          serviços, você concorda com os termos e condições abaixo. Leia
          atentamente antes de continuar.
        </Text>
        <Text className="text-base font-body mt-6 text-[#1c1917]">
          1. **Aceitação dos Termos**{"\n"}O uso do aplicativo da FarmTech
          implica na aceitação integral destes Termos de Uso. Caso não concorde
          com algum ponto, não utilize o aplicativo.{"\n\n"}
          2. **Serviços Disponíveis**{"\n"}O aplicativo oferece funcionalidades
          como:{"\n"}- Compra de produtos frescos cultivados na Fazenda
          FarmTech;{"\n"}- Acesso a descontos exclusivos para funcionários;
          {"\n"}- Informações sobre produtos, eventos e novidades da fazenda.
          {"\n\n"}
          3. **Cadastro e Responsabilidades do Usuário**{"\n"}
          Para acessar determinados serviços, é necessário criar uma conta. O
          usuário deve fornecer informações precisas e atualizadas. É
          responsabilidade do usuário manter a confidencialidade de sua senha e
          dados de acesso.{"\n\n"}
          4. **Política de Descontos**{"\n"}
          Os descontos são exclusivos para funcionários da Fazenda FarmTech,
          aplicáveis apenas a compras realizadas por meio do aplicativo. Não são
          cumulativos com outras promoções.{"\n\n"}
          5. **Privacidade e Proteção de Dados**{"\n"}A FarmTech se compromete a
          proteger os dados pessoais dos usuários, conforme descrito em nossa
          Política de Privacidade.{"\n\n"}
          6. **Pagamentos e Reembolsos**{"\n"}
          Os pagamentos são processados diretamente pelo aplicativo, com as
          opções de pagamento exibidas no momento da compra. Reembolsos serão
          analisados caso a caso e seguem as políticas internas da FarmTech.
          {"\n\n"}
          7. **Uso Indevido**{"\n"}É proibido:{"\n"}- Utilizar o aplicativo para
          fins ilegais ou não autorizados;{"\n"}- Divulgar informações falsas ou
          enganosas;{"\n"}- Acessar áreas restritas do aplicativo sem permissão.
          {"\n\n"}
          8. **Modificações nos Termos**{"\n"}A Fazenda FarmTech reserva-se o
          direito de alterar estes Termos de Uso a qualquer momento, sendo
          responsabilidade do usuário verificar periodicamente as atualizações.
          {"\n\n"}
          9. **Limitação de Responsabilidade**{"\n"}A FarmTech não se
          responsabiliza por:{"\n"}- Problemas técnicos que impeçam o
          funcionamento do aplicativo;{"\n"}- Danos causados por uso inadequado
          do app.{"\n\n"}
          10. **Contato**{"\n"}
          Em caso de dúvidas ou problemas relacionados ao aplicativo, entre em
          contato:{"\n"}- E-mail: suporte@farmtech.com{"\n"}- Telefone: (11)
          1234-5678{"\n\n"}
          11. **Legislação Aplicável**{"\n"}
          Este Termos de Uso é regido pelas leis brasileiras. Quaisquer disputas
          deverão ser resolvidas no foro da comarca da sede da Fazenda FarmTech.
          {"\n\n"}
          Obrigado por escolher a FarmTech! Cultivando o futuro, juntos. 🌱
        </Text>
      </View>
    </View>
  );
};
