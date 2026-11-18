# ChuvAlerta

Landing page de um protótipo que mede a altura da água em ruas sujeitas a alagamentos e alerta a população local, mesmo sem internet.

Global Solution 2026.2 · Web Development · CitizenTech

## Como abrir

Abra `index.html` no navegador. Não é necessário instalar dependências.

## Estrutura

- `index.html`: página principal
- `css/style.css`: estilos
- `js/script.js`: menu, slideshow, simulador e validação do formulário
- `assets/`: fotos usadas na página e no slideshow
- `equipe.txt`: nomes, RMs e link do repositório

## Seções

1. **Problema**: o risco de atravessar ruas alagadas sem saber a profundidade.
2. **Tecnologia**: Arduino com sensor ultrassônico, Python e modelo matemático.
3. **Objetivos**: níveis de alerta (15 cm e 30 cm) e simulador demonstrativo.
4. **Público-alvo**: moradores, pedestres, idosos e pessoas com baixa visão.
5. **Benefícios**: aviso acessível, decisão informada e possibilidade de ampliar.
6. **Contato**: formulário que não deixa enviar com campo vazio.

## JavaScript (Web Development)

- Slideshow com 3 imagens do tema, com botões e troca automática
- Formulário com validação que impede campos vazios e e-mail inválido
- Menu responsivo que abre e fecha no celular
- Simulador de alerta que muda texto e cor pelo DOM
- Somente HTML, CSS e JavaScript puro, sem frameworks

> O simulador é ilustrativo: não recebe medições reais do sensor. Os limites não substituem alertas oficiais.