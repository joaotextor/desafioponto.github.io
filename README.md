# Desafio HTML/CSS/JS - Curso Javascript Fullstack

## Sobre o desafio
<p>O desafio consiste no desenvolvimento do layout de uma landing page com uma grade de produtos e um formulário de newsletter. Seu principal objetivo é transformar este layout em uma página funcional.</p>

[Link do Mock do Layout](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)

[Endpoint da API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)

## Maiores desafios encontrados
<br>

### Background

<p>Creio que a maior dúvida que tive foi na implementação do background branco em diagonal.</p>
<p>Após experimentar com algumas possíveis soluções, decidi por incluir duas divs, uma dentro da outra. A div "pai" com um transform: skewY positivo e a segunda, posicionada ao final, com um skewY negativo para que a diagnoal ficasse invertida.</p>
<p>Contudo, com essa solução, vieram outros problemas, tais como o tamanho de cada div para que ambas se sobrepusessem corretamente, sem deixar um espaço e demonstrar o fundo cinza.</p>
<p>Apesar de não estar inteiramente satisfeito com essa abordagem, ela funciona no caso concreto, independentemente de quanto conteúdo tiver na página (embora se for pouco conteúdo, o tamanho das divs deve ser readequado para não originar problemas com a sobreposição).</p>

## [Live Preview](https://joaotextor.github.io/desafioponto.github.io/)
