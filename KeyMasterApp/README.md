# KeyMasterApp

## Descrição
O **KeyMasterApp** é uma aplicação móvel desenvolvida para professores de KeyMaster Ele permite criar e gerenciar exercícios, disponibilizar partituras e interagir diretamente com alunos via chat.

---

## Funcionalidades
- **Dashboard:** Visualize estatísticas e progresso de alunos.
- **Exercícios:** Crie e compartilhe exercícios personalizados.
- **Partituras:** Disponibilize partituras diretamente no aplicativo.
- **Chat:** Comunicação personalizada com alunos.
- **Notificações:** Receba alertas sobre prazos e novos conteúdos.

---

## Instalação

### Pré-requisitos
- Node.js >= 14.x
- React Native CLI
- Firebase configurado no projeto

### Passo a passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/teclado-musical-app.git
   cd teclado-musical-app
2. Instale as dependências:
   npm install
3. Configure o Firebase:
   Substitua o arquivo firebaseConfig.js com suas credenciais do Firebase.
4. Inicie o servidor de desenvolvimento:
   npm start
5. Execute no Android:
   npx react-native run-android
6. Execute no iOS:
   npx react-native run-ios
   
---

### Tecnologias Utilizadas
React Native para desenvolvimento mobile.
Firebase para autenticação, armazenamento e notificações.
React Navigation para gerenciamento de rotas.

### Estrutura de Pastas
src/
├── components/        # Componentes
├── screens/           # Telas do aplicativo
├── utils/             # Funções de utilidade (FormatDate.js, Validation.js)
├── AppNavigator.js    # Configuração de navegação
├── firebaseConfig.js  # Configurações do Firebase
├── styles/            # Arquivos de estilo global