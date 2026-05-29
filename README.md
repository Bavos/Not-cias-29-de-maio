# Projeto Remotion — Resumo das Notícias

Projeto completo em Remotion + React + TypeScript para gerar um vídeo jornalístico vertical, moderno e sem áudio.

## Especificações do vídeo

- Composição: `NewsVideo`
- Resolução: `1080x1920`
- Formato: vertical para celular
- FPS: `30`
- Duração: `1350` frames, exatamente `45` segundos
- Codec de renderização: H.264
- Arquivo final: `out/final-news-video.mp4`
- Sem som, sem música e sem narração
- Sem diretório de assets públicos, sem imagens externas e sem dependência de arquivos binários
- Visual construído apenas com React, CSS, gradientes, shapes e texto

## Como instalar

```bash
npm install
```

## Como abrir o Studio

```bash
npm run dev
```

O Remotion Studio abrirá a composição `NewsVideo` para pré-visualização e ajustes.

## Como renderizar localmente

```bash
npm run render
```

Após a renderização, o arquivo final estará em:

```text
out/final-news-video.mp4
```

## Como renderizar pelo GitHub Actions

1. Envie o projeto para um repositório no GitHub.
2. Acesse a aba **Actions**.
3. Abra o workflow **Render Remotion Video**.
4. Clique em **Run workflow**.
5. Aguarde a conclusão da execução.

O workflow também roda automaticamente em pushes para a branch `main`.

## Como baixar o vídeo

Após finalizar o workflow:

1. Abra a execução em **Actions**.
2. Vá até a seção **Artifacts**.
3. Baixe o artifact chamado **final-news-video**.
4. Dentro dele estará o arquivo `final-news-video.mp4`.

## Estrutura do projeto

```text
src/
├── index.ts
├── Root.tsx
├── compositions/
│   ├── NewsVideo.tsx
│   ├── Intro.tsx
│   ├── BrazilNews.tsx
│   ├── WorldNews.tsx
│   ├── Closing.tsx
├── components/
│   ├── AnimatedBackground.tsx
│   ├── NewsLogo.tsx
│   ├── NewsCard.tsx
│   ├── LowerThird.tsx
│   ├── BreakingBanner.tsx
├── data/
│   ├── news.json
```

## Conteúdo editorial

O roteiro cobre:

- Abertura: **Resumo das Notícias**
- Bloco Brasil: política, economia e segurança
- Bloco Mundo: geopolítica, emergência ambiental e saúde
- Encerramento com data e barra inferior temática

## Observações técnicas

- `src/index.ts` registra a root com `registerRoot(Root)`.
- `src/Root.tsx` registra a composição `NewsVideo` com `1080x1920`, `30fps` e `1350` frames.
- O projeto usa apenas CSS, gradientes, shapes e texto para o visual.
- Não há tags de imagem nem chamadas para arquivos visuais externos.
- A renderização é feita por Remotion via CLI e o GitHub Actions publica o MP4 como artifact.
