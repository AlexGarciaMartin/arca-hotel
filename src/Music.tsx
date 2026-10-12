import {useEffect, useState} from 'react';
import playlists from './playlists.json';
import es from './locales/es.json';
import en from './locales/en.json';

const storageKey = 'arca-reading-chapter';

export default function Music({lang}: {lang: 'es' | 'en'}) {
 const t = (lang === 'es' ? es : en).music;
 const [chapter, setChapter] = useState(() => {
  try {
   const saved = localStorage.getItem(storageKey);
   const value = saved === null ? 0 : Number(saved);
   return playlists.some(p => p.chapter === value) ? value : 0;
  } catch { return 0; }
 });
 const [connected, setConnected] = useState(false);
 const index = playlists.findIndex(p => p.chapter === chapter);
 const playlist = playlists[index];
 const label = (n: number) => n === 0 ? t.prologue : `${t.chapter} ${String(n).padStart(2, '0')}`;

 useEffect(() => {
  try { localStorage.setItem(storageKey, String(chapter)); }
  catch { /* Listening does not require browser storage. */ }
 }, [chapter]);

 return <section className="sound-room" aria-labelledby="sound-title">
  <div className="sound-content">
   <p className="eyebrow">ARCA-∅ / {t.eyebrow}</p>
   <h1 id="sound-title">{t.title}</h1>
   <p className="sound-intro">{t.intro}</p>
   <div className="sound-console">
    <div className="sound-selector">
     <button disabled={index === 0} onClick={() => setChapter(playlists[index - 1].chapter)} aria-label={t.previous}>←</button>
     <label><span>{t.reading}</span>
      <select value={chapter} onChange={e => setChapter(Number(e.target.value))} aria-label={t.select}>
       {playlists.map(p => <option value={p.chapter} key={p.id}>{label(p.chapter)}</option>)}
      </select>
     </label>
     <button disabled={index === playlists.length - 1} onClick={() => setChapter(playlists[index + 1].chapter)} aria-label={t.next}>→</button>
    </div>
    <p className="sound-current" role="status" aria-live="polite">{label(chapter)}</p>
    <div className="sound-player">
     {connected ? <iframe
      // Replacing this browsing context stops its audio before loading the next list.
      key={playlist.id}
      title={`${t.player}: ${label(chapter)}`}
      src={`https://open.spotify.com/embed/playlist/${playlist.id}?theme=0`}
      width="100%" height="352" style={{border: 0, borderRadius: 12}}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
     /> : <div className="sound-connect-wrap">
      <button className="sound-connect" onClick={() => setConnected(true)}>{t.load}<span aria-hidden="true">▷</span></button>
      <p className="sound-privacy">{t.privacy}</p>
     </div>}
    </div>
    <a className="sound-external" href={playlist.url} target="_blank" rel="noopener noreferrer">{t.open} ↗</a>
    <p className="sound-help">{t.help}</p>
   </div>
   <p className="sound-note">{t.note}</p>
  </div>
 </section>;
}
