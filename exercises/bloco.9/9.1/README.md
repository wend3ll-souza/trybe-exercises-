## 9.1

**Praticando: Exercicios de fixação**
_1. Callbacks:_

-  Complete a função getUser de forma que ela receba uma outra função como parâmetro 

- Complete a função getUser de forma que ela receba um callback para que possa realizar as operações 

_2. Lidando com erros em operações assíncronas:_

-A função `getCountry` tem aproximadamente _50%_ de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para `getCountry` , de forma que trate a mensagem de erro retornada.


**Exercicios**

1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

2, Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

3. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O [Curiosity](https://mars.nasa.gov/) envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature que imprime a temperatura em Marte.

5. Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.