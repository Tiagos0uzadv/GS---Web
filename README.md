# ChuvAlerta

> A rua avisa antes de alagar.

## Ficha da CitizenTech

| Campo | Resposta |
|---|---|
| **Nome da CitizenTech** | ChuvAlerta |
| **Cidade e bairro** | São Paulo (SP), Capão Redondo, Parque Lígia (zona sul). Ponto monitorado: Rua Alfonso Santi, perto do Córrego do Engenho |
| **Cidadão beneficiado** | Morador do Parque Lígia que precisa decidir se sai de casa, se atravessa a rua ou se protege os móveis quando chove forte. Persona: Dona Rosa (nome fictício), construída a partir de relatos de moradores publicados pelo NC News em 17/11/2026 |
| **Problema, em uma frase** | Quando chove forte, o morador só descobre a altura da água na rua quando já está diante dela. |
| **Como funciona** | Um dispositivo no ponto mais baixo da rua mede a altura da água com um sensor ultrassônico e avisa no local, com luz, som e texto, mesmo sem internet. Um programa em Python registra leituras e orienta o morador, e esta página apresenta a solução |
| **Link do repositório** | https://github.com/chuvalerta-fiap/GS---Web |
| **Indicador de impacto** | Minutos de antecedência entre o aviso de Atenção (15 cm de água) e o nível de Perigo (30 cm). No cenário de chuva violenta do modelo matemático, são 7,2 minutos (cenário hipotético, a confirmar com medições reais) |
| **ODS conectados** | **ODS 11** (cidades e comunidades sustentáveis): reduz o risco para quem vive em ruas que alagam. **ODS 13** (ação contra a mudança global do clima): aumenta a capacidade de adaptação a chuvas extremas |

### O que cada parte faz

| Parte | Disciplina | O que faz |
|---|---|---|
| Lógica | Computational Thinking with Python | Programa que registra leituras de chuva e de água, classifica o risco e mostra o que fazer |
| Matemática | Differentiated Problem Solving | Função que estima em quantos minutos a água chega a 15 e a 30 cm |
| Sensor | Edge Computing & Computer Systems | Circuito no Wokwi que mede a água e alerta com LEDs, buzzer e visor |
| Interface | Front-end Design | Landing page em HTML e CSS que apresenta o problema e a solução |
| Experiência | Software & Total Experience Design | Escopo, requisitos, backlog e priorização |
| Pitch | Storytelling & Inspiração Empreendedora | Vídeo de até 3 minutos com a história da solução |
| Interação | Web Development | JavaScript desta página: slideshow, formulário, menu e simulador |

Fonte do relato: RODRIGUES, Larissa. EXCLUSIVO: moradores do Capão Redondo denunciam caos após obras da Sabesp: esgoto transborda e invade imóveis. *NC News*, 17 nov. 2026. Disponível em: https://ncnews.com.br/2026/11/17/alagamentos-no-capao-redondo-obras-sabesp/. Os limites de 15 e 30 cm seguem o National Weather Service: https://www.weather.gov/safety/flood-turn-around-dont-drown.

---

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