![GitHub Repo stars](https://img.shields.io/github/stars/rafaelvassis/taskcycle-app)
![GitHub forks](https://img.shields.io/github/forks/rafaelvassis/taskcycle-app)
![GitHub issues](https://img.shields.io/github/issues/rafaelvassis/taskcycle-app)
![Vercel](https://img.shields.io/endpoint?url=https://vercelbadge.com/api/rafaelvassis/taskcycle-app)
![License](https://img.shields.io/github/license/rafaelvassis/taskcycle-app)

<p align="center">
  <img src="./docs/TaskCycle-logo.png" alt="TaskCycle logo" width="180" />
</p>

<h1 align="center">TaskCycle</h1>

<p align="center">
  Focus. Work. Break. Repeat.
</p>

## Descrição do Projeto

O TaskCycle é uma aplicação de gestão de tempo baseada em ciclos de foco e descanso (inspirada na técnica Pomodoro) para auxiliar na gestão de tempo e aumento de produtividade. Com uma interface intuitiva, o aplicativo permite que os usuários configurem seus ciclos de trabalho e descanso, acompanhem o progresso das tarefas e visualizem um histórico detalhado de suas sessões.

## O que aprendi com este projeto

- Gerenciamento de estado complexo com Context API + useReducer
- Comunicação entre React e Web Workers
- Controle preciso de efeitos colaterais com useEffect
- Organização e arquitetura modular em React com TypeScript

## Funcionalidades

*   **Temporizador baseado em ciclos:** Foco, descanso curto e descanso longo, executado em segundo plano com Web Worker.
*   **Gestão de Tarefas por ciclo:** Adicione e acompanhe tarefas durante os ciclos de foco e descanso.
*   **Persistência local:** O estado da aplicação é salvo localmente no navegador, garantindo que suas configurações e histórico sejam mantidos entre as sessões.
*   **Histórico de Sessões:** Visualize um registro completo das tarefas concluídas e interrompidas.
*   **Tema Claro/Escuro:** Alternância de tema para uma experiência visual confortável.
*   **Configurações Personalizáveis:** Ajuste a duração dos ciclos de trabalho e descanso de acordo com suas preferências.
*   **Notificações Sonoras:** Alertas audíveis para o início e fim de cada ciclo.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Vite:** Ferramenta de build rápida para projetos web modernos.
*   **Web Workers:** Para executar o temporizador em segundo plano, evitando bloqueios na interface do usuário.
*   **react-router-dom:** Para gerenciamento de rotas na aplicação.
*   **date-fns:** Biblioteca para manipulação de datas.
*   **CSS Modules:** Para modularização e escopo de estilos CSS.
*   **lucide-react:** Biblioteca de ícones para React.
*   **react-toastify:** Para exibir notificações e mensagens ao usuário.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada de forma modular para facilitar a manutenção e escalabilidade:

```
TaskCycle/
├── public/
│   └── ... (arquivos estáticos, como favicon e imagens)
├── src/
│   ├── adapters/             # Adapters para funcionalidades externas
│   ├── assets/               # Ativos como áudios
│   ├── components/           # Componentes React reutilizáveis
│   ├── contexts/             # Contextos React para gerenciamento de estado global
│   ├── hooks/                # Hooks personalizados
│   ├── models/               # Definições de modelos de dados
│   ├── pages/                # Páginas principais da aplicação
│   ├── routers/              # Configuração de rotas
│   ├── styles/               # Estilos globais e temas
│   ├── templates/            # Layouts de página
│   ├── utils/                # Funções utilitárias
│   ├── workers/              # Web Workers para lógica em segundo plano
│   ├── App.tsx               # Componente principal da aplicação
│   └── main.tsx              # Ponto de entrada da aplicação
├── .eslintrc.cjs
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em sua máquina.

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/TaskCycle.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd TaskCycle
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se 5173 estiver em uso).

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados na pasta `dist/`.

## Deploy

Você pode acessar a versão publicada do projeto aqui: [Link para o Projeto no Vercel](https://taskcycle-app.vercel.app/)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Rafael Vassis**  
**Estudante de Sistemas de Informação | Desenvolvedor Front-end**

*   [GitHub](https://github.com/rafaelvassis)
*   [LinkedIn](https://linkedin.com/in/rafaelvassis)

---