import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

import logo from '@assets/logo.png';
import logoLine from '@assets/logo-line.png';
import product01 from './assets/product-01.jpg';
import product02 from './assets/product-02.jpg';
import product03 from './assets/product-03.jpg';
import product04 from './assets/product-04.jpg';
import product05 from './assets/product-05.jpg';
import product06 from './assets/product-06.jpg';
import product07 from './assets/product-07.jpg';
import colorSwatch from './assets/color-swatch.jpg';

export const design: DesignSystem = {
  palette: { bg: '#faf6ee', text: '#3a4249', accent: '#4a6b85' },
  fonts: {
    display: '"Noto Serif TC", serif',
    body: '"Noto Serif TC", serif',
  },
  typeScale: { hero: 150, body: 38 },
  radius: 14,
};

const blueSoft = '#c3d4de';
const blueMid = '#7a9bb3';
const tan = '#c9a876';
const creamDeep = '#f0e9db';
const inkSoft = '#6b747c';
const script = '"Caveat", cursive';

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;700&family=Caveat:wght@600&display=swap';
const FONT_LINK_ID = 'osd-webfont-brand-intro';
if (typeof document !== 'undefined') {
  let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = FONT_LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== FONT_HREF) link.href = FONT_HREF;
}

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
const HOLD: Keyframe[] = [{ opacity: 1 }, { opacity: 1 }];

export const transition: SlideTransition = {
  duration: 260,
  exit: { duration: 260, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 260,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const settleTransition: SlideTransition = {
  duration: 280,
  exit: { duration: 280, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 280,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
    ],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <span
      style={{
        position: 'absolute',
        right: 100,
        bottom: 56,
        fontSize: 22,
        color: tan,
        letterSpacing: '0.08em',
      }}
    >
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </span>
  );
};

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: `radial-gradient(ellipse at top, ${blueSoft} 0%, var(--osd-bg) 65%)`,
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 28,
    }}
  >
    <div style={{ fontSize: 28, color: tan, letterSpacing: '0.2em' }}>
      台灣手工繩結編織 · MACRAME
    </div>
    <img src={logo} style={{ width: 240, height: 'auto' }} />
    <div style={{ fontFamily: script, fontSize: 44, color: 'var(--osd-accent)' }}>
      Made with heart, crafted with care
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 700,
        lineHeight: 1.05,
        margin: 0,
      }}
    >
      心品職作
    </h1>
    <p style={{ fontSize: 38, color: inkSoft, letterSpacing: '0.05em', margin: 0 }}>
      用心連結．用手實現．讓美好成為日常
    </p>
  </div>
);
Cover.transition = settleTransition;

const BrandStory: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 240px',
    }}
  >
    <div
      style={{
        fontSize: 32,
        color: 'var(--osd-accent)',
        letterSpacing: '0.2em',
        marginBottom: 48,
      }}
    >
      品牌故事
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 88,
        fontWeight: 700,
        lineHeight: 1.3,
        margin: 0,
      }}
    >
      心品職作，是一針一結，慢慢織出來的品牌。
    </h2>
    <p style={{ fontSize: 36, color: inkSoft, lineHeight: 1.6, margin: '40px 0 0' }}>
      我們用繩結編織的手藝，做出隨身的日常小物，也接受完全客製化的討論。
    </p>
    <div style={{ fontFamily: script, fontSize: 40, color: tan, marginTop: 32 }}>
      沒有量產，只有用心。
    </div>
    <Footer />
  </div>
);

const Craftsmanship: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 140px',
      gap: 100,
    }}
  >
    <div style={{ flex: '0 0 720px' }}>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          margin: '0 0 40px',
          lineHeight: 1.2,
        }}
      >
        全手工，沒有量產
      </h2>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <li style={{ fontSize: 36, lineHeight: 1.5, color: inkSoft }}>
          一針一結，親手編織每件作品
        </li>
        <li style={{ fontSize: 36, lineHeight: 1.5, color: inkSoft }}>
          沒有機器量產，只有手作用心
        </li>
        <li style={{ fontSize: 36, lineHeight: 1.5, color: inkSoft }}>
          每件都是獨一無二的存在
        </li>
      </ul>
    </div>
    <img
      src={product07}
      style={{
        width: 630,
        height: 840,
        objectFit: 'cover',
        borderRadius: 'var(--osd-radius)',
        boxShadow: `0 24px 60px ${creamDeep}`,
      }}
    />
    <Footer />
  </div>
);

const GalleryCard = ({ src, label }: { src: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <img
      src={src}
      style={{
        width: 250,
        height: 250,
        objectFit: 'cover',
        borderRadius: 'var(--osd-radius)',
        boxShadow: `0 10px 24px ${creamDeep}`,
      }}
    />
    <p style={{ fontSize: 24, color: inkSoft, margin: 0 }}>{label}</p>
  </div>
);

const Gallery: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '110px 110px',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 700,
        margin: 0,
      }}
    >
      作品集
    </h2>
    <p style={{ fontSize: 26, color: tan, letterSpacing: '0.1em', margin: '16px 0 48px' }}>
      隨身配件・送禮客製紀念
    </p>
    <div style={{ display: 'flex', gap: 30 }}>
      <GalleryCard src={product01} label="藍白編織掛繩" />
      <GalleryCard src={product02} label="藍色花朵鑰匙圈" />
      <GalleryCard src={product03} label="三色花朵鑰匙圈" />
      <GalleryCard src={product04} label="花朵編織背帶" />
      <GalleryCard src={product05} label="雙色編織鑰匙圈" />
      <GalleryCard src={product06} label="粉藍花朵鑰匙圈" />
    </div>
    <Footer />
  </div>
);

const Step = ({ number, title, detail }: { number: string; title: string; detail: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: blueSoft,
          color: 'var(--osd-accent)',
          fontWeight: 700,
          fontSize: 24,
          flexShrink: 0,
        }}
      >
        {number}
      </span>
      <span style={{ fontSize: 36, fontWeight: 700 }}>{title}</span>
    </div>
    <p style={{ fontSize: 28, color: inkSoft, margin: '0 0 0 64px' }}>{detail}</p>
  </div>
);

const Customization: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 140px',
      gap: 100,
    }}
  >
    <div style={{ flex: '0 0 760px' }}>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 64,
          fontWeight: 700,
          margin: '0 0 16px',
        }}
      >
        客製化怎麼談？
      </h2>
      <p style={{ fontSize: 28, color: tan, letterSpacing: '0.06em', margin: '0 0 56px' }}>
        從一次好好的討論開始
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Step number="1" title="私訊討論需求" detail="告訴我們用途與喜歡的風格" />
        <Step number="2" title="選色定案" detail="依色卡挑選喜歡的顏色與尺寸" />
        <Step number="3" title="手工製作交件" detail="一針一結完成，拍照確認後寄出" />
      </div>
    </div>
    <img
      src={colorSwatch}
      style={{
        width: 640,
        height: 480,
        objectFit: 'cover',
        borderRadius: 'var(--osd-radius)',
        boxShadow: `0 24px 60px ${creamDeep}`,
      }}
    />
    <Footer />
  </div>
);

const Contact: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 28,
    }}
  >
    <div style={{ fontSize: 28, color: inkSoft, letterSpacing: '0.1em' }}>
      客製化詢問・商品問題
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 90,
        fontWeight: 700,
        margin: 0,
      }}
    >
      歡迎與我們聊聊
    </h2>
    <div style={{ fontFamily: script, fontSize: 40, color: 'var(--osd-accent)' }}>
      Let's create something together
    </div>
    <div
      style={{
        marginTop: 20,
        padding: '20px 56px',
        borderRadius: 999,
        background: '#06c755',
        color: '#fff',
        fontSize: 32,
        letterSpacing: '0.05em',
      }}
    >
      加入 LINE 好友
    </div>
    <img
      src={logoLine}
      style={{ width: 40, height: 40, marginTop: 44, filter: 'invert(0.4)' }}
    />
    <p style={{ fontSize: 22, color: inkSoft, margin: 0 }}>
      © 2026 心品職作 XinPin Zhizuo
    </p>
  </div>
);

export const meta: SlideMeta = {
  title: '心品職作 品牌介紹',
  createdAt: '2026-09-27T18:26:47.687Z',
};

export default [Cover, BrandStory, Craftsmanship, Gallery, Customization, Contact] satisfies Page[];
