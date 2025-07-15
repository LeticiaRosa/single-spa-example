# Bytebank Single-SPA Root Config

Este é o **root config** para a aplicação Bytebank construída com **single-spa**, um framework para microfrontends. Este é meu primeiro projeto de microfrontend em um monorepo utilizando single-spa.

## 🚀 O que é Single-SPA?

Single-SPA é um framework que permite criar aplicações frontend usando a arquitetura de microfrontends. Ele permite que você:

- Combine múltiplas aplicações JavaScript em uma única página
- Use diferentes frameworks (React, Vue, Angular, etc.) na mesma aplicação
- Implemente e desenvolva cada microfrontend independentemente
- Compartilhe dependências entre microfrontends

## 📁 Estrutura do Projeto

```
single-spa-example/
├── src/
│   ├── bytebank-root-config.ts    # Configuração principal do root config
│   ├── index.ejs                  # Template HTML principal
│   ├── microfrontend-layout.html  # Layout dos microfrontends
│   └── declarations.d.ts          # Declarações TypeScript
├── package.json
├── webpack.config.js              # Configuração do Webpack
├── tsconfig.json                  # Configuração do TypeScript
└── babel.config.json              # Configuração do Babel
```

## 🛠️ Tecnologias Utilizadas

- **Single-SPA**: Framework principal para microfrontends
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

2. Instale as dependências:

```bash
npm install
```

## 🏃‍♂️ Como Executar

### Desenvolvimento

```bash
npm start
```

O servidor de desenvolvimento será iniciado na porta 9000:

- URL: http://localhost:9000

### Build para Produção

```bash
npm run build
```

### Testes

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Formatação de Código

```bash
npm run format
```

## 🏗️ Arquitetura

### Root Config

O **root config** é responsável por:

- Registrar e gerenciar todos os microfrontends
- Definir quando cada microfrontend deve ser ativado
- Configurar as rotas da aplicação
- Gerenciar dependências compartilhadas

### Import Maps

O projeto utiliza **import maps** para:

- Mapear dependências compartilhadas (como single-spa)
- Configurar URLs dos microfrontends
- Permitir override de dependências durante desenvolvimento

### Microfrontend Layout

O arquivo `microfrontend-layout.html` define:

- Estrutura HTML dos microfrontends
- Rotas para cada aplicação
- Elementos de layout compartilhados

## 🔄 Adicionando Novos Microfrontends

Para adicionar um novo microfrontend:

1. **Registre no root config** (`bytebank-root-config.ts`):

```typescript
registerApplication({
  name: "@bytebank/meu-microfrontend",
  app: () => System.import("@bytebank/meu-microfrontend"),
  activeWhen: ["/meu-microfrontend"],
});
```

2. **Adicione ao import map** (`index.ejs`):

```javascript
{
  "imports": {
    "@bytebank/meu-microfrontend": "//localhost:8080/meu-microfrontend.js"
  }
}
```

3. **Configure no layout** (`microfrontend-layout.html`):

```html
<route path="/meu-microfrontend">
  <application name="@bytebank/meu-microfrontend"></application>
</route>
```

## 🐛 Resolução de Problemas

### Erro ERR_REQUIRE_ESM

Se você encontrar erros relacionados a módulos ES:

- Certifique-se de usar versões compatíveis das dependências
- Verifique se `webpack-config-single-spa-ts` está na versão correta

### Porta já em uso

Se a porta 9000 estiver ocupada:

```bash
npm start -- --port 8080
```

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

- **Seu Nome** - _Trabalho inicial_ - [GitHub](https://github.com/seu-usuario)

---

🎉 **Parabéns!** Você criou seu primeiro projeto de microfrontend com single-spa!

Este é apenas o começo da sua jornada com microfrontends. Continue explorando e adicionando novos microfrontends à sua aplicação.
