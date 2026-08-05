// i18n 工具：从 URL 解析语言、按语言取文案、生成本地化路径
import { ui, defaultLang, languages, type UIKey } from './ui';
import { LOCALES } from '../consts';

export type Lang = keyof typeof ui;

export { ui, defaultLang, languages };

// 从 URL 路径推断当前语言：/en/... 返回 en，其余返回默认 zh
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

// 返回当前语言的翻译函数，缺失 key 回退到默认语言
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// 生成相对本地化路径：zh -> /about，en -> /en/about
export function localizePath(path: string, lang: Lang = defaultLang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}

// 获取当前语言对应的对端语言（用于语言切换按钮）
export function getOtherLang(lang: Lang): Lang {
  return lang === 'zh' ? 'en' : 'zh';
}

// 生成交替语言路径（语言切换按钮 href）
export function getAltLangPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as 'zh' | 'en')) {
    segments.shift();
  }
  const rest = segments.length > 0 ? `/${segments.join('/')}` : '';
  return localizePath(rest === '' ? '/' : rest, targetLang);
}

// hreflang 完整 URL（用于 <link rel="alternate">）
export function getHrefLangUrl(pathname: string, lang: Lang, siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, '')}${localizePath(pathname === '/' ? '/' : pathname, lang)}`;
}
