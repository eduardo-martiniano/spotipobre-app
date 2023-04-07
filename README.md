# Bem-vindo ao SpotiPobre
Este é um projeto SPA desenvolvido em Angular para converter vídeos do YouTube em arquivos de áudio no formato MP3. 
Aqui você encontrará informações para rodar o projeto e usá-lo.

# Como rodar o projeto
Existem duas formas de rodar o projeto: apenas o Frontend ou com a API integrada. Veja como executar cada uma delas:

# Somente o Frontend
Para rodar somente o app, siga os passos abaixo:

- Clone o projeto para o seu computador

- Abra um terminal na pasta do projeto

- Execute os seguintes comandos:

```
npm i
```
```
ng s
```
Agora, ele estará disponível em http://localhost/80.

# Backend + Frontend
Para rodar o projeto com o Backend integrado, siga os passos abaixo:

- Clone o projeto da branch "docker-compose"

- Abra um terminal na pasta do projeto

- Execute o seguinte comando:

```
docker-compose up --build
```

Com esse comando, você irá construir e executar os containers da API e do frontend. Agora, a aplicação completa estará disponível em http://localhost:80.


# Considerações finais
Espero que esse projeto possa ajudar em suas necessidades de conversão de vídeos do YouTube em arquivos de áudio. Sinta-se livre para contribuir com o projeto, reportando bugs ou sugerindo melhorias. Agradecemos pela sua visita!
