# Remotion — Briefing IA Viral TikTok

Projeto Remotion + React + TypeScript para gerar um vídeo vertical de **45 segundos**, sem áudio e sem imagens binárias, baseado no briefing de IA de **29/05/2026**.

## Objetivo do vídeo

Criar um vídeo no estilo **Viral TikTok/Reels** com textos grandes, cards dinâmicos, animações rápidas, ticker, gradientes e CTA final forte sobre a aceleração histórica do mercado de IA:

- investimentos bilionários;
- infraestrutura para IA;
- regulação e sociedade;
- agentes IA;
- ferramentas dev;
- GEO/visibilidade em respostas geradas por IA.

## Especificações técnicas

- Composição principal: `AIBriefingVideo`
- Resolução: `1080x1920`
- Formato: vertical
- FPS: `30`
- Duração: `1350` frames / `45` segundos
- Áudio: não utilizado
- Assets externos: não utilizados
- Imagens binárias: não utilizadas
- Render final local: `remotion/renders/ai-briefing-2026-05-29.mp4`

## Instalação

```bash
npm install
```

## Abrir o Remotion Studio

```bash
npm run dev
```

No Studio, selecione a composição `AIBriefingVideo`.

## Renderizar o vídeo

```bash
npm run render
```

O arquivo será gerado em:

```text
remotion/renders/ai-briefing-2026-05-29.mp4
```

> A pasta `remotion/renders/` é versionada apenas com `.gitkeep`; os vídeos renderizados são ignorados pelo Git.

## Validar TypeScript

```bash
npm run typecheck
```

## Estrutura do projeto

```text
remotion/
├── compositions/
│   └── AIBriefingVideo.tsx
├── scenes/
│   ├── Intro.tsx
│   ├── CTA.tsx
│   ├── NewsBlock.tsx
│   └── Outro.tsx
├── assets/
│   ├── audio/
│   │   └── .gitkeep
│   ├── images/
│   │   └── .gitkeep
│   └── videos/
│       └── .gitkeep
├── components/
│   ├── GoogleGradientBackground.tsx
│   ├── AnimatedHeadline.tsx
│   ├── NewsCard.tsx
│   ├── HashtagBar.tsx
│   └── ProgressBar.tsx
├── hooks/
│   ├── .gitkeep
│   └── useEntranceAnimation.ts
├── utils/
│   ├── .gitkeep
│   └── videoConfig.ts
├── data/
│   └── briefing-ai-2026-05-29.yaml
└── renders/
    └── .gitkeep

src/
├── index.ts
└── Root.tsx
```

## Roteiro de 45 segundos

| Tempo | Cena | Conteúdo |
|---|---|---|
| 0s–4s | Intro | Hook: “🚨 IA em modo turbo: o briefing que você precisa ver hoje” |
| 4s–9s | NewsBlock | Anthropic levanta US$ 65 bilhões; valuation de US$ 965 bilhões |
| 9s–14s | NewsBlock | Dell cresce 757% em servidores para IA |
| 14s–19s | NewsBlock | TSE cria comissão permanente para IA nas eleições |
| 19s–24s | NewsBlock | Debate global sobre ética em IA |
| 24s–30s | NewsBlock | Codex, Hermes Agent e Multica |
| 30s–35s | NewsBlock | Moltbook passa de 1,5 milhão de agentes |
| 35s–40s | NewsBlock | SEO está virando GEO |
| 40s–45s | CTA/Outro | CTA para salvar, acompanhar e transformar tendências em automações reais |

## Estilo visual

O projeto usa uma linguagem jovem, tecnológica e rápida, inspirada nas cores do Google:

- Azul: `#4285F4`
- Vermelho: `#EA4335`
- Amarelo: `#FBBC05`
- Verde: `#34A853`
- Fundo escuro: `#0B0F19`
- Branco: `#FFFFFF`
- Fonte fallback: `Inter, Poppins, Arial, sans-serif`

## Dados do briefing

O briefing editorial está em YAML:

```text
remotion/data/briefing-ai-2026-05-29.yaml
```

Esse arquivo organiza título, data, metadados de estilo, seções, frases, highlights e hashtags para uso futuro em automações com N8N, APIs, filas de renderização ou geração em lote.

## GitHub e versionamento

- `.gitignore` remove `node_modules`, bundles, renders finais e arquivos de ambiente reais.
- `.env.example` fica vazio e seguro para documentar futuras variáveis sem expor segredos.
- Pastas de assets e renders são preservadas com `.gitkeep`.
- Não há imagens externas, áudio ou vídeos binários no commit.

## GitHub Actions

O workflow em `.github/workflows/render.yml` instala dependências, roda o typecheck, renderiza `AIBriefingVideo` e publica o MP4 como artifact.
