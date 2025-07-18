# Single-SPA Microfrontend Example

Este é um projeto de exemplo utilizando **single-spa** para demonstrar a arquitetura de microfrontends. O projeto contém um root config e um microfrontend React, configurados em uma estrutura de monorepo.

## 🚀 O que é Single-SPA?

Single-SPA é um framework que permite criar aplicações frontend usando a arquitetura de microfrontends. Ele permite que você:

- Combine múltiplas aplicações JavaScript em uma única página
- Use diferentes frameworks (React, Vue, Angular, etc.) na mesma aplicação
- Implemente e desenvolva cada microfrontend independentemente
- Compartilhe dependências entre microfrontends

## 📁 Estrutura do Projeto

```
single-spa-example/
├── root-config/                   # Configuração raiz do single-spa
│   ├── src/
│   │   ├── bytebank-root-config.ts   # Configuração principal do root config
│   │   ├── index.ejs              # Template HTML principal
│   │   ├── microfrontend-layout.html  # Layout dos microfrontends
│   │   └── declarations.d.ts      # Declarações TypeScript
│   ├── package.json
│   ├── webpack.config.js          # Configuração do Webpack
│   ├── tsconfig.json              # Configuração do TypeScript
│   └── babel.config.json          # Configuração do Babel
├── menu/                          # Microfrontend Menu
│   ├── src/
│   │   ├── bytebank-menu.tsx      # Configuração do microfrontend Menu
│   │   ├── root.component.tsx     # Componente principal do Menu
│   │   └── declarations.d.ts      # Declarações TypeScript
│   ├── package.json
│   ├── webpack.config.js          # Configuração do Webpack
│   ├── tsconfig.json              # Configuração do TypeScript
│   └── babel.config.json          # Configuração do Babel
├── transactions/                  # Microfrontend Transactions
│   ├── src/
│   │   ├── bytebank-transactions.tsx  # Configuração do microfrontend Transactions
│   │   ├── root.component.tsx     # Componente principal do Transactions
│   │   └── declarations.d.ts      # Declarações TypeScript
│   ├── package.json
│   ├── webpack.config.js          # Configuração do Webpack
│   ├── tsconfig.json              # Configuração do TypeScript
│   └── babel.config.json          # Configuração do Babel
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **Single-SPA**: Framework principal para microfrontends
- **React**: Framework para o microfrontend
- **TypeScript**: Linguagem principal do projeto
- **Webpack**: Bundler e servidor de desenvolvimento
- **Babel**: Transpilador JavaScript
- **ESLint**: Linter para qualidade de código
- **Jest**: Framework de testes
- **Prettier**: Formatador de código

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd single-spa-example
```

2. Instale as dependências do root config:

```bash
cd root-config
npm install
```

3. Instale as dependências do microfrontend Menu:

```bash
cd ../menu
npm install
```

4. Instale as dependências do microfrontend Transactions:

```bash
cd ../transactions
npm install
```

## 🏃‍♂️ Como Executar

### Desenvolvimento

Para executar o projeto em desenvolvimento, você precisa iniciar todos os servidores:

1. **Inicie o microfrontend Menu** (em um terminal):

```bash
cd menu
npm start
```

O microfrontend Menu será iniciado na porta 8500: localhost:8500

2. **Inicie o microfrontend Transactions** (em outro terminal):

```bash
cd transactions
npm start
```

O microfrontend Transactions será iniciado na porta 8501: localhost:8501

3. **Inicie o root config** (em outro terminal):

```bash
cd root-config
npm start
```

O root config será iniciado na porta 9000: localhost:9000

## 🏗️ Arquitetura

### Root Config

O **root config** é responsável por:

- Registrar e gerenciar todos os microfrontends
- Definir quando cada microfrontend deve ser ativado
- Configurar as rotas da aplicação
- Gerenciar dependências compartilhadas

### Import Maps

O projeto utiliza **import maps** para:

- Mapear dependências compartilhadas (como React, single-spa)
- Configurar URLs dos microfrontends
- Permitir override de dependências durante desenvolvimento

As dependências compartilhadas são configuradas no arquivo `index.ejs` e incluem:

- React e ReactDOM
- Single-SPA
- Mapeamento dos microfrontends locais (@single-spa-example/root-config, @single-spa-example/menu e @single-spa-example/transactions)

### Microfrontend Layout

O arquivo `microfrontend-layout.html` define:

- Estrutura HTML dos microfrontends
- Rotas para cada aplicação
- Elementos de layout compartilhados

## 🔄 Adicionando Novos Microfrontends

Para adicionar um novo microfrontend ao projeto:

1. **Crie um novo diretório** para o microfrontend (seguindo o padrão do projeto)

2. **Registre no layout** (`root-config/src/microfrontend-layout.html`):

```html
<route path="/novo-microfrontend">
  <application name="@single-spa-example/novo-microfrontend"></application>
</route>
```

3. **Adicione ao import map** (`root-config/src/index.ejs`):

```javascript
{
  "imports": {
    "@single-spa-example/novo-microfrontend": "//localhost:8600/novo-microfrontend.js"
  }
}
```

4. **Importe no script principal** (`root-config/src/index.ejs`):

```javascript
window.importMapInjector.initPromise.then(() => {
  import("@single-spa-example/root-config");
  import("@single-spa-example/menu");
  import("@single-spa-example/transactions");
  import("@single-spa-example/novo-microfrontend");
});
```

## 🐛 Resolução de Problemas

### Porta já em uso

Se a porta 9000 (root config) estiver ocupada:

```bash
cd root-config
npm start -- --port 8080
```

Se a porta 8500 (microfrontend Menu) estiver ocupada:

```bash
cd menu
npm start -- --port 8600
```

Se a porta 8501 (microfrontend Transactions) estiver ocupada:

```bash
cd transactions
npm start -- --port 8602
```

### Erro ERR_REQUIRE_ESM

Se você encontrar erros relacionados a módulos ES:

- Certifique-se de usar versões compatíveis das dependências
- Verifique se `webpack-config-single-spa-ts` está na versão correta

## 📚 Recursos Úteis

- [Documentação Official do Single-SPA](https://single-spa.js.org/)
- [Guia de Microfrontends](https://single-spa.js.org/docs/microfrontends-concept/)
- [Exemplo de Aplicações](https://single-spa.js.org/docs/examples/)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

- **LeticiaRosa** -
