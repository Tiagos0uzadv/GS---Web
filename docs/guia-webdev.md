# Web Development: o que falta a equipe fazer

O arquivo `script.js` desta pasta está pronto. O HTML e o CSS são os da entrega de Front-end Design, que a equipe escreve sem IA. Esta entrega é enviada **separadamente** no Teams.

## Elementos que a página precisa ter para o `script.js` funcionar

| Recurso | Elemento na página | Identificação |
|---|---|---|
| Slideshow | 3 imagens relacionadas ao tema, cada uma com `alt` | classe `slide` |
| | Botão para voltar | id `btn-anterior` |
| | Botão para avançar | id `btn-proximo` |
| | Parágrafo da legenda (opcional) | id `legenda-slide` |
| Formulário | O formulário | id `form-contato` |
| | Campo de nome | id `nome` |
| | Campo de e-mail | id `email` |
| | Campo de mensagem | id `mensagem` |
| | Um texto de erro embaixo de cada campo | ids `erro-nome`, `erro-email`, `erro-mensagem` |
| | Parágrafo de aviso geral | id `aviso-form` |
| Menu responsivo | Botão que abre o menu no celular | id `btn-menu` |
| | A lista do menu | id `menu` (o CSS define a classe `aberto`) |
| Simulador | Campo numérico da altura da água | id `nivel-agua` |
| | Botão | id `btn-simular` |
| | Parágrafo do resultado | id `resultado-simulador` |

O arquivo `script.js` deve ser ligado no fim do corpo da página, depois de todos os elementos.

**O `script.js` ainda não foi testado em uma página**, porque a página é de vocês. Depois de ligar, testem cada recurso: trocar as 3 imagens pelos botões, esperar a troca automática, enviar o formulário vazio, enviar com e-mail sem @ e enviar correto.

## Como o código atende à avaliação

| Critério | Onde está |
|---|---|
| Somente JavaScript puro | Nenhuma biblioteca é usada |
| Slideshow com 3 imagens | Bloco 1 |
| Formulário que impede campos vazios | Bloco 2, função `validarFormulario` |
| DOM para manipular HTML e CSS | `textContent`, `style` e `classList` em todos os blocos |
| Responsividade | Bloco 3, com as regras de tela pequena no CSS de vocês |

## GitHub: o que só a equipe pode fazer

A avaliação olha o histórico, então estes passos precisam ser reais e feitos por vocês.

1. **Criar uma Organização** no GitHub (Your organizations > New organization, plano gratuito) e convidar todos os integrantes.
2. **Criar o repositório** dentro da organização, público.
3. **Trabalhar em branches.** Uma branch por recurso, por exemplo `slideshow`, `formulario`, `menu-responsivo`, e depois merge para a `main`.
4. **Mínimo de 15 commits no total**, com todos os integrantes participando. Commits pequenos e com mensagem clara contam mais que um commit gigante.

Sugestão de divisão que chega a 15 commits com folga:

| Etapa | Branch | Commits sugeridos |
|---|---|---|
| Estrutura de pastas e README com a ficha | `main` | 2 |
| Página base (Front-end) | `landing-page` | 4 |
| Slideshow | `slideshow` | 3 |
| Formulário e validação | `formulario` | 3 |
| Menu responsivo e simulador | `interacao` | 2 |
| `equipe.txt`, `AI.md` e ajustes finais | `main` | 2 |

## Checklist da entrega

- [ ] Projeto funcionando antes de compactar
- [ ] `.zip` com todos os arquivos do projeto
- [ ] `equipe.txt` com nomes, RMs e link do repositório
- [ ] `AI.md` incluído (a falta desconta 10 pontos quando há uso de IA)
- [ ] Link do repositório GitHub enviado junto
- [ ] Entrega no prazo (atraso desconta 20 pontos)
- [ ] Apenas um integrante envia
