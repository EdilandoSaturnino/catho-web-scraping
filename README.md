# Catho Web Scraping

Esta é uma aplicação simples que permite buscar vagas de emprego de programação da catho. O projeto é organizado em várias pastas e módulos para facilitar a manutenção e a escalabilidade.

## Estrutura de Pastas

O projeto está organizado da seguinte maneira:

- **config/**: Contém o arquivo de configuração do Express, `expressConfig.js`, que configura o servidor Express, middleware de análise de corpo JSON, CORS e tratamento de erros globais.

- **controllers/**: Contém o arquivo `jobListingsController.js`, que define os controladores para as rotas relacionadas às listagens de emprego. Ele usa os serviços para buscar e fornecer as listagens de emprego.

- **routes/**: Contém o arquivo `jobListingsRoutes.js`, que define as rotas para o aplicativo. Ele direciona as solicitações HTTP para os controladores apropriados.

- **scrapers/**: Contém os arquivos `generalScraper.js` e `frontendScraper.js`, que são responsáveis por raspar as informações das vagas de emprego de um site específico. O `frontendScraper.js` filtra vagas específicas de front-end.

- **services/**: Contém o arquivo `jobListingsService.js`, que atua como uma camada intermédia entre os controladores e os scrapers. Ele utiliza os scrapers para buscar as listagens de emprego e fornece-as aos controladores.

- **utils/**: Contém o arquivo `constants.js`, que define constantes utilizadas em todo o aplicativo, como o número máximo de páginas a serem raspadas, a URL do site de emprego e as palavras-chave de front-end.

- **server.js**: Este é o arquivo principal do servidor Express. Ele configura o servidor, importa as rotas definidas em `jobListingsRoutes.js` e inicia o servidor na porta especificada.

## Instalação e Execução

Para executar este projeto, é necessário ter o Node.js e o NPM instalados. Siga os passos abaixo:

```bash
   git clone https://github.com/EdilandoSaturnino/catho-web-scraping
```

Entre na pasta do projeto e instale as dependências:

```bash
cd catho-web-scraping
npm install
```

Após instalar as dependências, você pode iniciar o servidor Express executando o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta 3000 e você poderá acessar as rotas definidas no aplicativo para buscar vagas de emprego gerais e vagas de front-end.

## Uso

O aplicativo fornece duas rotas principais:

1. `/api/vagas`: Esta rota busca vagas de emprego gerais no site especificado.

2. `/api/vagas/frontend`: Esta rota busca vagas de emprego de front-end no site especificado, aplicando filtros específicos.

Para acessar essas rotas, você pode usar um cliente HTTP, como o Postman, ou fazer solicitações HTTP diretamente do seu aplicativo.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para criar um fork do repositório, fazer as alterações desejadas e enviar uma solicitação pull.
