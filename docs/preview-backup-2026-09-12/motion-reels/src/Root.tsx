import React from 'react';
import { Composition } from 'remotion';
import { HeroAssembly } from './compositions/HeroAssembly';
import { SiteShowcase } from './compositions/SiteShowcase';
import { Reel1Authority } from './compositions/Reel1Authority';
import { Reel2Visual } from './compositions/Reel2Visual';
import { Reel3Teaser } from './compositions/Reel3Teaser';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 🎯 PRINCIPAL: Gancho Snappy + Leitura Longa do Subtítulo + Take 2 Fluido Completo (16s / 480 frames a 30fps) */}
      <Composition
        id="HeroAssembly"
        component={HeroAssembly}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 🚀 ULTRA HD 2K 60FPS: 16s em 60 quadros por segundo fluidos (960 frames) */}
      <Composition
        id="HeroAssembly2K60"
        component={HeroAssembly}
        durationInFrames={960}
        fps={60}
        width={1080}
        height={1920}
      />

      {/* Showcase Geral do Design do Site com Scroll & Optical Blur (20s / 600 frames) */}
      <Composition
        id="SiteShowcase"
        component={SiteShowcase}
        durationInFrames={600}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Variações Anteriores */}
      <Composition
        id="Reel1Authority"
        component={Reel1Authority}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="Reel2Visual"
        component={Reel2Visual}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="Reel3Teaser"
        component={Reel3Teaser}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
