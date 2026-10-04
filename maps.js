/* =========================================================================
   DICTIONNAIRE MULTILINGUE (Interface) — page Cartes
   ========================================================================= */
const BG_DICT = {
  siteUpdateLabel: { fr: "Mise à jour", en: "Update" },
  searchPlaceholder: { fr: "Rechercher une carte...", en: "Search for a map..." },
  resultsCount: { fr: "{n} résultats", en: "{n} results" },
  resultsCountSingular: { fr: "{n} résultat", en: "{n} result" },
  emptyList: { fr: "Aucune carte trouvée.", en: "No maps found." },
  bgTitle: { fr: "Cartes", en: "Battlegrounds" },
  bgNote: { fr: "Choisis une carte dans la liste, ou utilise la recherche ci-dessus.", en: "Choose a map from the list, or use the search above." },
  objectives: { fr: "Résumé de la carte", en: "Map Summary" },
  tips: { fr: "Conseils", en: "Tips" },
  guideVideos: { fr: "Vidéos guide", en: "Guide Videos" },
  minimap: { fr: "Minimap", en: "Minimap" },
  noVideosYet: { fr: "Aucune vidéo pour le moment.", en: "No videos yet." },
  noTipsYet: { fr: "Aucun conseil pour le moment.", en: "No tips yet." },
  selectPrompt: { fr: "Sélectionne une carte dans la liste.", en: "Select a map from the list." },
  prevVideo: { fr: "Vidéo précédente", en: "Previous video" },
  nextVideo: { fr: "Vidéo suivante", en: "Next video" },
  // Deux formulations : au bureau l'infobulle suit le survol, au tactile il faut toucher.
  hotspotHint: { fr: "survole un point pour le détail", en: "hover a marker for details" },
  hotspotHintTouch: { fr: "touche un point pour le détail", en: "tap a marker for details" },
  pointsList: { fr: "Points d'intérêt", en: "Points of interest" },
  noPointsYet: { fr: "Aucun point posé sur cette carte pour le moment.", en: "No markers placed on this map yet." },
  zoomHint: { fr: "clique la carte pour l'agrandir", en: "click the map to enlarge it" },
  closeZoom: { fr: "Fermer l'agrandissement", en: "Close the enlarged map" },
  legendFilter: { fr: "Afficher uniquement ce type sur la carte", en: "Show only this type on the map" },
};

const bgTactile = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* =========================================================================
   POINTS D'INTÉRÊT SUR LA MINIMAP
   Chaque point est posé en pourcentage de la largeur et de la hauteur de l'image :
   il suit donc la minimap quelle que soit la taille de l'écran, sans recalcul.
   Le type ne sert qu'à l'affichage — pastille, couleur, légende.
   ========================================================================= */
const BG_HOTSPOT_TYPES = {
  // L'ordre des clés est celui de la légende et des groupes de la liste : l'objectif
  // définit la carte, il passe donc devant les camps.
  objectif: {
    label: { fr: "Objectif", en: "Objective" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  },
  camp: {
    label: { fr: "Camp de mercenaires", en: "Mercenary camp" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 3 20h18L12 4z"/><path d="M12 4v16"/></svg>',
  },
  tour: {
    label: { fr: "Tour de guet", en: "Watch tower" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/></svg>',
  },
  fontaine: {
    label: { fr: "Fontaine de soins", en: "Healing fountain" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  },
  autre: {
    label: { fr: "Autre", en: "Other" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 16.5v-5"/><path d="M12 8h.01"/></svg>',
  },
};
// Un type inconnu (donnée écrite à la main, type retiré plus tard) retombe sur "autre"
// plutôt que de casser le rendu de toute la fiche.
const bgHotspotType = (cle) => BG_HOTSPOT_TYPES[cle] || BG_HOTSPOT_TYPES.autre;
const bgHotspotTypeKey = (cle) => (BG_HOTSPOT_TYPES[cle] ? cle : 'autre');
// Une position hors de l'image, ou absente, sortirait le point de la minimap.
const bgHotspotsOf = (b) => (b && Array.isArray(b.hotspots) ? b.hotspots : [])
  .filter(h => h && Number.isFinite(h.x) && Number.isFinite(h.y));

/* ── Utilities (copie autonome des helpers d'app.js, page indépendante) ── */
const getInitialLangBg = () => {
  const saved = localStorage.getItem('eowea_lang');
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return (browserLang && browserLang.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
};

const bgState = { search: '', bgId: null, lang: getInitialLangBg() };

const $bg = id => document.getElementById(id);
const bgEls = {
  siteTitle: $bg('siteTitle'), headerNav: $bg('headerNav'), socials: $bg('socials'), siteUpdate: $bg('siteUpdate'),
  langSwitcher: $bg('langSwitcher'), searchInput: $bg('searchInput'), resultsCount: $bg('resultsCount'),
  bgTitle: $bg('bgTitle'), bgNote: $bg('bgNote'), bgList: $bg('bgList'), detailView: $bg('detailView'),
  tooltipPortal: $bg('tooltipPortal'),
};

const bgLoc = (val) => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[bgState.lang] !== undefined ? val[bgState.lang] : (val['fr'] || '')) : (val || '');
function bgT(key, vars) {
  let s = bgLoc(BG_DICT[key]) || '';
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
}
const bgEsc = (v) => String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function bgNormalize(text) { return String(text||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
function bgInitials(text) { return String(text||'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
// Même règle que navSlug() dans app.js : les deux pages doivent produire le même
// identifiant pour un lien donné, sinon ses clics seraient comptés deux fois.
function bgNavSlug(lien) {
  const brut = (lien && lien.label && lien.label.fr) || (lien && lien.label && lien.label.en) || (lien && lien.url) || 'lien';
  return bgNormalize(brut).replace(/ /g, '-') || 'lien';
}
function bgParseYouTubeId(i) { if(!i) return ''; const r=String(i).trim(); if(/^[a-zA-Z0-9_-]{11}$/.test(r)) return r; try { const u=new URL(r); if(u.hostname.includes('youtu.be')) return u.pathname.split('/').filter(Boolean)[0]||''; if(u.searchParams.get('v')) return u.searchParams.get('v')||''; const p=u.pathname.split('/').filter(Boolean); if(['embed','shorts','live'].includes(p[0])) return p[1]||''; } catch{} return ''; }
const bgYtThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;

const BG_ICONS = {
  twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v11l-4 4h-4l-2 2H7v-2H4V3zm2 2v9h3v3l3-3h3l3-3V5H6zm4 2h2v5h-2V7zm5 0h2v5h-2V7z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-1-.9-1.8-1.9-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.5c-1 .2-1.7 1-1.9 2C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 .9 1.8 1.9 2 1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5c1-.2 1.7-1 1.9-2 .4-1.6.4-5 .4-5zm-13 3.5v-7l6 3.5-6 3.5z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.6L6.4 22H3.3l7.3-8.3L1 2h6.2l4.3 6L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.335-.403.78-.553 1.125a18.27 18.27 0 0 0-5.669 0A11.18 11.18 0 0 0 9.109 3a19.736 19.736 0 0 0-4.434 1.369C1.873 8.583 1.113 12.692 1.493 16.743a19.9 19.9 0 0 0 5.43 2.757c.44-.6.833-1.233 1.172-1.897-.646-.245-1.262-.55-1.838-.907.154-.112.304-.229.45-.349 3.545 1.664 7.39 1.664 10.893 0 .148.12.298.237.45.349-.577.358-1.195.664-1.842.909.34.662.733 1.295 1.174 1.895a19.86 19.86 0 0 0 5.432-2.757c.446-4.698-.761-8.77-3.497-12.374ZM8.02 14.323c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.848 2.153-1.925 2.153Zm7.96 0c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.838 2.153-1.925 2.153Z"/></svg>',
  kofi: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 5H5a2 2 0 0 0-2 2v3a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7V9h1a2 2 0 1 0 0-4h-4zm1 4v1a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7h13a1 1 0 0 1 1 1v1zm2-2h-1V5h1a1 1 0 1 1 0 2z"/></svg>',
};

function bgVisible() { return BATTLEGROUNDS.filter(b => b.enabled !== false); }
function bgFiltered() {
  const q = bgNormalize(bgState.search);
  return bgVisible()
    .filter(b => !q || bgNormalize(b.name?.fr).includes(q) || bgNormalize(b.name?.en).includes(q))
    .sort((a,b) => bgLoc(a.name).localeCompare(bgLoc(b.name), bgState.lang, {sensitivity:'base'}));
}
function bgCurrent() { return BATTLEGROUNDS.find(b => b.id === bgState.bgId && b.enabled !== false) || null; }

function renderBgHeader() {
  if (STREAMER_CONFIG.logoImage) {
    bgEls.siteTitle.innerHTML = `<img class="site-logo-img" src="${bgEsc(STREAMER_CONFIG.logoImage)}" alt="${bgEsc(bgLoc(STREAMER_CONFIG.siteTitle))}" />`;
  } else {
    bgEls.siteTitle.textContent = bgLoc(STREAMER_CONFIG.siteTitle);
  }
  bgEls.socials.innerHTML = STREAMER_CONFIG.socials.map(s=>`<a class="social-link" data-network="${s.icon}" href="${s.url}" target="_blank" rel="noreferrer">${BG_ICONS[s.icon]||''}<span>${s.label}</span></a>`).join('');
  bgEls.headerNav.innerHTML = (STREAMER_CONFIG.navLinks || [])
    .filter(l => l.enabled !== false && l.showOnBattlegrounds !== false)
    .map(l => {
      const pageCourante = location.pathname.split('/').pop() || 'index.html';
      const cible = (l.url || '').replace(/^\.?\//, '') || 'index.html';
      const isActive = cible === pageCourante;
      return `<a class="header-nav-link${isActive ? ' active' : ''}" href="${bgEsc(l.url || '#')}" data-nav-id="${bgEsc(bgNavSlug(l))}"${l.newTab ? ' target="_blank" rel="noreferrer"' : ''}>${bgEsc(bgLoc(l.label))}</a>`;
    }).join('');
  renderBgSiteUpdate();
}

// Bandeau "Mise à jour du site", identique à celui de la page Builds (même donnée partagée).
function renderBgSiteUpdate() {
  if (!bgEls.siteUpdate) return;
  const u = STREAMER_CONFIG.siteUpdate || {};
  const date = u.enabled === false ? '' : bgLoc(u.date);
  if (!date) { bgEls.siteUpdate.innerHTML = ''; bgEls.siteUpdate.hidden = true; return; }
  bgEls.siteUpdate.hidden = false;
  bgEls.siteUpdate.innerHTML = `<span class="site-update-label">${bgT('siteUpdateLabel')}</span>`
    + `<span class="site-update-date">${bgEsc(date)}</span>`;
}

function renderBgList() {
  const list = bgFiltered();
  bgEls.resultsCount.textContent = list.length > 1 ? bgT('resultsCount', {n:list.length}) : bgT('resultsCountSingular', {n:list.length});
  if (!list.length) {
    bgEls.bgList.innerHTML = `<div class="empty-state">${bgT('emptyList')}</div>`;
    return;
  }
  bgEls.bgList.innerHTML = list.map(b => `
    <button class="hero-link${b.id===bgState.bgId?' active':''}" type="button" data-bg-id="${b.id}">
        <div class="portrait-wrapper" style="position: relative; flex-shrink: 0; display: flex;">
            <div class="portrait" data-fallback="${bgEsc(bgInitials(bgLoc(b.name)))}">
                <img src="${b.image||''}" alt="${bgEsc(bgLoc(b.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
            </div>
        </div>
        <div class="hero-meta">
            <div class="hero-name-row">
                <div class="hero-name">${bgEsc(bgLoc(b.name))}</div>
            </div>
        </div>
    </button>`).join('');
}

function bgBuildYoutubeCarouselMarkup(videos) {
  const slides = (videos||[])
    .map(v => ({ v, id: bgParseYouTubeId(v?.youtubeId||v?.youtubeUrl||v?.url||'') }))
    .filter(x => x.id);
  if (!slides.length) return '';
  const isTouchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const linkAttrs = isTouchLike ? '' : ' target="_blank" rel="noopener noreferrer"';
  const slidesHtml = slides.map((x, idx) => `
    <div class="combo-slide${idx===0?' is-active':''}" data-index="${idx}">
      <div class="combo-slide-title">${bgEsc(bgLoc(x.v.title) || '')}</div>
      <a class="combo-stage guide-stage-link" data-yt-id="${x.id}" href="https://www.youtube.com/watch?v=${x.id}"${linkAttrs}>
        <img class="combo-poster" src="${bgYtThumb(x.id)}" alt="${bgEsc(bgLoc(x.v.title))}" loading="lazy" />
        <span class="youtube-play"></span>
      </a>
    </div>
  `).join('');
  const navHtml = slides.length > 1 ? `
    <button class="combo-nav prev" type="button" aria-label="${bgT('prevVideo')}">&#10094;</button>
    <button class="combo-nav next" type="button" aria-label="${bgT('nextVideo')}">&#10095;</button>
    <div class="combo-dots">${slides.map((_,idx)=>`<span class="combo-dot${idx===0?' is-active':''}" data-dot="${idx}"></span>`).join('')}</div>
  ` : '';
  return `<div class="combo-carousel">${slidesHtml}${navHtml}</div>`;
}

function bindBgCarousel() {
  bgEls.detailView.querySelectorAll('.combo-carousel').forEach(carousel => {
    if (carousel.dataset.bound) return;
    carousel.dataset.bound = '1';
    const slides = [...carousel.querySelectorAll('.combo-slide')];
    const dots = [...carousel.querySelectorAll('.combo-dot')];
    const prevBtn = carousel.querySelector('.combo-nav.prev');
    const nextBtn = carousel.querySelector('.combo-nav.next');
    let active = 0;
    function goTo(idx) {
      if (idx < 0) idx = slides.length - 1;
      if (idx >= slides.length) idx = 0;
      if (idx === active) return;
      slides[active].classList.remove('is-active');
      dots[active]?.classList.remove('is-active');
      active = idx;
      slides[active].classList.add('is-active');
      dots[active]?.classList.add('is-active');
    }
    prevBtn?.addEventListener('click', () => goTo(active - 1));
    nextBtn?.addEventListener('click', () => goTo(active + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(Number(d.dataset.dot))));

    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      slides.forEach(slide => {
        const link = slide.querySelector('.guide-stage-link[data-yt-id]');
        if (!link) return;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          bgOpenYoutubeForceApp(link.dataset.ytId);
        });
      });
    }
  });
}

function bgOpenYoutubeForceApp(id) {
  const fallbackUrl = `https://www.youtube.com/watch?v=${id}`;
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) {
    window.location.href = `intent://www.youtube.com/watch?v=${id}#Intent;package=com.google.android.youtube;scheme=https;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end;`;
    return;
  }
  if (/iPhone|iPad|iPod/i.test(ua)) {
    let appOpened = false;
    const onHide = () => { appOpened = true; };
    document.addEventListener('visibilitychange', onHide, { once: true });
    window.location.href = `vnd.youtube://www.youtube.com/watch?v=${id}`;
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onHide);
      if (!appOpened) window.location.href = fallbackUrl;
    }, 1200);
    return;
  }
  window.location.href = fallbackUrl;
}

/* Les marqueurs sont produits par une seule fonction : la minimap de la fiche et son
   agrandissement en affichent exactement les mêmes, aux mêmes pourcentages. */
function bgMarqueursHtml(b) {
  return bgHotspotsOf(b).map((h, i) => {
    const t = bgHotspotType(h.type);
    const titre = bgLoc(h.name) || bgLoc(t.label);
    return `<button class="bg-hotspot" type="button" data-hotspot="${i}" data-type="${bgEsc(bgHotspotTypeKey(h.type))}"
        style="left:${h.x}%;top:${h.y}%" title="${bgEsc(titre)}" aria-label="${bgEsc(titre)}"></button>`;
  }).join('');
}

/* La légende ne montre que les types réellement posés sur cette carte : une entrée
   « Fontaine de soins » sur une carte qui n'en a pas ne renseignerait personne.
   Ordonnée comme les groupes de la liste, et non selon l'ordre de saisie des points.
   Produite une seule fois pour la fiche et pour l'agrandissement. */
function bgLegendeHtml(b) {
  const points = bgHotspotsOf(b);
  const types = Object.keys(BG_HOTSPOT_TYPES)
    .filter(k => points.some(h => bgHotspotTypeKey(h.type) === k));
  if (!types.length) return '';
  return `<div class="bg-hotspot-legend">${types.map(k =>
    `<button class="bg-legend-item" type="button" data-type="${k}" aria-pressed="false" title="${bgEsc(bgT('legendFilter'))}"><span class="bg-legend-dot" aria-hidden="true"></span>${bgEsc(bgLoc(BG_HOTSPOT_TYPES[k].label))}</button>`
  ).join('')}</div>`;
}

/* Le même contenu que les infobulles, mais en clair dans la page : lisible au doigt
   sans viser un marqueur de 32 pixels, parcourable au clavier, et présent dans le
   document pour qui cherche un camp par son nom. */
/* Les instances d'un même point (les six tributs, les deux camps de siège…) partagent
   souvent la même description : listées une par une, la liste répétait le même pavé
   six fois. Elles sont réunies en une seule fiche, la description une fois, et chaque
   emplacement en pastille. Un point sans description reste seul. */
function bgRegrouperPoints(items) {
  const paquets = [];
  const parTexte = new Map();
  for (const it of items) {
    const texte = bgLoc(it.h.description);
    let p = texte ? parTexte.get(texte) : null;
    if (!p) {
      p = { texte, items: [] };
      if (texte) parTexte.set(texte, p);
      paquets.push(p);
    }
    p.items.push(it);
  }
  return paquets;
}

// Le titre est la partie commune des noms (« Camp de siège — géants »), les pastilles
// ce qui les distingue (« haut gauche », « bas droite »). La coupe se fait à un
// séparateur, jamais au milieu d'un mot.
function bgTitreEtLieux(noms, defaut) {
  if (noms.length === 1) return { titre: noms[0] || defaut, lieux: [] };
  let commun = noms[0];
  for (const n of noms) {
    let k = 0;
    while (k < commun.length && k < n.length && commun[k] === n[k]) k++;
    commun = commun.slice(0, k);
  }
  let coupe;
  if (noms.some(n => n.length === commun.length)) {
    coupe = commun.length;   // un nom est entièrement contenu dans les autres
  } else {
    const tiret = commun.lastIndexOf(' — '), virgule = commun.lastIndexOf(', ');
    coupe = Math.max(tiret >= 0 ? tiret + 3 : -1, virgule >= 0 ? virgule + 2 : -1);
    if (coupe < 0) coupe = commun.lastIndexOf(' ') + 1;
  }
  const titre = commun.slice(0, coupe).replace(/[\s,—-]+$/, '');
  let lieux = noms.map(n => n.slice(coupe).trim());
  // Noms identiques (trois « Coffre au trésor ») : on les numérote.
  if (lieux.every(l => !l)) lieux = noms.map((n, k) => String(k + 1));
  lieux = titre ? lieux.map((l, k) => l || String(k + 1)) : noms;
  // Même emplacement plusieurs fois (trois fontaines « côté gauche ») : on les numérote,
  // sinon trois pastilles identiques allument trois marqueurs différents.
  const total = {}, vus = {};
  lieux.forEach(l => { total[l] = (total[l] || 0) + 1; });
  lieux = lieux.map(l => total[l] > 1 ? `${l} ${(vus[l] = (vus[l] || 0) + 1)}` : l);
  return { titre: titre || defaut, lieux };
}

function bgPointsListHtml(b) {
  const points = bgHotspotsOf(b);
  if (!points.length) return `<div class="empty-state">${bgT('noPointsYet')}</div>`;

  // Regroupés par type, dans l'ordre de la légende. Repliée, la liste tient en trois ou
  // quatre lignes au lieu d'une par point ; on n'ouvre que la famille qui intéresse.
  // Et une seule ouverture suffit pour lire : le détail est dans le groupe, pas derrière
  // un second dépli par point.
  const groupes = Object.keys(BG_HOTSPOT_TYPES)
    .map(cle => ({
      cle,
      t: BG_HOTSPOT_TYPES[cle],
      items: points.map((h, i) => ({ h, i })).filter(({ h }) => bgHotspotTypeKey(h.type) === cle),
    }))
    .filter(g => g.items.length);

  // Tous les groupes repliés au départ : c'est ce qui garde la colonne compacte, et la
  // hauteur de la rangée est alors donnée par la carte, pas par la liste.
  return `<div class="point-list">${groupes.map(g => `
    <details class="point-group" data-type="${g.cle}">
      <summary>
        <span class="point-badge">${g.t.icon}</span>
        <span class="point-group-name">${bgEsc(bgLoc(g.t.label))}</span>
        <span class="point-group-count">${g.items.length}</span>
        <span class="point-chevron" aria-hidden="true">▸</span>
      </summary>
      <div class="point-group-body">
        ${bgRegrouperPoints(g.items).map(p => {
          const { titre, lieux } = bgTitreEtLieux(p.items.map(({ h }) => bgLoc(h.name)), bgLoc(g.t.label));
          const indices = p.items.map(({ i }) => i).join(' ');
          const images = [...new Set(p.items.map(({ h }) => h.image).filter(Boolean))];
          return `
            <article class="point-item" data-points="${indices}">
              <div class="point-item-head">
                <h4 class="point-name">${bgEsc(titre)}</h4>
                ${p.items.length > 1 ? `<span class="point-item-count">×${p.items.length}</span>` : ''}
              </div>
              ${lieux.length ? `<div class="point-locs">${lieux.map((l, k) =>
                `<span class="point-loc" data-points="${p.items[k].i}">${bgEsc(l)}</span>`).join('')}</div>` : ''}
              ${p.texte ? `<p>${bgEsc(p.texte)}</p>` : ''}
              ${images.length ? `<div class="point-shots">${images.map(src =>
                `<div class="point-shot"><img src="${bgEsc(src)}" alt="${bgEsc(titre)}" loading="lazy" onerror="this.parentNode.remove()" /></div>`).join('')}</div>` : ''}
            </article>`;
        }).join('')}
      </div>
    </details>`).join('')}</div>`;
}

function renderBgDetail() {
  // La liste est reconstruite avec toutes ses familles repliées : plus rien à filtrer.
  bgTypesFiltres.clear();
  const b = bgCurrent();
  if (!b) {
    bgEls.detailView.innerHTML = `<div class="empty-state">${bgT('selectPrompt')}</div>`;
    return;
  }
  const tipsHtml = (b.tips||[]).length
    ? `<ul class="bullet-list">${b.tips.map(tip=>`<li>${bgEsc(bgLoc(tip))}</li>`).join('')}</ul>`
    : `<p>${bgEsc(bgT('noTipsYet'))}</p>`;
  const videoMarkup = bgBuildYoutubeCarouselMarkup(b.guideVideos);
  const videoSectionHtml = videoMarkup
    ? `<section class="guide-video-section">${videoMarkup}</section>`
    : `<div class="empty-state">${bgT('noVideosYet')}</div>`;

  const points = bgHotspotsOf(b);
  const marqueursHtml = bgMarqueursHtml(b);
  const legendeHtml = bgLegendeHtml(b);
  const indication = bgT(bgTactile ? 'hotspotHintTouch' : 'hotspotHint');
  const mentions = [bgEsc(bgT('minimap')) + ' — ' + bgEsc(bgLoc(b.name))];
  if (points.length) mentions.push(bgEsc(indication));
  mentions.push(bgEsc(bgT('zoomHint')));
  const minimapHtml = b.minimapImage
    ? `<section class="bg-minimap-section">
        <div class="bg-minimap-frame">
          <div class="bg-minimap-stage is-zoomable">
            <img src="${bgEsc(b.minimapImage)}" alt="${bgEsc(bgT('minimap'))} — ${bgEsc(bgLoc(b.name))}" />
            ${marqueursHtml}
          </div>
        </div>
        <div class="bg-minimap-caption">${mentions.join(' · ')}</div>
        ${legendeHtml}
      </section>`
    : '';

  bgEls.detailView.innerHTML = `
    <section class="hero-header">
      <div class="detail-portrait" data-fallback="${bgEsc(bgInitials(bgLoc(b.name)))}">
        <img src="${b.image||''}" alt="${bgEsc(bgLoc(b.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
      </div>
      <div>
        <h2 class="detail-title">${bgEsc(bgLoc(b.name))}</h2>
        <p class="detail-headline">${bgEsc(bgLoc(b.headline))}</p>
      </div>
    </section>
    <section class="bg-map-row${minimapHtml ? '' : ' no-map'}">
      <article class="card">
        <div class="card-head">${bgT('pointsList')}${points.length ? ` <span class="card-count">(${points.length})</span>` : ''}</div>
        <div class="card-body">${bgPointsListHtml(b)}</div>
      </article>
      ${minimapHtml}
    </section>
    <section class="meta-grid">
      <article class="card">
        <div class="card-head">${bgT('objectives')}</div>
        <div class="card-body"><p>${bgEsc(bgLoc(b.objectives))}</p></div>
      </article>
      <article class="card">
        <div class="card-head">${bgT('guideVideos')}</div>
        <div class="card-body">${videoSectionHtml}</div>
      </article>
    </section>
    <!-- Les conseils occupent seuls leur rangée : c'est la carte dont la longueur varie
         le plus, et à côté du résumé elle l'étirait pour rien. Sur toute la largeur,
         la liste passe sur deux colonnes plutôt que de s'allonger. -->
    <section class="meta-grid one-col">
      <article class="card tips-card">
        <div class="card-head">${bgT('tips')}</div>
        <div class="card-body">${tipsHtml}</div>
      </article>
    </section>
  `;
  bindBgCarousel();
}

/* ── Infobulle d'un point de la minimap ───────────────────────────────────
   Même mécanique que les sorts sur la page Builds : un portail fixe posé sur le
   body, une bulle ancrée au marqueur avec sa flèche, qui bascule au-dessous
   quand il n'y a plus de place au-dessus. Survol au bureau, tap au tactile.
   Le contenu est relu depuis la carte courante à chaque ouverture : la langue a
   pu changer entre-temps. */
let bgTipTrigger = null;
let bgTipHideTimer = null;
let bgTipRaf = 0;

/* Le lien entre la carte et la liste joue dans les deux sens : survoler un marqueur
   surligne son entrée, survoler une entrée allume son marqueur. Sans ça, on ne sait
   pas lequel des onze points on est en train de lire. */
function bgEchoListe(index) {
  bgEls.detailView.querySelectorAll('.point-item.is-echo, .point-loc.is-echo').forEach(e => e.classList.remove('is-echo'));
  if (index == null) return;
  // La fiche qui contient ce point, et sa pastille s'il partage la fiche avec d'autres.
  bgEls.detailView.querySelectorAll('.point-item[data-points~="' + index + '"], .point-loc[data-points~="' + index + '"]')
    .forEach(e => e.classList.add('is-echo'));
}

function bgHideHotspotTip(immediat = false) {
  clearTimeout(bgTipHideTimer);
  const fermer = () => {
    bgEls.tooltipPortal.innerHTML = '';
    bgEls.tooltipPortal.setAttribute('aria-hidden', 'true');
    bgTipTrigger = null;
    bgEchoListe(null);
  };
  // Le petit délai laisse passer un aller-retour de souris entre deux marqueurs
  // voisins sans faire clignoter la bulle.
  immediat ? fermer() : (bgTipHideTimer = setTimeout(fermer, 40));
}

function bgPositionHotspotTip(declencheur, bulle) {
  if (!declencheur || !bulle) return;
  const r = declencheur.getBoundingClientRect();
  const marge = 12;
  let gauche = r.left + r.width / 2 - bulle.offsetWidth / 2;
  gauche = Math.max(marge, Math.min(gauche, innerWidth - bulle.offsetWidth - marge));
  let haut = r.top - bulle.offsetHeight - 10;
  let placement = 'top';
  if (haut < marge) { haut = r.bottom + 10; placement = 'bottom'; }
  haut = Math.max(marge, Math.min(haut, innerHeight - bulle.offsetHeight - marge));
  // La flèche reste en face du marqueur même quand la bulle a été ramenée dans l'écran.
  const fleche = Math.max(16, Math.min(r.left + r.width / 2 - gauche, bulle.offsetWidth - 16));
  bulle.style.left = gauche + 'px';
  bulle.style.top = haut + 'px';
  bulle.dataset.placement = placement;
  bulle.style.setProperty('--arrow-left', fleche + 'px');
}

function bgQueueHotspotTipPosition() {
  if (!bgTipTrigger || bgTipRaf) return;
  bgTipRaf = requestAnimationFrame(() => {
    bgTipRaf = 0;
    const bulle = document.getElementById('activeHotspotTip');
    if (bgTipTrigger && bulle) bgPositionHotspotTip(bgTipTrigger, bulle);
  });
}

function bgShowHotspotTip(declencheur) {
  if (!declencheur) return;
  clearTimeout(bgTipHideTimer);
  // Déjà ouverte sur ce marqueur : la reconstruire ferait clignoter l'image.
  if (bgTipTrigger === declencheur && bgEls.tooltipPortal.getAttribute('aria-hidden') === 'false') return;

  const b = bgCurrent();
  if (!b) return;
  const h = bgHotspotsOf(b)[Number(declencheur.dataset.hotspot)];
  if (!h) return;

  bgTipTrigger = declencheur;
  bgEchoListe(declencheur.dataset.hotspot);
  const t = bgHotspotType(h.type);
  const titre = bgLoc(h.name) || bgLoc(t.label);
  const texte = bgLoc(h.description);
  // La capture garde ses proportions : un ratio imposé rognerait un bout d'écran de jeu.
  const media = h.image
    ? `<div class="hotspot-shot"><img src="${bgEsc(h.image)}" alt="${bgEsc(titre)}" onerror="this.parentNode.remove()" /></div>`
    : '';

  bgEls.tooltipPortal.innerHTML =
    `<div class="floating-tooltip hotspot-tip" id="activeHotspotTip">
       <div class="hotspot-kind" data-type="${bgEsc(bgHotspotTypeKey(h.type))}">${t.icon}<span>${bgEsc(bgLoc(t.label))}</span></div>
       <div class="floating-tooltip-title">${bgEsc(titre)}</div>
       ${texte ? `<div class="floating-tooltip-body">${bgEsc(texte)}</div>` : ''}
       ${media}
     </div>`;
  bgEls.tooltipPortal.setAttribute('aria-hidden', 'false');
  bgQueueHotspotTipPosition();
  // Une capture non encore chargée a une hauteur nulle : la bulle serait mal placée.
  const img = bgEls.tooltipPortal.querySelector('.hotspot-shot img');
  if (img && !img.complete) img.addEventListener('load', bgQueueHotspotTipPosition, { once: true });
}

/* Délégation sur le conteneur de la fiche, qui survit à ses re-rendus. Au tactile il
   n'y a pas de survol : le tap ouvre, un second tap sur le même point referme. */
(function bindBgHotspotTips() {
  const tactile = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  // Délégation sur le document, et non sur la fiche seule : les mêmes marqueurs
  // existent aussi dans l'agrandissement de la carte, qui vit hors de la fiche.
  const zone = document;

  if (!tactile) {
    zone.addEventListener('mouseover', (e) => {
      const m = e.target.closest('.bg-hotspot');
      if (m) bgShowHotspotTip(m);
    });
    zone.addEventListener('mouseout', (e) => {
      const m = e.target.closest('.bg-hotspot');
      if (!m) return;
      // Passer de l'icône au bord du bouton déclenche aussi mouseout : on ne ferme que
      // si le curseur a réellement quitté le marqueur.
      if (m.contains(e.relatedTarget)) return;
      bgHideHotspotTip();
    });
    zone.addEventListener('focusin', (e) => {
      const m = e.target.closest('.bg-hotspot');
      if (m) bgShowHotspotTip(m);
    });
    zone.addEventListener('focusout', (e) => {
      if (e.target.closest('.bg-hotspot')) bgHideHotspotTip();
    });
  }

  zone.addEventListener('click', (e) => {
    const m = e.target.closest('.bg-hotspot');
    if (!m) return;
    e.preventDefault();
    const dejaOuverte = bgTipTrigger === m && bgEls.tooltipPortal.getAttribute('aria-hidden') === 'false';
    dejaOuverte ? bgHideHotspotTip(true) : bgShowHotspotTip(m);
  });

  // Au tactile, un tap ailleurs referme — sinon la bulle resterait collée à l'écran.
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.bg-hotspot')) bgHideHotspotTip(true);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    // Échap ferme d'abord l'agrandissement s'il est ouvert, la bulle sinon.
    if (!bgCloseMapZoom()) bgHideHotspotTip(true);
  });
  window.addEventListener('resize', bgQueueHotspotTipPosition);
  window.addEventListener('scroll', bgQueueHotspotTipPosition, { passive: true, capture: true });
})();

/* ── Agrandissement de la carte ───────────────────────────────────────────
   Les minimaps font 5 000 à 8 000 pixels de large et s'affichent sur huit cents :
   le terrain y est illisible. Un clic ouvre l'image en grand, marqueurs compris —
   ils sont posés en pourcentage, ils suivent donc l'agrandissement sans calcul. */
function bgOpenMapZoom() {
  const b = bgCurrent();
  const overlay = document.getElementById('mapZoomOverlay');
  if (!b || !b.minimapImage || !overlay) return;
  overlay.innerHTML = `
    <button class="map-zoom-close" type="button" aria-label="${bgEsc(bgT('closeZoom'))}">✕</button>
    <div class="map-zoom-inner">
      <div class="bg-minimap-stage map-zoom-stage">
        <img src="${bgEsc(b.minimapImage)}" alt="${bgEsc(bgT('minimap'))} — ${bgEsc(bgLoc(b.name))}" />
        ${bgMarqueursHtml(b)}
      </div>
      <div class="bg-minimap-caption">${bgEsc(bgT('minimap'))} — ${bgEsc(bgLoc(b.name))}</div>
      ${bgLegendeHtml(b)}
    </div>`;
  overlay.classList.add('active');
  bgAppliquerFiltre();   // l'agrandissement montre la même sélection que la fiche
  overlay.querySelector('.map-zoom-close').focus();
}
// Renvoie true si elle avait bien quelque chose à fermer, pour que Échap sache
// s'il doit enchaîner sur l'infobulle.
function bgCloseMapZoom() {
  const overlay = document.getElementById('mapZoomOverlay');
  if (!overlay || !overlay.classList.contains('active')) return false;
  overlay.classList.remove('active');
  overlay.innerHTML = '';
  bgHideHotspotTip(true);
  return true;
}

(function bindBgMapZoom() {
  // Ouverture : un clic sur la carte de la fiche, mais pas sur un marqueur — celui-ci
  // a déjà son rôle.
  bgEls.detailView.addEventListener('click', (e) => {
    if (e.target.closest('.bg-hotspot')) return;
    if (!e.target.closest('.bg-minimap-stage.is-zoomable')) return;
    bgOpenMapZoom();
  });

  const overlay = document.getElementById('mapZoomOverlay');
  if (!overlay) return;
  overlay.addEventListener('click', (e) => {
    if (e.target.closest('.bg-hotspot')) return;
    if (e.target.closest('.bg-legend-item')) return;   // la légende filtre, elle ne ferme pas
    if (e.target.closest('.map-zoom-close')) { bgCloseMapZoom(); return; }
    // Tout ce qui n'est pas l'image ferme : le fond, mais aussi la marge, le bandeau
    // et la légende, qui ne sont pas interactifs.
    if (!e.target.closest('.map-zoom-stage')) bgCloseMapZoom();
  });
})();

/* Ouvrir une famille de points dans la liste, ou cliquer son type dans la légende,
   ne laisse sur la carte que les marqueurs de ce type : sur une carte à vingt points,
   c'est ce qui permet de retrouver « les camps » d'un coup d'œil. Plusieurs types se
   cumulent (camps + tours, par exemple). Liste et légende restent synchronisées : une
   famille ouverte = un type choisi. Aucun type choisi = tous les marqueurs. */
const bgTypesFiltres = new Set();
function bgAppliquerFiltre() {
  const actif = bgTypesFiltres.size > 0;
  document.querySelectorAll('.bg-minimap-stage .bg-hotspot').forEach(m =>
    m.classList.toggle('is-filtered-out', actif && !bgTypesFiltres.has(m.dataset.type)));
  document.querySelectorAll('.bg-legend-item').forEach(l => {
    const choisi = bgTypesFiltres.has(l.dataset.type);
    l.classList.toggle('is-dim', actif && !choisi);
    l.classList.toggle('is-active', choisi);
    l.setAttribute('aria-pressed', String(choisi));
  });
}

// Ajoute ou retire un type de la sélection, et ouvre ou referme sa famille dans la liste.
function bgChoisirType(type) {
  if (bgTypesFiltres.has(type)) bgTypesFiltres.delete(type);
  else bgTypesFiltres.add(type);
  const groupe = bgEls.detailView.querySelector(`details.point-group[data-type="${type}"]`);
  if (groupe) groupe.open = bgTypesFiltres.has(type);
  bgHideHotspotTip(true);   // l'infobulle pourrait pointer sur un marqueur désormais masqué
  bgAppliquerFiltre();
}
document.addEventListener('click', (e) => {
  const item = e.target.closest('.bg-legend-item');
  if (item) bgChoisirType(item.dataset.type);
});
(function bindBgTypeFilter() {
  // « toggle » ne remonte pas : on l'écoute en phase de capture. Il se déclenche aussi
  // quand bgChoisirType ouvre la famille : la sélection est alors déjà à jour.
  bgEls.detailView.addEventListener('toggle', (e) => {
    const groupe = e.target;
    if (!groupe.matches || !groupe.matches('details.point-group')) return;
    const type = groupe.dataset.type;
    if (groupe.open === bgTypesFiltres.has(type)) return;
    if (groupe.open) bgTypesFiltres.add(type);
    else bgTypesFiltres.delete(type);
    bgHideHotspotTip(true);
    bgAppliquerFiltre();
  }, true);
})();

/* Survoler un point de la liste allume son marqueur sur la carte : c'est ce qui relie
   le texte à son emplacement, sans rien demander au lecteur. */
(function bindBgPointEcho() {
  // Une fiche porte les numéros de tous ses emplacements, une pastille le sien seul :
  // survoler la fiche allume tous ses marqueurs, survoler une pastille le seul concerné.
  let minuterie = null;
  let allumes = '';
  const cible = (el) => el && el.closest && el.closest('.point-loc, .point-item');
  const eteindre = () => {
    allumes = '';
    bgEls.detailView.querySelectorAll('.bg-hotspot.is-echo').forEach(m => m.classList.remove('is-echo'));
  };
  const allumer = (el) => {
    // Déjà allumés : on ne retouche à rien. Repasser la classe relancerait le battement
    // depuis le début à chaque fois que le curseur passe du titre au texte.
    if (el.dataset.points === allumes) return;
    clearTimeout(minuterie);
    eteindre();
    allumes = el.dataset.points;
    allumes.split(' ').forEach(i => {
      const m = bgEls.detailView.querySelector('.bg-hotspot[data-hotspot="' + i + '"]');
      if (m) m.classList.add('is-echo');
    });
  };

  bgEls.detailView.addEventListener('mouseover', (e) => {
    const el = cible(e.target);
    if (el) allumer(el);
  });
  bgEls.detailView.addEventListener('mouseout', (e) => {
    if (!cible(e.target)) return;
    // mouseout se déclenche aussi en passant d'un enfant à l'autre : tant que le curseur
    // reste dans une fiche, c'est mouseover qui choisit quoi allumer.
    if (cible(e.relatedTarget)) return;
    eteindre();
  });
  // Au tactile il n'y a pas de survol : un appui allume le marqueur le temps de le
  // repérer. Au bureau on ne branche rien — une minuterie éteindrait le marqueur alors
  // que le curseur est toujours sur le point.
  if (bgTactile) {
    bgEls.detailView.addEventListener('click', (e) => {
      const el = cible(e.target);
      if (!el) return;
      allumes = '';
      allumer(el);
      minuterie = setTimeout(eteindre, 1600);
    });
  }
})();

/* ── Adresse de la page ───────────────────────────────────────────────────
   Même mécanique que la page Builds : le fragment porte l'identifiant de la carte,
   posé en replaceState pour ne pas empiler une entrée d'historique à chaque clic.
   Les identifiants sont déjà des noms lisibles, d'où des liens du genre
   #comte-du-dragon, partageables tels quels. */
function bgLooseHashEncode(str) {
  // On n'échappe que ce qui casserait le fragment : espace, %, & et #.
  return String(str).replace(/[%&#\s]/g, c => encodeURIComponent(c));
}
// Nom réduit à un identifiant d'URL : accents retirés, ligatures développées,
// apostrophes supprimées plutôt que transformées en tiret (blackhearts-bay, pas
// blackheart-s-bay), le reste rassemblé par des tirets.
function bgSlugify(nom) {
  return String(nom || '')
    .replace(/[œŒ]/g, 'oe').replace(/[æÆ]/g, 'ae')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
// Le fragment suit la langue affichée : un lecteur anglais partage #cursed-hollow,
// un lecteur français #val-maudit. En français l'identifiant interne est déjà le slug
// voulu ; en anglais on le dérive du nom.
function bgHashFor(b) {
  if (bgState.lang === 'en') return bgSlugify(b.name?.en) || b.id;
  return b.id;
}
function bgUpdateHash() {
  const b = bgCurrent();
  // Sans carte sélectionnée, on retire le fragment plutôt que d'en laisser un mort.
  if (!b) { history.replaceState(null, '', location.pathname + location.search); return; }
  history.replaceState(null, '', '#' + bgLooseHashEncode(bgHashFor(b)));
}
function bgRestoreFromHash() {
  const brut = (location.hash || '').replace(/^#/, '');
  if (!brut) return false;
  let cherche;
  try { cherche = decodeURIComponent(brut).toLowerCase(); } catch (e) { return false; }
  // Les deux langues sont acceptées en lecture : un lien anglais ouvre la bonne carte
  // même chez un visiteur qui lit en français, et un ancien lien continue de marcher.
  const b = BATTLEGROUNDS.find(x => x.enabled !== false && (
    x.id.toLowerCase() === cherche ||
    bgSlugify(x.name?.en) === cherche ||
    bgSlugify(x.name?.fr) === cherche));
  if (!b) return false;
  bgState.bgId = b.id;
  return true;
}

function renderBgAll() {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === bgState.lang));
  bgEls.searchInput.placeholder = bgT('searchPlaceholder');
  bgEls.bgTitle.textContent = bgT('bgTitle');
  bgEls.bgNote.textContent = bgT('bgNote');
  renderBgHeader();
  renderBgList();
  renderBgDetail();
  bgUpdateHash();
}

bgEls.bgList.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-bg-id]');
  if (!btn) return;
  bgState.bgId = btn.dataset.bgId;
  renderBgAll();
});

let bgSearchTimeout;
bgEls.searchInput.addEventListener('input', (e) => {
  clearTimeout(bgSearchTimeout);
  bgSearchTimeout = setTimeout(() => {
    bgState.search = e.target.value;
    renderBgAll();
  }, 250);
});

bgEls.langSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  bgState.lang = btn.dataset.lang;
  localStorage.setItem('eowea_lang', bgState.lang);
  // Le popup vit hors de la fiche : sans ça, il resterait ouvert dans l'ancienne langue.
  bgHideHotspotTip(true);
  renderBgAll();
});

document.addEventListener('click', function(e) {
  const socials = document.getElementById('socials');
  if (socials && !socials.contains(e.target)) {
    socials.classList.remove('active');
  }
});

const bgBackToTopBtn = document.getElementById('backToTop');
if (bgBackToTopBtn) {
  window.addEventListener('scroll', () => {
    bgBackToTopBtn.classList.toggle('is-visible', window.scrollY > 300);
  });
  bgBackToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Un lien reçu avec un fragment ouvre directement la bonne fiche.
bgRestoreFromHash();
renderBgAll();

// replaceState n'émet pas hashchange : seules les modifications venues de l'extérieur
// arrivent ici — un lien collé dans la barre d'adresse, ou un retour vers la page.
window.addEventListener('hashchange', () => {
  if (!bgRestoreFromHash()) {
    // Fragment inconnu : on remet l'adresse en accord avec ce qui est affiché, plutôt
    // que de laisser dans la barre un lien qui ne mène pas à cette page.
    bgUpdateHash();
    return;
  }
  bgHideHotspotTip(true);
  renderBgAll();
});
