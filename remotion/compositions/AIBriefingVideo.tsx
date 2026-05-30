import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {ProgressBar} from '../components/ProgressBar';
import {CTA} from '../scenes/CTA';
import {Intro} from '../scenes/Intro';
import {NewsBlock, NewsBlockProps} from '../scenes/NewsBlock';
import {Outro} from '../scenes/Outro';
import {googleColors} from '../utils/videoConfig';

const newsBlocks: Array<NewsBlockProps & {from: number; duration: number}> = [
  {
    from: 120,
    duration: 150,
    kicker: 'Investimentos e mercado',
    emoji: '💸',
    label: 'Anthropic',
    title: 'Anthropic levanta US$ 65 bilhões',
    lines: ['Valuation: US$ 965 bilhões', 'Quase US$ 1 trilhão'],
    color: googleColors.blue,
    hashtags: ['#Anthropic', '#ClaudeAI', '#IA', '#Startups'],
  },
  {
    from: 270,
    duration: 150,
    kicker: 'Infraestrutura virou ouro',
    emoji: '🖥️',
    label: 'Dell',
    title: 'Dell cresce 757% em servidores para IA',
    lines: ['Data centers entram no centro da corrida', 'Infraestrutura virou o novo ouro da IA'],
    color: googleColors.green,
    hashtags: ['#Dell', '#DataCenter', '#AIInfrastructure'],
  },
  {
    from: 420,
    duration: 150,
    kicker: 'IA, governo e sociedade',
    emoji: '🗳️',
    label: 'TSE',
    title: 'Comissão permanente para IA nas eleições',
    lines: ['Eleições 2026 no radar', 'IA também entrou no jogo da democracia'],
    color: googleColors.yellow,
    hashtags: ['#TSE', '#Eleicoes2026', '#RegulacaoIA'],
  },
  {
    from: 570,
    duration: 150,
    kicker: 'Ética global',
    emoji: '🌍',
    label: 'Humano no centro',
    title: 'Papa e premiê do Canadá debatem ética na IA',
    lines: ['A discussão saiu do setor tech', 'Tecnologia precisa ser humana'],
    color: googleColors.red,
    hashtags: ['#EticaIA', '#HumanCenteredAI'],
  },
  {
    from: 720,
    duration: 180,
    kicker: 'Ferramentas dev + agentes',
    emoji: '🧑‍💻',
    label: 'Devtools',
    title: 'Codex, Hermes e Multica aceleram o stack',
    lines: ['Codex 0.135.0 • Hermes Agent v0.15.0', 'Multica v0.3.11', 'Mais performance, segurança e agentes'],
    color: googleColors.blue,
    hashtags: ['#OpenAI', '#Codex', '#DevTools', '#MCP'],
  },
  {
    from: 900,
    duration: 150,
    kicker: 'Ecossistema de agentes IA',
    emoji: '🕸️',
    label: 'Moltbook',
    title: 'Moltbook passa de 1,5 milhão de agentes',
    lines: ['Agentes deixando de ser demo', 'A internet dos agentes está nascendo'],
    color: googleColors.green,
    hashtags: ['#Moltbook', '#AgentesIA'],
  },
  {
    from: 1050,
    duration: 150,
    kicker: 'GEO e visibilidade para IA',
    emoji: '🔎',
    label: 'GEO',
    title: 'SEO está virando GEO',
    lines: ['Busca agora também é resposta gerada por IA', 'Marcas precisam aparecer nas respostas da IA'],
    color: googleColors.yellow,
    hashtags: ['#GEO', '#MarketingDigital', '#LLM', '#GovernancaIA'],
  },
];

export const AIBriefingVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: googleColors.dark}}>
      <Sequence from={0} durationInFrames={120}>
        <Intro />
      </Sequence>
      {newsBlocks.map((block) => (
        <Sequence key={`${block.kicker}-${block.from}`} from={block.from} durationInFrames={block.duration}>
          <NewsBlock {...block} />
        </Sequence>
      ))}
      <Sequence from={1200} durationInFrames={150}>
        <CTA />
      </Sequence>
      <Sequence from={1290} durationInFrames={60}>
        <Outro />
      </Sequence>
      <ProgressBar />
    </AbsoluteFill>
  );
};
