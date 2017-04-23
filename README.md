### Hackathon Avenue Code
##### Implementação do servidor e algoritmo
#
Objetivo: Decifrar programaticamente uma string de tamanho N.
Você precisa construir um programa para decodificar uma string. Para isto seu aplicativo precisa fazer uma chamada para o endpoint do servidor local criado com NodeJS. 

O serviço possui os seguintes parâmetros:
* coder - deve ser o seu e-mail e maior do que 10 caracteres.
* challenge - a string 
* test - "true" ou "false"
* Para saber o tamanho da string, basta realizar uma chamada sem enviar nenhum valor no parâmetro challenge, a resposta do serviço conterá o tamanho da string que seu aplicativo deverá decifrar 
* Caracteres válidos para a string atendem à expressão regular [a-zA-Z0-9_=]

As respostas esperadas do serviço são as seguintes:
* 200 - OK - String decodificada
* 206 - Partial Content - Request está correto, a string ainda não foi decifrada
* 400 - Bad Request - Parâmetro(s) faltantes ou não condizentes. parâmetro coder deve ser maior que 10 caracteres.
* 409 - Conflict - O tamanho da string challenge enviada é diferente da esperada.

Ao enviar o request corretamente, o serviço irá retornar uma outra string com o mesmo tamanho da string do desafio contendo um criptograma que pode ser lido conforme regra abaixo:
- Uma letra "W" indica que o caracter enviado naquela posição não está presente na string.
- Uma letra "U" indica que o caracter enviado naquela posição está presente na string mas está na posição errada.
- Uma letra "R" indica que o caracter enviado naquela posição está presente na string e está na posição correta.
Exemplo: Seu aplicativo enviou a string "AZDEGDE23", a API sabe que seu objetivo é "ABCDEF123" portanto vai lhe enviar a resposta "RWUUWUURR".

Ao enviar a string correta o serviço retorna resposta 200.

##### Montando o Ambiente
#
1. Servidor: NodeJS
    ```
    npm update
    node server.js
    ```
2. Habilitar Cross-origin HTTP requests: Plugin Google Chrome - [CORS]

3. Abrir o aquirvo index.html

[CORS]: <https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi>