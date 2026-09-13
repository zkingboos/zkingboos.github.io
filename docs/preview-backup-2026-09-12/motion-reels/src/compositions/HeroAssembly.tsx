import React from 'react';
import {
  Easing,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { CrtOverlay } from '../shared/CrtOverlay';

export const HeroAssembly: React.FC = () => {
  const rawFrame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // Normalização precisa: se a composição rodar a 60fps, o frame lógico avança a cada meio frame (0.5),
  // garantindo interpolação sub-frame ultra-suave a 60 quadros por segundo sem alterar o tempo (16s).
  const frame = rawFrame * (30 / fps);

  // =========================================================================
  // TRANSIÇÕES ESCURAS & VINHETA DINÂMICA
  // =========================================================================
  const appleEase = Easing.bezier(0.16, 1, 0.3, 1);

  // Vinheta extra inicial (começa bem escura e dramática no centro e bordas, abrindo nos primeiros 45 frames)
  const initialVignetteStrength = interpolate(frame, [0, 45], [1, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const take1FadeIn = interpolate(frame, [0, 24], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const endFadeOut = interpolate(frame, [455, 480], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Master black apenas no início e no fim
  const masterBlackOverlay = Math.max(take1FadeIn, endFadeOut);

  // =========================================================================
  // TRANSIÇÃO DISSOLVE / CROSS-FADE TAKE 1 -> TAKE 2 (Frames 166 - 180)
  // Cross-fade ágil e impactante sincronizado com a aceleração do texto
  // =========================================================================
  const take1DissolveOpacity = interpolate(frame, [168, 178], [1, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const take2DissolveOpacity = interpolate(frame, [166, 178], [0, 1], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const take1DissolveBlur = interpolate(frame, [168, 178], [0, 8], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const take2DissolveBlur = interpolate(frame, [166, 180], [8, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Brilho especular com corte rápido e impacto na transição
  const transitionFlash = interpolate(frame, [169, 174, 180], [0, 0.45, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // =========================================================================
  // FASE 1: O GANCHO DE IMPACTO (0s - 6.0s)
  // Tipografia editorial: Archivo Black + Instrument Serif Itálico (Hive Media style)
  // =========================================================================
  // FASE 1: O GANCHO DE IMPACTO (0s - 6.0s)
  // Efeito Typing ("Software, feito da") + Seleção Google Docs com Mouse em "forma certa."
  // =========================================================================
  const text1Full = "Software,";
  const text2Full = "feito da";
  const text3Full = "forma certa.";

  // 1. Typing Linha 1: "Software," (frames 6 - 22)
  const line1Chars = Math.min(text1Full.length, Math.max(0, Math.floor((frame - 6) / 1.7)));
  const typedText1 = text1Full.slice(0, line1Chars);
  const isTyping1 = frame >= 6 && frame < 22;

  // 2. Typing Linha 2: "feito da" (frames 22 - 36)
  const line2Chars = Math.min(text2Full.length, Math.max(0, Math.floor((frame - 22) / 1.7)));
  const typedText2 = text2Full.slice(0, line2Chars);
  const isTyping2 = frame >= 22 && frame < 36;

  // 3. Typing Linha 3: "forma certa." (frames 36 - 52)
  const line3Chars = Math.min(text3Full.length, Math.max(0, Math.floor((frame - 36) / 1.3)));
  const typedText3 = text3Full.slice(0, line3Chars);
  const isTyping3 = frame >= 36 && frame < 52;

  // Cursor piscante de digitação (alterna a cada 6 frames)
  const isCaretBlinking = (frame % 8) < 5;

  // 4. Efeito de Seleção Google Docs com Mouse em "forma certa." (frames 52 - 76)
  // Mouse surge suavemente e pousa no início da palavra (frames 52 - 56)
  const mouseEntranceX = interpolate(frame, [52, 56], [35, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const mouseEntranceY = interpolate(frame, [52, 56], [110, 50], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Arraste de seleção da esquerda para a direita (frames 56 - 70)
  const selectionProgress = interpolate(frame, [56, 70], [0, 100], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Posição calculada do cursor do mouse
  const mouseX = frame < 56 ? mouseEntranceX : selectionProgress;
  const mouseY = frame < 56 ? mouseEntranceY : 50;

  // Opacidade do cursor do mouse (surge no frame 52 e some suavemente nos frames 70 - 78)
  const mouseOpacity = interpolate(frame, [52, 55, 71, 78], [0, 1, 1, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subida suave do título principal "Software, feito da forma certa."
  // Fica centralizado no meio da tela até o frame 68, e entre 68 e 92 desliza para cima (+96px -> 0px) para dar fit aos subtítulos
  const take1MainShiftY = interpolate(frame, [68, 92], [96, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtítulo Linha 1: "O seu negócio não precisa de mais código." (frames 76 - 98)
  const sub1Y = interpolate(frame, [76, 98], [22, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const sub1Opacity = interpolate(frame, [76, 96], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const sub1Blur = interpolate(frame, [76, 96], [6, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Subtítulo Linha 2: "Precisa de engenharia de verdade." (frames 96 - 118)
  const sub2Y = interpolate(frame, [96, 118], [22, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const sub2Opacity = interpolate(frame, [96, 116], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const sub2Blur = interpolate(frame, [96, 116], [6, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Animação do underline branco debaixo de "VERDADE" (SEM passar no ponto .):
  // Inicia na PRIMEIRA fonte (frames 102 a 116) desenhando suavemente de 0% a 100%
  // Permanece 100% travado em TODAS as trocas seguintes de fonte sem reiniciar
  const underlineWidth = interpolate(frame, [102, 116], [0, 100], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Ciclo dinâmico com menos fontes e maior tempo de permanência (delay de 10 frames / ~333ms por fonte):
  // 0: Archivo (Frames 96-116: entrada e desenho do underline 0 -> 100%)
  // 1: JetBrains Mono (Frames 117-126: 10 frames / 333ms)
  // 2: Special Elite (Frames 127-136: 10 frames / 333ms)
  // 3: Instrument Serif Itálico (Frames 137-146: 10 frames / 333ms)
  // 4: Black Ops One (Frames 147-156: 10 frames / 333ms)
  // 5: Archivo (Frames 157-168: 12 frames até a transição do Take 2, travado na fonte de "Software, feito da")
  let sub2Phase = 0;
  if (frame >= 157) sub2Phase = 5;
  else if (frame >= 147) sub2Phase = 4;
  else if (frame >= 137) sub2Phase = 3;
  else if (frame >= 127) sub2Phase = 2;
  else if (frame >= 117) sub2Phase = 1;
  else sub2Phase = 0;

  // Flash tátil suave de virada de fonte no frame de transição de cada estilo (117, 127, 137, 147, 157)
  const isTransitionFrame =
    frame === 117 || frame === 127 || frame === 137 || frame === 147 || frame === 157;
  const isAfterTransitionFrame =
    frame === 118 || frame === 128 || frame === 138 || frame === 148 || frame === 158;
  const sub2FlashBrightness = isTransitionFrame ? 1.35 : isAfterTransitionFrame ? 1.12 : 1;
  const sub2FlickerOpacity = isTransitionFrame ? 0.92 : 1;

  // Proporções óticas rigorosamente calibradas para formatos radicalmente distintos e reconhecíveis:
  // (Monospace Hacker, Máquina de Escrever Vintage, Serif Editorial Itálico, Stencil Militar, Archivo Brand Anchor)
  // cada fonte com fontSize e letterSpacing ajustados para manter cap-height (~23px) e largura (~160px) uniformes no "VERDADE".
  const sub2FontConfigs: React.CSSProperties[] = [
    // 0: Archivo (Base inicial perfeitamente harmonizada com "PRECISA DE ENGENHARIA DE", underline 0 -> 100%)
    { fontFamily: '"Archivo", sans-serif', fontSize: '32px', fontWeight: 900, letterSpacing: '-0.03em' },
    // 1: JetBrains Mono (Hacker / Terminal Monospace)
    { fontFamily: '"JetBrains Mono", monospace', fontSize: '28px', fontWeight: 800, letterSpacing: '-0.03em' },
    // 2: Special Elite (Máquina de Escrever / Typewriter Vintage)
    { fontFamily: '"Special Elite", cursive, monospace', fontSize: '31px', fontWeight: 400, letterSpacing: '-0.01em' },
    // 3: Instrument Serif (Editorial de Alta Costura / Itálico Elegante)
    { fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', fontSize: '38px', fontWeight: 400, letterSpacing: '0.02em' },
    // 4: Black Ops One (Stencil Militar / Blindado Pesado)
    { fontFamily: '"Black Ops One", cursive, sans-serif', fontSize: '28px', fontWeight: 400, letterSpacing: '-0.02em' },
    // 5: Archivo Itálico (FINAL ANCHOR - Mesma fonte sólida de "Software, feito da", porém em itálico dinâmico e marcante)
    { fontFamily: '"Archivo", sans-serif', fontStyle: 'italic', fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em' },
  ];

  // Saída suave e unificada de todos os textos do Take 1 (frames 168 - 178)
  const hookExitOpacity = interpolate(frame, [168, 178], [1, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const hookExitY = interpolate(frame, [168, 178], [0, -20], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const hookExitBlur = interpolate(frame, [168, 178], [0, 8], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // =========================================================================
  // FASE 2: MONTAGEM DO HERO (Frames 175 - 480 / 5.8s - 16.0s)
  // Progressive disclosure em 3 estágios:
  // Estágio 1: Avatar sozinho centralizado no meio da tela (+225px)
  // Estágio 2: Avatar sobe (+110px) e José Gabriel + Cargo entram no meio da tela
  // Estágio 3: Conjunto superior sobe para 0px e Bio + Botão surgem embaixo
  // =========================================================================
  // 1. Barra superior
  const topBarY = interpolate(frame, [176, 196], [-25, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const topBarOpacity = interpolate(frame, [176, 194], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const topBarBlur = interpolate(frame, [176, 194], [6, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // 2. Avatar Photo
  const avatarScale = interpolate(frame, [178, 198], [0.85, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const avatarOpacity = interpolate(frame, [178, 196], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const avatarGlowPulse = Math.sin(frame / 14) * 10 + 32;

  // Deslocamento vertical relativo do Avatar no Estágio 1 (move de +115px para 0px nos frames 198-216)
  const avatarExtraShiftY = interpolate(frame, [198, 216], [115, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Deslocamento vertical do bloco superior [Avatar + Nome + Cargo] do Estágio 2 para o Estágio 3
  // Sobe suavemente para 0px nos frames 250-268 para dar espaço para a Bio entrar muito mais cedo
  const upperGroupShiftY = interpolate(frame, [250, 268], [110, 0], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 3. Nome "José Gabriel" (surge nos frames 204 - 222)
  const nameY = interpolate(frame, [204, 222], [26, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const nameOpacity = interpolate(frame, [204, 220], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const nameBlur = interpolate(frame, [204, 220], [8, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Deslizar do nome para a esquerda para revelar o badge "AKA zkingboos" (frames 218 - 236)
  const badgeRevealProgress = interpolate(frame, [218, 236], [0, 1], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // 110px centraliza perfeitamente o nome "José Gabriel" antes do badge surgir
  const nameSlideOffset = interpolate(badgeRevealProgress, [0, 1], [110, 0]);

  // 4. Badge AKA (surge deslizando suavemente para a direita conforme o nome abre espaço)
  const badgeScale = interpolate(badgeRevealProgress, [0, 1], [0.75, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const badgeOpacity = interpolate(badgeRevealProgress, [0.15, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const badgeX = interpolate(badgeRevealProgress, [0, 1], [-25, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const badgeBlur = interpolate(badgeRevealProgress, [0, 1], [8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // 5. Cargo "Engenheiro de Software" (surge logo após o badge começar a revelar, frames 226 - 244)
  const titleY = interpolate(frame, [226, 244], [26, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleOpacity = interpolate(frame, [226, 242], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleBlur = interpolate(frame, [226, 242], [8, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // 6. Troca dinâmica da fonte de "Engenheiro de Software" para Instrument Serif Itálico (frames 244 - 260)
  const fontSwapProgress = interpolate(frame, [244, 260], [0, 1], {
    easing: appleEase,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 7. Bio (surge no Estágio 3 muito mais cedo, frames 256 - 276 / ~8.5s)
  const bioY = interpolate(frame, [256, 276], [24, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const bioOpacity = interpolate(frame, [256, 274], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const bioBlur = interpolate(frame, [256, 274], [6, 0], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // 8. CTA (surge no Estágio 3, frames 274 - 296 / ~9.1s)
  const ctaScale = interpolate(frame, [274, 296], [0.9, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const ctaOpacity = interpolate(frame, [274, 294], [0, 1], { easing: appleEase, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  // Seta do CTA com oscilação suave, 100% sincronizada com o frame rate
  const ctaArrowY = frame >= 284 ? Math.sin((frame - 284) / 4.5) * 4 : 0;

  // Entrada geral do Hero
  const heroEnterOpacity = interpolate(frame, [172, 188], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div className="relative w-[1080px] h-[1920px] bg-black text-zinc-100 flex flex-col justify-between p-14 select-none overflow-hidden font-sans">
      
      {/* ================= BACKGROUND VIDEOS ================= */}
      {/* Take 1 Video (rua chuvosa): toca dos frames 0 ao 180 com início a partir do segundo 2 (eliminando o corte seco) */}
      <Sequence from={0} durationInFrames={Math.round(180 * (fps / 30))}>
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
          style={{
            filter: `blur(${take1DissolveBlur}px)`,
            opacity: take1DissolveOpacity,
          }}
        >
          <OffthreadVideo
            src={staticFile('take1.mp4')}
            startFrom={Math.round(2 * fps)}
            className="w-full h-full object-cover filter brightness-[0.62] contrast-[1.18]"
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 pointer-events-none" />
        </div>
      </Sequence>

      {/* Take 2 Video (fluido cósmico): Começa em cross-dissolve no frame 166 e toca até o fim */}
      <Sequence from={Math.round(166 * (fps / 30))} durationInFrames={Math.round(314 * (fps / 30))}>
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
          style={{
            filter: `blur(${take2DissolveBlur}px)`,
            opacity: take2DissolveOpacity,
          }}
        >
          <OffthreadVideo
            src={staticFile('take2.mp4')}
            className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.12]"
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 pointer-events-none" />
        </div>
      </Sequence>

      {/* Flash Especular Suave na Transição Dissolve */}
      {transitionFlash > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-35 select-none"
          style={{
            opacity: transitionFlash,
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(9,166,214,0.5) 45%, rgba(0,0,0,0) 75%)',
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* Vinheta perimetral profunda — alcança muito mais o centro com contraste cinematográfico */}
      <div
        className="absolute inset-0 pointer-events-none z-10 select-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.98) 85%, #000000 100%)',
        }}
      />

      {/* Vinheta extra inicial — começa bem mais forte e escura no início do vídeo */}
      {initialVignetteStrength > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-11 select-none"
          style={{
            opacity: initialVignetteStrength,
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.92) 40%, #000000 70%, #000000 100%)',
          }}
        />
      )}

      {/* Master Black Overlay para revelação no escuro */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-40 select-none"
        style={{ opacity: masterBlackOverlay }}
      />

      <CrtOverlay opacity={0.16} />

      {/* ================= FASE 1: O GANCHO DE IMPACTO (0s - 6.0s) ================= */}
      {frame < 180 && (
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-10 pointer-events-none overflow-visible"
          style={{
            opacity: hookExitOpacity,
            transform: `translateY(${hookExitY + take1MainShiftY}px)`,
            filter: `blur(${hookExitBlur}px)`,
          }}
        >
          <div className="space-y-4 max-w-[960px] w-full flex flex-col items-center">
            
            {/* Linha 1: "Software," com efeito de typing e cursor piscante */}
            <div className="font-archivo text-8xl sm:text-9xl font-black text-white tracking-[-0.04em] leading-[0.93] [text-shadow:_0_8px_40px_rgba(0,0,0,0.95)]">
              <div className="relative inline-block">
                <span className="invisible select-none pointer-events-none">Software,</span>
                <span className="absolute left-0 top-0 text-white whitespace-nowrap flex items-baseline">
                  <span>{typedText1}</span>
                  {isTyping1 && (
                    <span
                      className="inline-block w-[6px] h-[0.7em] bg-[#09a6d6] ml-2 align-baseline shadow-[0_0_15px_rgba(9,166,214,0.9)] rounded-sm"
                      style={{ opacity: isCaretBlinking ? 1 : 0 }}
                    />
                  )}
                </span>
              </div>
            </div>

            {/* Linha 2: "feito da" com efeito de typing e cursor piscante */}
            <div className="font-archivo text-8xl sm:text-9xl font-black text-white tracking-[-0.04em] leading-[0.93] [text-shadow:_0_8px_40px_rgba(0,0,0,0.95)]">
              <div className="relative inline-block">
                <span className="invisible select-none pointer-events-none">feito da</span>
                <span className="absolute left-0 top-0 text-white whitespace-nowrap flex items-baseline">
                  <span>{typedText2}</span>
                  {isTyping2 && (
                    <span
                      className="inline-block w-[6px] h-[0.7em] bg-[#09a6d6] ml-2 align-baseline shadow-[0_0_15px_rgba(9,166,214,0.9)] rounded-sm"
                      style={{ opacity: isCaretBlinking ? 1 : 0 }}
                    />
                  )}
                </span>
              </div>
            </div>

            {/* Linha 3: "forma certa." com efeito de typing + Seleção Google Docs com Mouse Cursor */}
            <div className="font-serif italic font-normal text-[7.5rem] sm:text-[8.5rem] text-white tracking-[-0.02em] leading-[0.95] [text-shadow:_0_8px_40px_rgba(0,0,0,0.95)]">
              <div className="relative inline-block">
                <span className="invisible select-none pointer-events-none">forma certa.</span>

                {/* Camada de Seleção estilo Google Docs / MacOS */}
                {selectionProgress > 0 && (
                  <span
                    className="absolute top-[8%] bottom-[6%] left-0 bg-[#2563eb]/45 border-r-[3px] border-[#60a5fa] shadow-[0_0_20px_rgba(37,99,235,0.45)] rounded-[2px] pointer-events-none z-10"
                    style={{ width: `${selectionProgress}%` }}
                  />
                )}

                {/* Texto digitado */}
                <span className="absolute left-0 top-0 text-white whitespace-nowrap flex items-baseline z-20">
                  <span>{typedText3}</span>
                  {isTyping3 && (
                    <span
                      className="inline-block w-[5px] h-[0.7em] bg-[#09a6d6] ml-2 align-baseline shadow-[0_0_15px_rgba(9,166,214,0.9)] rounded-sm"
                      style={{ opacity: isCaretBlinking ? 1 : 0 }}
                    />
                  )}
                </span>

                {/* Mouse Cursor selecionando da esquerda para a direita */}
                {mouseOpacity > 0 && (
                  <div
                    className="absolute z-30 pointer-events-none"
                    style={{
                      left: `${mouseX}%`,
                      top: `${mouseY}%`,
                      opacity: mouseOpacity,
                      transform: 'translate(-5px, -3px)',
                    }}
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.9))',
                      }}
                    >
                      <path
                        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.63-4.63c.12-.12.28-.18.44-.18h6.42c.45 0 .67-.54.35-.85L5.85 2.85c-.32-.31-.85-.09-.85.36z"
                        fill="#ffffff"
                        stroke="#0f172a"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

              </div>
            </div>

            {/* Subtítulo Linha 1 */}
            <div className="pt-10 max-w-[920px] mx-auto">
              <p
                className="text-zinc-400 text-3xl sm:text-4xl font-light tracking-[-0.01em] leading-snug [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.8)]"
                style={{
                  transform: `translateY(${sub1Y}px)`,
                  opacity: sub1Opacity,
                  filter: `blur(${sub1Blur}px)`,
                }}
              >
                O seu negócio não precisa de mais código.
              </p>
            </div>

            {/* Linha 2 do Subtítulo: "PRECISA DE ENGENHARIA DE VERDADE." com Kinetic Typography Shuffle EXCLUSIVAMENTE na palavra "VERDADE" */}
            <div
              className="pt-4 flex justify-center items-center w-full"
              style={{
                transform: `translateY(${sub2Y}px)`,
                opacity: sub2Opacity,
                filter: `blur(${sub2Blur}px)`,
              }}
            >
              <div
                className="text-white uppercase leading-none whitespace-nowrap [text-shadow:_0_0_35px_rgba(255,255,255,0.45),_0_4px_20px_rgba(0,0,0,0.95)] flex items-baseline justify-center font-archivo font-black text-[32px] tracking-[-0.03em]"
              >
                <span>PRECISA DE ENGENHARIA DE&nbsp;</span>
                <span
                  className="relative inline-block text-white"
                  style={{
                    ...sub2FontConfigs[sub2Phase],
                    filter: `brightness(${sub2FlashBrightness})`,
                    opacity: sub2FlickerOpacity,
                  }}
                >
                  VERDADE
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full pointer-events-none"
                    style={{ width: `${underlineWidth}%` }}
                  />
                </span>
                <span>.</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= FASE 2: MONTAGEM COMPLETA DO HERO (5.8s - 16.0s) ================= */}
      <div
        className="relative z-20 w-full h-full flex flex-col justify-between"
        style={{ opacity: heroEnterOpacity }}
      >
        {/* 1. BARRA SUPERIOR (HEADER COM CONTATOS COMPLETOS) */}
        <div>
          <div
            className="w-full flex items-center justify-between text-sm font-mono border-b border-zinc-800/80 pb-5 pt-2"
            style={{
              transform: `translateY(${topBarY}px)`,
              opacity: topBarOpacity,
              filter: `blur(${topBarBlur}px)`,
            }}
          >
            {/* Contatos à esquerda */}
            <div className="flex items-center gap-3.5 text-zinc-300">
              <span className="text-zinc-100 font-semibold tracking-tight">
                josegmelo.dev@gmail.com
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">
                in/josegabrielma
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-[#09a6d6] font-medium">
                zkingboos.github.io
              </span>
            </div>

            {/* Status à direita */}
            <div className="flex items-center gap-2.5 text-emerald-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-zinc-200">Disponível Globalmente</span>
            </div>
          </div>

          {/* 14 ANOS DE EXPERIÊNCIA CENTRALIZADO NO MEIO DA TELA APÓS A LINHA DO HEADER (SEM O DOT) */}
          <div
            className="w-full flex justify-center pt-8 pb-1"
            style={{
              transform: `translateY(${topBarY}px)`,
              opacity: topBarOpacity,
              filter: `blur(${topBarBlur}px)`,
            }}
          >
            <div className="inline-flex items-center gap-3 px-7 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/70 text-base font-mono text-zinc-200 tracking-wider uppercase shadow-xl backdrop-blur-md">
              <span className="font-semibold text-white">14 Anos de Experiência</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-300">Engenharia de Software</span>
            </div>
          </div>
        </div>

        {/* 2. CONTEÚDO PRINCIPAL DO HERO (TELA CHEIA) */}
        <div className="flex-1 flex flex-col justify-center items-center text-center w-full px-6 space-y-12 my-auto">
          
          {/* BLOCO SUPERIOR: AVATAR + NOME/CARGO COM TRANSIÇÃO PROGRESSIVA */}
          <div
            className="w-full flex flex-col items-center space-y-12"
            style={{
              transform: `translateY(${upperGroupShiftY}px)`,
            }}
          >
            {/* AVATAR COM ANEL DE LUZ CIANO */}
            <div
              className="relative"
              style={{
                transform: `translateY(${avatarExtraShiftY}px) scale(${avatarScale})`,
                opacity: avatarOpacity,
              }}
            >
              <div
                className="absolute -inset-4 rounded-full blur-2xl opacity-75 pointer-events-none transition-all"
                style={{
                  background: 'radial-gradient(circle, #09a6d6 0%, rgba(9, 166, 214, 0) 70%)',
                  boxShadow: `0 0 ${avatarGlowPulse}px rgba(9, 166, 214, 0.75)`,
                }}
              />
              <img
                src="https://avatars.githubusercontent.com/u/42500187?v=4"
                alt="José Gabriel"
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-zinc-800/90 bg-zinc-950/80 shadow-2xl"
              />
            </div>

            {/* NOME & BADGE AKA */}
            <div className="space-y-4 w-full flex flex-col items-center">
              <div
                className="flex items-center justify-center gap-5 flex-nowrap"
                style={{
                  transform: `translateX(${nameSlideOffset}px)`,
                }}
              >
                <h1
                  className="text-7xl sm:text-8xl font-bold font-display text-white tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.95)] shrink-0 whitespace-nowrap"
                  style={{
                    transform: `translateY(${nameY}px)`,
                    opacity: nameOpacity,
                    filter: `blur(${nameBlur}px)`,
                  }}
                >
                  José Gabriel
                </h1>

                <span
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-lg font-mono text-zinc-300 shadow-lg shrink-0 whitespace-nowrap"
                  style={{
                    transform: `translateX(${badgeX}px) scale(${badgeScale})`,
                    opacity: badgeOpacity,
                    filter: `blur(${badgeBlur}px)`,
                  }}
                >
                  <span className="text-[#09a6d6] font-bold">AKA</span>
                  <span className="text-zinc-100 font-bold">zkingboos</span>
                </span>
              </div>

              {/* CARGO: ENGENHEIRO DE SOFTWARE */}
              {/* Transição dinâmica para a fonte do "forma certa" (Instrument Serif Itálico) logo após assentar */}
              <div
                className="relative h-20 w-full flex items-center justify-center pt-1"
                style={{
                  transform: `translateY(${titleY}px)`,
                  opacity: titleOpacity,
                  filter: `blur(${titleBlur}px)`,
                }}
              >
                {/* Brilho suave cinematográfico durante o morph da tipografia */}
                {fontSwapProgress > 0 && fontSwapProgress < 1 && (
                  <div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10"
                    style={{
                      opacity: Math.sin(fontSwapProgress * Math.PI) * 0.7,
                      filter: 'blur(22px)',
                      background: 'radial-gradient(ellipse at 50% 50%, rgba(9, 166, 214, 0.45) 0%, rgba(255, 255, 255, 0.2) 35%, transparent 70%)',
                    }}
                  />
                )}

                {/* Versão 1: Archivo Sans sólido (visível durante a montagem das animações) */}
                <div
                  className="absolute font-archivo text-5xl sm:text-6xl font-bold tracking-tight text-zinc-200 [text-shadow:_0_4px_20px_rgba(0,0,0,0.95)]"
                  style={{
                    opacity: 1 - fontSwapProgress,
                    transform: `scale(${interpolate(fontSwapProgress, [0, 1], [1, 0.96])})`,
                    filter: `blur(${interpolate(fontSwapProgress, [0, 1], [0, 4])}px)`,
                    pointerEvents: fontSwapProgress >= 1 ? 'none' : 'auto',
                  }}
                >
                  Engenheiro de Software
                </div>

                {/* Versão 2: Instrument Serif Itálico (Fonte do "forma certa", revela mais cedo) */}
                <div
                  className="absolute font-serif italic font-normal text-6xl sm:text-7xl text-white tracking-[-0.01em] leading-none [text-shadow:_0_4px_30px_rgba(255,255,255,0.45),_0_2px_15px_rgba(0,0,0,0.95)]"
                  style={{
                    opacity: fontSwapProgress,
                    transform: `scale(${interpolate(fontSwapProgress, [0, 1], [1.04, 1])})`,
                    filter: `blur(${interpolate(fontSwapProgress, [0, 1], [4, 0])}px)`,
                    pointerEvents: fontSwapProgress <= 0 ? 'none' : 'auto',
                  }}
                >
                  Engenheiro de Software
                </div>
              </div>
            </div>
          </div>

          {/* BLOCO INFERIOR: BIO + BOTÃO DE CTA COM TRANSIÇÃO PROGRESSIVA */}
          <div className="w-full flex flex-col items-center space-y-12">
            {/* BIO RESUMIDA EM PORTUGUÊS */}
            <div
              className="max-w-[920px] px-2"
              style={{
                transform: `translateY(${bioY}px)`,
                opacity: bioOpacity,
                filter: `blur(${bioBlur}px)`,
              }}
            >
              <p className="text-zinc-200 text-2xl sm:text-3xl leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)] font-light">
                Engenheiro autodidata com foco em otimização de performance, redução de custos e infraestruturas on-premise &amp; cloud com Go.
              </p>
            </div>

            {/* BOTÃO DE CTA: ENTRE EM CONTATO */}
            <div
              className="pt-4 w-full flex justify-center"
              style={{
                transform: `scale(${ctaScale})`,
                opacity: ctaOpacity,
              }}
            >
              <div className="group inline-flex items-center gap-3.5 px-10 py-5 rounded-2xl bg-[#070c16]/95 border-2 border-[rgba(9,166,214,0.5)] text-zinc-100 font-mono text-xl font-semibold backdrop-blur-xl shadow-[0_6px_35px_rgba(0,0,0,0.85),0_0_35px_rgba(9,166,214,0.4)]">
                <span className="tracking-tight text-white font-medium text-2xl">
                  Entre em Contato
                </span>
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    transform: `translateY(${ctaArrowY}px)`,
                  }}
                >
                  <svg
                    className="w-6 h-6 text-[#09a6d6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. BARRA DE RODAPÉ COM FRASE GLOBAL E @ DO USUÁRIO */}
        <div className="w-full flex items-center justify-between border-t border-zinc-800/80 pt-6 font-mono text-base text-zinc-400">
          <div className="tracking-wide text-zinc-400">
            Building ideas around the world.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold bg-zinc-900/80 border border-zinc-700/80 px-4 py-1.5 rounded-lg text-lg font-mono shadow-md">
              @eu.joseg
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
