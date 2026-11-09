(function () {
  'use strict';

  const DEFAULT_FAVOURITES = [
    {
      id: 'grounded',
      name: 'Grounded',
      brand: 'Behr',
      code: 'T27-01',
      hex: '#565344',
      lrv: 9
    },
    {
      id: 'positive-energy',
      name: 'Positive Energy',
      brand: 'Behr',
      code: 'S370-1',
      hex: '#E1E2CF',
      lrv: 75
    },
    {
      id: 'fresh-dew',
      name: 'Fresh Dew',
      brand: 'Behr',
      code: 'M370-1',
      hex: '#F0F4E5',
      lrv: 89
    },
    {
      id: 'pale-green-tea',
      name: 'Pale Green Tea',
      brand: 'BeautiTone',
      code: 'C45-7-0425-0',
      hex: '#E2E2D0',
      lrv: 75
    }
  ];

  const TESTED_SWATCHES = [
    {
      id: 'frittata',
      name: 'Frittata',
      brand: 'Behr',
      code: 'M290-2',
      hex: '#FEEBC8',
      lrv: 85
    },
    {
      id: 'monogram',
      name: 'Monogram',
      brand: 'BeautiTone',
      code: 'D31-1-0424-3',
      hex: '#585546',
      lrv: 9
    },
    {
      id: 'jade-mist',
      name: 'Jade Mist',
      brand: 'Behr',
      code: 'M410-1',
      hex: '#D6E9D7',
      lrv: 78
    },
    {
      id: 'essence-of-sage',
      name: 'Essence of Sage',
      brand: 'BeautiTone',
      code: 'TR27-5-1',
      hex: '#DCE0CE',
      lrv: 74
    },
    {
      id: 'muse',
      name: 'Muse',
      brand: 'BeautiTone',
      code: 'TR26-4-3',
      hex: '#495445',
      lrv: 8
    },
    {
      id: 'environmental',
      name: 'Environmental',
      brand: 'Behr',
      code: 'PPU11-09',
      hex: '#B1B5A0',
      lrv: 45
    },
    {
      id: 'vanilla-paste',
      name: 'Vanilla Paste',
      brand: 'Behr',
      code: 'S290-1',
      hex: '#F3E7D3',
      lrv: 81
    },
    {
      id: 'thickened-cream',
      name: 'Thickened Cream',
      brand: 'Behr',
      code: 'M290-1',
      hex: '#FCF3DD',
      lrv: 90
    },
    {
      id: 'mozart',
      name: 'Mozart',
      brand: 'Behr',
      code: 'PPU15-02',
      hex: '#485480',
      lrv: 9
    },
    {
      id: 'denim-light',
      name: 'Denim Light',
      brand: 'Behr',
      code: 'PPU14-15',
      hex: '#B8CAD5',
      lrv: 57
    }
  ];

  // Official BeautiTone (Home Hardware) Paint Catalog for Two-Way Conversion & Color Wheel Pins
  const BEAUTITONE_CATALOG = [
    // Pale & Muted Greens / Sages
    { name: 'Pale Green Tea', code: 'C45-7-0425-0', hex: '#E2E2D0', family: 'Green & Sage' },
    { name: 'Translucent Vision', code: 'C42-7-0404-0', hex: '#E3E4CE', family: 'Green & Sage' },
    { name: 'Essence of Sage', code: 'TR27-5-1', hex: '#DCE0CE', family: 'Green & Sage' },
    { name: 'Hook And Line', code: 'C40-6-0412-0', hex: '#EFEEE1', family: 'Green & Sage' },
    { name: 'Garden Seat', code: 'C25-7-0789-0', hex: '#EAE6C6', family: 'Green & Sage' },
    { name: 'Le Printemps', code: 'C27-7-1553-0', hex: '#E9E4C9', family: 'Green & Sage' },
    { name: 'Forest Found', code: 'C25-6-0790-0', hex: '#DFDEB9', family: 'Green & Sage' },
    { name: 'Origin', code: 'C25-5-0791-0', hex: '#D6D3A5', family: 'Green & Sage' },
    { name: 'Sawgrass Cottage', code: 'C41-5-0399-0', hex: '#D4CDA1', family: 'Green & Sage' },
    { name: 'Just Beautiful', code: 'C27-5-1551-0', hex: '#CCC794', family: 'Green & Sage' },
    { name: 'Footie Pajamas', code: 'C25-4-0792-4', hex: '#C9C387', family: 'Green & Sage' },
    { name: 'Peppermint Twist', code: 'C34-6-1566-0', hex: '#C3DAC5', family: 'Green & Sage' },
    { name: 'Billy Boy', code: 'B14-01', hex: '#C8DED2', family: 'Green & Sage' },
    { name: 'Arbor Vitae', code: 'C45-5-0427-0', hex: '#B9BFA7', family: 'Green & Sage' },
    { name: 'Green Glass', code: 'C43-3-0751-0', hex: '#ACB890', family: 'Green & Sage' },
    { name: 'Keewatin', code: 'CC058-0', hex: '#A7C4B8', family: 'Green & Sage' },
    { name: 'French Mint', code: 'C34-4-1564-0', hex: '#95B397', family: 'Green & Sage' },
    // Mid & Deep Olives / Forest Greens
    { name: 'Cactus Valley', code: 'C43-2-0752-3', hex: '#889567', family: 'Olive & Forest' },
    { name: 'Motherland', code: 'C25-3-0793-4', hex: '#BBB463', family: 'Olive & Forest' },
    { name: 'Samantha Jade', code: 'C26-4-1543-4', hex: '#BEA864', family: 'Olive & Forest' },
    { name: 'The Goods', code: 'C25-2-0794-3', hex: '#A9A450', family: 'Olive & Forest' },
    { name: 'Olive You', code: 'C25-1-0795-3', hex: '#8C8C3C', family: 'Olive & Forest' },
    { name: 'Tropical Twist', code: 'C41-1-0403-3', hex: '#827643', family: 'Olive & Forest' },
    { name: 'Vegetarian', code: 'C45-2-0430-3', hex: '#797F63', family: 'Olive & Forest' },
    { name: 'Four Leaf Clover', code: 'C34-3-1563-4', hex: '#668A68', family: 'Olive & Forest' },
    { name: 'Old School', code: 'C42-1-0410-3', hex: '#686843', family: 'Olive & Forest' },
    { name: 'Hosta La Vista', code: 'C27-1-1547-3', hex: '#626231', family: 'Olive & Forest' },
    { name: 'Clover Patch', code: 'C45-1-0431-3', hex: '#575B45', family: 'Olive & Forest' },
    { name: 'Monogram', code: 'D31-1-0424-3', hex: '#585546', family: 'Olive & Forest' },
    { name: 'Muse', code: 'TR26-4-3', hex: '#495445', family: 'Olive & Forest' },
    { name: 'Pendula Garden', code: 'C45-3-0429-4', hex: '#474A3C', family: 'Olive & Forest' },
    { name: 'Mardi Grass', code: 'C34-2-1562-3', hex: '#4C7451', family: 'Olive & Forest' },
    { name: 'Botanical', code: 'TR27-10-3', hex: '#354A39', family: 'Olive & Forest' },
    { name: 'On The Greens', code: 'C34-1-1561-3', hex: '#1F5238', family: 'Olive & Forest' },
    // Creams, Yellows & Warm Whites
    { name: 'Pale Narcissus', code: 'B33-7-0957-0', hex: '#FAF4E0', family: 'Cream & Yellow' },
    { name: 'Soft Alabaster', code: 'TR27-1-1', hex: '#F6F3EB', family: 'Cream & Yellow' },
    { name: 'Chickadee', code: 'KC8-1', hex: '#F5E9D2', family: 'Cream & Yellow' },
    { name: 'Overnight Oats', code: 'TR27-3-1', hex: '#F1E6D4', family: 'Cream & Yellow' },
    { name: 'Autumn Child', code: 'B14-6-0909-0', hex: '#FBE7C0', family: 'Cream & Yellow' },
    { name: 'Illumina', code: 'TR24-3-1', hex: '#F5DFA5', family: 'Cream & Yellow' },
    { name: 'Ecru', code: 'WB078-1', hex: '#EDE8DD', family: 'Cream & Yellow' },
    { name: 'Enchanting', code: 'WB076-1', hex: '#EEE4D7', family: 'Cream & Yellow' },
    { name: 'Soaking Up The Rays', code: 'DR97-1', hex: '#E9DFD0', family: 'Cream & Yellow' },
    // Stone, Greige, Taupe & Earth Neutrals
    { name: 'Turkish Tower', code: 'D34-7-0579-0', hex: '#D9D8D1', family: 'Stone & Neutral' },
    { name: 'Power Lunch', code: 'D30-7-0572-0', hex: '#D4D1C6', family: 'Stone & Neutral' },
    { name: 'Kingsway', code: 'FD089-0', hex: '#C6BFAF', family: 'Stone & Neutral' },
    { name: 'Greystoke', code: 'D30-4-0575-4', hex: '#87857C', family: 'Stone & Neutral' },
    { name: 'Onyx', code: 'CC070-3', hex: '#7F7E77', family: 'Stone & Neutral' },
    { name: 'King Kole', code: 'D30-3-0576-4', hex: '#757267', family: 'Stone & Neutral' },
    { name: 'Moss Glen', code: 'CC071-3', hex: '#504D48', family: 'Stone & Neutral' },
    { name: 'Brown Suede', code: 'C16-1-0541-3', hex: '#594D3F', family: 'Stone & Neutral' },
    { name: 'Ancient Strata', code: 'TR27-11-3', hex: '#4B3E35', family: 'Stone & Neutral' },
    // Blues, Slates & Terracottas
    { name: 'North Beach Blue', code: 'CC052-2', hex: '#859C9C', family: 'Blue & Accent' },
    { name: 'Winter Harbour', code: 'CC047-4', hex: '#5F727D', family: 'Blue & Accent' },
    { name: 'Prince George', code: 'B22-1-0480-3', hex: '#314159', family: 'Blue & Accent' },
    { name: 'Blue Period', code: 'B26-1-0620-3', hex: '#025154', family: 'Blue & Accent' },
    { name: 'Purple Vision', code: 'A30-4-1254-0', hex: '#A09BC6', family: 'Blue & Accent' },
    { name: 'Muted Mulberry', code: 'CC035-3', hex: '#67626E', family: 'Blue & Accent' },
    { name: 'Rosewater', code: 'TR27-2-1', hex: '#F3DFD8', family: 'Blue & Accent' },
    { name: 'Tartlet', code: 'A18-7-1090-0', hex: '#FADEDA', family: 'Blue & Accent' },
    { name: 'Wood Nymph', code: 'A18-4-1093-0', hex: '#EAA0A8', family: 'Blue & Accent' },
    { name: 'Porcelain Rose', code: 'A18-3-1094-4', hex: '#D78188', family: 'Blue & Accent' },
    { name: 'Empower', code: 'A18-2-1095-3', hex: '#AD4646', family: 'Blue & Accent' },
    { name: 'Midnight Flora', code: 'TR25-3-3', hex: '#43293E', family: 'Blue & Accent' }
  ];

  const WHOLE_ROOM_COMBOS = [
    {
      label: 'Winner Trio: Frittata + Grounded + Positive Energy',
      zones: ['frittata', 'grounded', 'grounded', 'positive-energy']
    },
    {
      label: 'Home Hardware Match: Frittata + Monogram + Pale Green Tea',
      zones: ['frittata', 'monogram', 'monogram', 'pale-green-tea']
    },
    {
      label: 'Brightest Green: Frittata + Grounded + Fresh Dew',
      zones: ['frittata', 'grounded', 'grounded', 'fresh-dew']
    },
    {
      label: 'Cool Mint Test: Frittata + Grounded + Jade Mist',
      zones: ['frittata', 'grounded', 'grounded', 'jade-mist']
    },
    {
      label: 'Warm Cream Test: Frittata + Grounded + Vanilla Paste',
      zones: ['frittata', 'grounded', 'grounded', 'vanilla-paste']
    },
    {
      label: 'Blue Alternative: Frittata + Mozart + Denim Light',
      zones: ['frittata', 'mozart', 'mozart', 'denim-light']
    }
  ];

  const ZONE_NAMES = [
    'Back Stairwell Wall',
    'Stair Layer 1 (Front Pony Wall)',
    'Stair Layer 2 (Handrail Wall)',
    'Main Floor & Hallway Walls'
  ];

  // Color Conversion Helpers
  function hexToRgb(hex) {
    const clean = hex.replace('#', '').trim();
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function rgbToHex(r, g, b) {
    const toHex = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
    return ('#' + toHex(r) + toHex(g) + toHex(b)).toUpperCase();
  }

  function computeLRV(r, g, b) {
    const lin = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return Math.round(L * 100);
  }

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360 / 360;
    s = Math.max(0, Math.min(100, s)) / 100;
    l = Math.max(0, Math.min(100, l)) / 100;

    if (s === 0) {
      const v = Math.round(l * 255);
      return { r: v, g: v, b: v };
    }
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
      r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
      g: Math.round(hue2rgb(p, q, h) * 255),
      b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255)
    };
  }

  // Perceptual CIE L*a*b* Conversion for Accurate Paint Matching
  function rgbToLab(r, g, b) {
    const lin = (c) => {
      const s = c / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    const rl = lin(r);
    const gl = lin(g);
    const bl = lin(b);

    const x = (rl * 0.4124 + gl * 0.3576 + bl * 0.1805) / 0.95047;
    const y = (rl * 0.2126 + gl * 0.7152 + bl * 0.0722) / 1.00000;
    const z = (rl * 0.0193 + gl * 0.1192 + bl * 0.9505) / 1.08883;

    const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
    const fx = f(x);
    const fy = f(y);
    const fz = f(z);

    return {
      L: 116 * fy - 16,
      a: 500 * (fx - fy),
      b: 200 * (fy - fz)
    };
  }

  function deltaE(lab1, lab2) {
    const dL = lab1.L - lab2.L;
    const da = lab1.a - lab2.a;
    const db = lab1.b - lab2.b;
    return Math.sqrt(dL * dL + da * da + db * db);
  }

  // Enrich BEAUTITONE_CATALOG with precomputed RGB, LRV, HSL, and Lab
  BEAUTITONE_CATALOG.forEach((item) => {
    item.hex = item.hex.toUpperCase();
    item.rgb = hexToRgb(item.hex);
    item.lrv = computeLRV(item.rgb.r, item.rgb.g, item.rgb.b);
    item.hsl = rgbToHsl(item.rgb.r, item.rgb.g, item.rgb.b);
    item.lab = rgbToLab(item.rgb.r, item.rgb.g, item.rgb.b);
    item.brand = 'BeautiTone';
    item.id = 'bt-' + item.code.toLowerCase();
  });

  function findClosestBeautiToneColors(hex, count = 3) {
    const rgb = hexToRgb(hex);
    const targetLab = rgbToLab(rgb.r, rgb.g, rgb.b);
    const scored = BEAUTITONE_CATALOG.map((bt) => {
      const dist = deltaE(targetLab, bt.lab);
      const similarity = Math.max(0, Math.min(100, Math.round(100 - dist * 1.6)));
      return { bt, dist, similarity };
    });
    scored.sort((a, b) => a.dist - b.dist);
    return scored.slice(0, count);
  }

  const state = {
    activeRoom: 'hallway',
    activeZone: 3,
    linkStairLayers: true,
    unlinkLiving: false,
    showOriginal: false,
    showBtPins: true,
    selectedBtLookup: BEAUTITONE_CATALOG[0],
    customFavourites: [],
    zoneColors: [
      { ...TESTED_SWATCHES[0] },   // Zone 0: Frittata
      { ...DEFAULT_FAVOURITES[0] }, // Zone 1: Grounded
      { ...DEFAULT_FAVOURITES[0] }, // Zone 2: Grounded
      { ...DEFAULT_FAVOURITES[1] }  // Zone 3: Positive Energy
    ],
    wheelHSL: { h: 63, s: 27, l: 85 },
    roomAssets: {}
  };

  try {
    const saved = localStorage.getItem('paint_studio_custom_favs');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        state.customFavourites = parsed;
      }
    }
  } catch (err) {
    // Ignore storage error
  }

  // Image Asset Loader
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to load ' + src));
      img.src = src;
    });
  }

  function extractImageData(img) {
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, c.width, c.height);
  }

  async function loadAllRoomAssets() {
    const rooms = ['hallway', 'stairwell', 'living'];
    const statusEl = document.getElementById('canvas-status');
    try {
      await Promise.all(
        rooms.map(async (room) => {
          const [baseImg, maskImg, origImg] = await Promise.all([
            loadImage(`assets/${room}_base.jpg?v=2`),
            loadImage(`assets/${room}_mask.png?v=2`),
            loadImage(`assets/${room}_orig.jpg?v=2`)
          ]);
          const baseData = extractImageData(baseImg);
          const maskData = extractImageData(maskImg);
          const origData = extractImageData(origImg);
          state.roomAssets[room] = {
            width: baseData.width,
            height: baseData.height,
            basePixels: baseData.data,
            maskPixels: maskData.data,
            origPixels: origData.data,
            outputImageData: new ImageData(baseData.width, baseData.height)
          };
        })
      );
      statusEl.hidden = true;
      renderActiveRoom();
    } catch (err) {
      statusEl.hidden = false;
      statusEl.classList.add('error');
      statusEl.textContent = 'Could not load room images: ' + err.message;
    }
  }

  // Real-Time Pixel Shader
  function renderRoomToCanvas(roomKey, targetCanvas) {
    const asset = state.roomAssets[roomKey];
    if (!asset) return;

    const { width, height, basePixels, maskPixels, origPixels, outputImageData } = asset;
    if (targetCanvas.width !== width || targetCanvas.height !== height) {
      targetCanvas.width = width;
      targetCanvas.height = height;
    }

    const ctx = targetCanvas.getContext('2d');
    if (state.showOriginal) {
      outputImageData.data.set(origPixels);
      ctx.putImageData(outputImageData, 0, 0);
      return;
    }

    const c0 = hexToRgb(state.zoneColors[0].hex);
    const c1 = hexToRgb(state.zoneColors[1].hex);
    const c2 = hexToRgb(state.zoneColors[2].hex);
    const c3 = hexToRgb(state.zoneColors[3].hex);

    const isLivingLinked = roomKey === 'living' && !state.unlinkLiving;
    const z1 = isLivingLinked ? c3 : c1;
    const z2 = isLivingLinked ? c3 : c2;

    const out = outputImageData.data;
    const len = basePixels.length;

    for (let i = 0; i < len; i += 4) {
      const mr = maskPixels[i];
      const mg = maskPixels[i + 1];
      const mb = maskPixels[i + 2];

      if ((mr | mg | mb) === 0) {
        out[i] = basePixels[i];
        out[i + 1] = basePixels[i + 1];
        out[i + 2] = basePixels[i + 2];
        out[i + 3] = 255;
        continue;
      }

      const m3 = mr < mb ? mr : mb;
      const m0 = mr - m3;
      const m1 = mg;
      const m2 = mb - m3;
      const totalM = m0 + m1 + m2 + m3;

      if (totalM === 0) {
        out[i] = basePixels[i];
        out[i + 1] = basePixels[i + 1];
        out[i + 2] = basePixels[i + 2];
        out[i + 3] = 255;
        continue;
      }

      const invTotal = 1.0 / totalM;
      const tr = (m0 * c0.r + m1 * z1.r + m2 * z2.r + m3 * c3.r) * invTotal;
      const tg = (m0 * c0.g + m1 * z1.g + m2 * z2.g + m3 * c3.g) * invTotal;
      const tb = (m0 * c0.b + m1 * z1.b + m2 * z2.b + m3 * c3.b) * invTotal;

      const illum = basePixels[i] / 195.0;
      let pr, pg, pb;
      if (illum <= 1.0) {
        pr = tr * illum;
        pg = tg * illum;
        pb = tb * illum;
      } else {
        const spec = (illum - 1.0) * 36.0;
        pr = tr * illum + spec;
        pg = tg * illum + spec * 0.96;
        pb = tb * illum + spec * 0.88;
      }

      if (totalM >= 254) {
        out[i] = pr > 255 ? 255 : pr;
        out[i + 1] = pg > 255 ? 255 : pg;
        out[i + 2] = pb > 255 ? 255 : pb;
        out[i + 3] = 255;
      } else {
        const alpha = totalM / 255.0;
        const invAlpha = 1.0 - alpha;
        out[i] = basePixels[i] * invAlpha + (pr > 255 ? 255 : pr) * alpha;
        out[i + 1] = basePixels[i + 1] * invAlpha + (pg > 255 ? 255 : pg) * alpha;
        out[i + 2] = basePixels[i + 2] * invAlpha + (pb > 255 ? 255 : pb) * alpha;
        out[i + 3] = 255;
      }
    }

    ctx.putImageData(outputImageData, 0, 0);
  }

  function renderActiveRoom() {
    const singleWrap = document.getElementById('single-canvas-wrap');
    const multiWrap = document.getElementById('multi-canvas-wrap');
    const livingUnlinkRow = document.getElementById('living-unlink-row');

    livingUnlinkRow.hidden = state.activeRoom !== 'living';

    if (state.activeRoom === 'all') {
      singleWrap.hidden = true;
      multiWrap.hidden = false;
      renderRoomToCanvas('hallway', document.getElementById('multi-canvas-hallway'));
      renderRoomToCanvas('stairwell', document.getElementById('multi-canvas-stairwell'));
      renderRoomToCanvas('living', document.getElementById('multi-canvas-living'));
    } else {
      singleWrap.hidden = false;
      multiWrap.hidden = true;
      renderRoomToCanvas(state.activeRoom, document.getElementById('room-canvas'));
    }
    updateRecipeAndZoneUI();
  }

  function updateRecipeAndZoneUI() {
    for (let z = 0; z < 4; z++) {
      const col = state.zoneColors[z];
      const dot = document.getElementById(`zone-dot-${z}`);
      const sub = document.getElementById(`zone-sub-${z}`);
      const rSwatch = document.getElementById(`recipe-swatch-${z}`);
      const rName = document.getElementById(`recipe-name-${z}`);
      const rCode = document.getElementById(`recipe-code-${z}`);

      if (dot) dot.style.backgroundColor = col.hex;
      if (sub) sub.textContent = `${col.name} (${col.code || col.hex})`;
      if (rSwatch) rSwatch.style.backgroundColor = col.hex;
      if (rName) rName.textContent = col.name;
      if (rCode) rCode.textContent = `${col.code ? col.code + ' ' : ''}(${col.hex})`;
    }

    document.querySelectorAll('.zone-btn').forEach((btn) => {
      const z = Number(btn.dataset.zone);
      const isActive = z === state.activeZone;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-checked', String(isActive));
    });

    document.querySelectorAll('.recipe-chip').forEach((chip) => {
      const z = Number(chip.dataset.selectZone);
      chip.classList.toggle('active', z === state.activeZone);
    });

    const activeHex = state.zoneColors[state.activeZone].hex.toUpperCase();
    document.querySelectorAll('.swatch-card').forEach((card) => {
      card.classList.toggle('selected', card.dataset.hex === activeHex);
    });
  }

  function applyColorToActiveZone(colorObj, syncWheel = true) {
    const z = state.activeZone;
    state.zoneColors[z] = { ...colorObj };

    if (state.linkStairLayers && (z === 1 || z === 2)) {
      state.zoneColors[1] = { ...colorObj };
      state.zoneColors[2] = { ...colorObj };
    }

    if (syncWheel) {
      const rgb = hexToRgb(colorObj.hex);
      state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
      updateWheelUI();
    } else {
      renderClosestBeautiToneMatches(colorObj.hex);
    }

    renderActiveRoom();
  }

  function setActiveZone(z) {
    state.activeZone = z;
    const activeCol = state.zoneColors[z];
    const rgb = hexToRgb(activeCol.hex);
    state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
    updateWheelUI();
    updateRecipeAndZoneUI();
  }

  function createSwatchCard(swatch) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'swatch-card';
    btn.setAttribute('role', 'listitem');
    btn.dataset.hex = swatch.hex.toUpperCase();

    const preview = document.createElement('div');
    preview.className = 'swatch-chip-preview';
    preview.style.backgroundColor = swatch.hex;

    const title = document.createElement('span');
    title.className = 'swatch-title';
    title.textContent = swatch.name;

    const sub = document.createElement('span');
    sub.className = 'swatch-sub';
    sub.textContent = `${swatch.brand} ${swatch.code} | LRV ${swatch.lrv}`;

    btn.appendChild(preview);
    btn.appendChild(title);
    btn.appendChild(sub);

    btn.addEventListener('click', () => {
      applyColorToActiveZone(swatch, true);
    });
    return btn;
  }

  function renderSwatchShelves() {
    const favGrid = document.getElementById('favourites-grid');
    const testedGrid = document.getElementById('tested-grid');
    favGrid.innerHTML = '';
    testedGrid.innerHTML = '';

    const allFavs = [...DEFAULT_FAVOURITES, ...state.customFavourites];
    allFavs.forEach((sw) => favGrid.appendChild(createSwatchCard(sw)));
    TESTED_SWATCHES.forEach((sw) => testedGrid.appendChild(createSwatchCard(sw)));
    updateRecipeAndZoneUI();
  }

  function renderWholeRoomCombos() {
    const list = document.getElementById('combo-list');
    list.innerHTML = '';
    const allSwatches = [...DEFAULT_FAVOURITES, ...TESTED_SWATCHES];
    const findById = (id) => allSwatches.find((s) => s.id === id);

    WHOLE_ROOM_COMBOS.forEach((combo) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'combo-btn';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'combo-name';
      nameSpan.textContent = combo.label;

      const dotsWrap = document.createElement('div');
      dotsWrap.className = 'combo-dots';

      const resolvedZones = combo.zones.map(findById);
      [resolvedZones[0], resolvedZones[1], resolvedZones[3]].forEach((sw) => {
        const dot = document.createElement('span');
        dot.className = 'combo-dot';
        dot.style.backgroundColor = sw.hex;
        dotsWrap.appendChild(dot);
      });

      btn.appendChild(nameSpan);
      btn.appendChild(dotsWrap);

      btn.addEventListener('click', () => {
        state.zoneColors = resolvedZones.map((sw) => ({ ...sw }));
        setActiveZone(state.activeZone);
        renderActiveRoom();
      });

      list.appendChild(btn);
    });
  }

  // Interactive 2D Color Wheel + BeautiTone Sample Dots
  const wheelCanvas = document.getElementById('color-wheel-canvas');
  const wheelCtx = wheelCanvas.getContext('2d');
  const wheelCursor = document.getElementById('wheel-cursor');
  const sliderLightness = document.getElementById('slider-lightness');
  const sliderSaturation = document.getElementById('slider-saturation');
  const inputHex = document.getElementById('input-hex');
  const inputNativeColor = document.getElementById('input-native-color');
  const hexErrorMsg = document.getElementById('hex-error-msg');

  function drawColorWheel(lightness) {
    const size = wheelCanvas.width;
    const radius = size / 2;
    const imgData = wheelCtx.createImageData(size, size);
    const data = imgData.data;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = x - radius;
        const dy = y - radius;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const idx = (y * size + x) * 4;

        if (dist <= radius) {
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          const hue = (angle + 360) % 360;
          const sat = (dist / radius) * 100;
          const rgb = hslToRgb(hue, sat, lightness);
          data[idx] = rgb.r;
          data[idx + 1] = rgb.g;
          data[idx + 2] = rgb.b;
          data[idx + 3] = 255;
        } else {
          data[idx + 3] = 0;
        }
      }
    }
    wheelCtx.putImageData(imgData, 0, 0);

    // Plot BeautiTone sample dots on the wheel if enabled
    if (state.showBtPins) {
      BEAUTITONE_CATALOG.forEach((bt) => {
        const rad = (bt.hsl.h * Math.PI) / 180;
        const dist = (bt.hsl.s / 100) * (radius - 6);
        const px = radius + Math.cos(rad) * dist;
        const py = radius + Math.sin(rad) * dist;

        const isNearLightness = Math.abs(bt.hsl.l - lightness) <= 18;
        wheelCtx.beginPath();
        wheelCtx.arc(px, py, isNearLightness ? 4.2 : 2.6, 0, Math.PI * 2);
        wheelCtx.fillStyle = bt.hex;
        wheelCtx.fill();
        wheelCtx.lineWidth = isNearLightness ? 1.5 : 1;
        wheelCtx.strokeStyle = isNearLightness ? '#1B1A17' : 'rgba(27, 26, 23, 0.45)';
        wheelCtx.stroke();
      });
    }
  }

  // Render Top 3 Closest BeautiTone Matches (Color -> BeautiTone)
  function renderClosestBeautiToneMatches(hex) {
    const container = document.getElementById('bt-closest-list');
    if (!container) return;
    container.innerHTML = '';

    const closest = findClosestBeautiToneColors(hex, 3);
    closest.forEach(({ bt, dist, similarity }) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bt-match-card' + (dist < 1.5 ? ' exact' : '');
      btn.setAttribute('role', 'listitem');

      const topRow = document.createElement('div');
      topRow.className = 'bt-match-top';

      const sw = document.createElement('span');
      sw.className = 'bt-match-swatch';
      sw.style.backgroundColor = bt.hex;

      const badge = document.createElement('span');
      badge.className = 'bt-match-badge';
      badge.textContent = dist < 1.2 ? 'Exact Match' : `${similarity}% Match`;

      topRow.appendChild(sw);
      topRow.appendChild(badge);

      const nameEl = document.createElement('span');
      nameEl.className = 'bt-match-name';
      nameEl.textContent = bt.name;

      const codeEl = document.createElement('span');
      codeEl.className = 'bt-match-code';
      codeEl.textContent = `${bt.code} | ${bt.hex}`;

      btn.appendChild(topRow);
      btn.appendChild(nameEl);
      btn.appendChild(codeEl);

      btn.addEventListener('click', () => {
        state.selectedBtLookup = bt;
        renderBtLookupResult(bt);
        applyColorToActiveZone(bt, true);
      });

      container.appendChild(btn);
    });
  }

  // Direction B: BeautiTone Catalog Lookup -> HEX Code & Apply
  const inputBtSearch = document.getElementById('input-bt-search');
  const selectBtCatalog = document.getElementById('select-bt-catalog');
  const btConversionResult = document.getElementById('bt-conversion-result');

  function populateBtDropdown(filterQuery = '') {
    const q = filterQuery.trim().toLowerCase();
    const filtered = BEAUTITONE_CATALOG.filter(
      (bt) =>
        !q ||
        bt.name.toLowerCase().includes(q) ||
        bt.code.toLowerCase().includes(q) ||
        bt.hex.toLowerCase().includes(q) ||
        bt.family.toLowerCase().includes(q)
    );

    selectBtCatalog.innerHTML = '';
    if (filtered.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'No matching BeautiTone color found';
      selectBtCatalog.appendChild(opt);
      return;
    }

    filtered.forEach((bt) => {
      const opt = document.createElement('option');
      opt.value = bt.code;
      opt.textContent = `${bt.name} (${bt.code}) -> ${bt.hex}`;
      if (state.selectedBtLookup && state.selectedBtLookup.code === bt.code) {
        opt.selected = true;
      }
      selectBtCatalog.appendChild(opt);
    });

    if (!filtered.some((b) => state.selectedBtLookup && b.code === state.selectedBtLookup.code)) {
      state.selectedBtLookup = filtered[0];
    }
    renderBtLookupResult(state.selectedBtLookup);
  }

  function renderBtLookupResult(bt) {
    if (!bt || !btConversionResult) return;
    btConversionResult.innerHTML = '';

    document.getElementById('bt-converted-readout').textContent =
      `${bt.code} = ${bt.hex} (LRV ${bt.lrv})`;

    const left = document.createElement('div');
    left.className = 'bt-result-left';

    const sw = document.createElement('span');
    sw.className = 'bt-result-swatch';
    sw.style.backgroundColor = bt.hex;

    const meta = document.createElement('div');
    meta.className = 'bt-result-meta';

    const title = document.createElement('span');
    title.className = 'bt-result-title';
    title.textContent = `BeautiTone ${bt.name} (${bt.code})`;

    const specs = document.createElement('span');
    specs.className = 'bt-result-specs';
    specs.textContent = `HEX: ${bt.hex} | RGB: (${bt.rgb.r}, ${bt.rgb.g}, ${bt.rgb.b}) | LRV: ${bt.lrv}`;

    meta.appendChild(title);
    meta.appendChild(specs);
    left.appendChild(sw);
    left.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'bt-result-actions';

    const applyBtn = document.createElement('button');
    applyBtn.type = 'button';
    applyBtn.className = 'btn btn-primary btn-compact';
    applyBtn.textContent = 'Apply to Wall';
    applyBtn.addEventListener('click', () => {
      applyColorToActiveZone(bt, true);
    });

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn btn-secondary btn-compact';
    copyBtn.textContent = `Copy ${bt.hex}`;
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(bt.hex);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = `Copy ${bt.hex}`;
        }, 1400);
      }
    });

    actions.appendChild(applyBtn);
    actions.appendChild(copyBtn);

    btConversionResult.appendChild(left);
    btConversionResult.appendChild(actions);
  }

  if (inputBtSearch) {
    inputBtSearch.addEventListener('input', () => {
      populateBtDropdown(inputBtSearch.value);
    });
  }

  if (selectBtCatalog) {
    selectBtCatalog.addEventListener('change', () => {
      const code = selectBtCatalog.value;
      const found = BEAUTITONE_CATALOG.find((b) => b.code === code);
      if (found) {
        state.selectedBtLookup = found;
        renderBtLookupResult(found);
        applyColorToActiveZone(found, true);
      }
    });
  }

  const chkBtPins = document.getElementById('chk-show-bt-pins');
  if (chkBtPins) {
    chkBtPins.addEventListener('change', (e) => {
      state.showBtPins = e.target.checked;
      drawColorWheel(state.wheelHSL.l);
    });
  }

  function updateWheelUI() {
    const { h, s, l } = state.wheelHSL;
    drawColorWheel(l);

    const radius = wheelCanvas.width / 2;
    const rad = (h * Math.PI) / 180;
    const dist = (s / 100) * radius;
    const cx = radius + Math.cos(rad) * dist;
    const cy = radius + Math.sin(rad) * dist;

    wheelCursor.style.left = `${(cx / wheelCanvas.width) * 100}%`;
    wheelCursor.style.top = `${(cy / wheelCanvas.height) * 100}%`;

    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    const lrv = computeLRV(rgb.r, rgb.g, rgb.b);

    wheelCursor.style.backgroundColor = hex;
    sliderLightness.value = String(l);
    sliderSaturation.value = String(s);
    inputHex.value = hex;
    inputNativeColor.value = hex;
    hexErrorMsg.hidden = true;

    document.getElementById('lightness-val-label').textContent = `${l}% (LRV ${lrv})`;
    document.getElementById('saturation-val-label').textContent = `${s}%`;
    document.getElementById('wheel-live-readout').textContent = `${hex} | LRV ${lrv}`;

    renderClosestBeautiToneMatches(hex);
  }

  function applyCurrentWheelColor() {
    const { h, s, l } = state.wheelHSL;
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    const lrv = computeLRV(rgb.r, rgb.g, rgb.b);

    updateWheelUI();
    applyColorToActiveZone(
      {
        id: 'custom-' + hex,
        name: 'Custom ' + hex,
        brand: 'Custom',
        code: `LRV ${lrv}`,
        hex,
        lrv
      },
      false
    );
  }

  function handleWheelPointer(clientX, clientY, allowPinSnap = false) {
    const rect = wheelCanvas.getBoundingClientRect();
    const radius = rect.width / 2;
    const dx = clientX - (rect.left + radius);
    const dy = clientY - (rect.top + radius);

    // If BeautiTone dots are visible and user clicked directly on a dot, snap to that BeautiTone sample!
    if (allowPinSnap && state.showBtPins) {
      const scale = wheelCanvas.width / rect.width;
      const clickX = (clientX - rect.left) * scale;
      const clickY = (clientY - rect.top) * scale;
      const canvasRadius = wheelCanvas.width / 2;

      let bestPin = null;
      let bestDist = 7.5;
      BEAUTITONE_CATALOG.forEach((bt) => {
        const rad = (bt.hsl.h * Math.PI) / 180;
        const d = (bt.hsl.s / 100) * (canvasRadius - 6);
        const px = canvasRadius + Math.cos(rad) * d;
        const py = canvasRadius + Math.sin(rad) * d;
        const pinDist = Math.hypot(clickX - px, clickY - py);
        if (pinDist < bestDist) {
          bestDist = pinDist;
          bestPin = bt;
        }
      });

      if (bestPin) {
        state.selectedBtLookup = bestPin;
        renderBtLookupResult(bestPin);
        applyColorToActiveZone(bestPin, true);
        return;
      }
    }

    const dist = Math.min(radius, Math.sqrt(dx * dx + dy * dy));
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    state.wheelHSL.h = Math.round((angle + 360) % 360);
    state.wheelHSL.s = Math.round((dist / radius) * 100);
    applyCurrentWheelColor();
  }

  let isDraggingWheel = false;
  wheelCanvas.addEventListener('pointerdown', (e) => {
    isDraggingWheel = true;
    wheelCanvas.setPointerCapture(e.pointerId);
    handleWheelPointer(e.clientX, e.clientY, true);
  });
  wheelCanvas.addEventListener('pointermove', (e) => {
    if (!isDraggingWheel) return;
    handleWheelPointer(e.clientX, e.clientY, false);
  });
  wheelCanvas.addEventListener('pointerup', () => {
    isDraggingWheel = false;
  });

  wheelCanvas.addEventListener('keydown', (e) => {
    let handled = true;
    if (e.key === 'ArrowRight') state.wheelHSL.h = (state.wheelHSL.h + 5) % 360;
    else if (e.key === 'ArrowLeft') state.wheelHSL.h = (state.wheelHSL.h + 355) % 360;
    else if (e.key === 'ArrowUp') state.wheelHSL.s = Math.min(100, state.wheelHSL.s + 4);
    else if (e.key === 'ArrowDown') state.wheelHSL.s = Math.max(0, state.wheelHSL.s - 4);
    else handled = false;

    if (handled) {
      e.preventDefault();
      applyCurrentWheelColor();
    }
  });

  sliderLightness.addEventListener('input', () => {
    state.wheelHSL.l = Number(sliderLightness.value);
    applyCurrentWheelColor();
  });

  sliderSaturation.addEventListener('input', () => {
    state.wheelHSL.s = Number(sliderSaturation.value);
    applyCurrentWheelColor();
  });

  inputNativeColor.addEventListener('input', () => {
    const hex = inputNativeColor.value.toUpperCase();
    const rgb = hexToRgb(hex);
    state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
    applyCurrentWheelColor();
  });

  inputHex.addEventListener('input', () => {
    let val = inputHex.value.trim();
    if (!val.startsWith('#')) val = '#' + val;
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      hexErrorMsg.hidden = true;
      const hex = val.toUpperCase();
      const rgb = hexToRgb(hex);
      state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
      applyCurrentWheelColor();
    } else {
      hexErrorMsg.hidden = false;
    }
  });

  document.getElementById('btn-save-custom').addEventListener('click', () => {
    const current = state.zoneColors[state.activeZone];
    const hexUpper = current.hex.toUpperCase();
    const exists = [...DEFAULT_FAVOURITES, ...state.customFavourites].some(
      (s) => s.hex.toUpperCase() === hexUpper
    );
    if (!exists) {
      const customItem = {
        id: 'fav-' + Date.now(),
        name: current.name.startsWith('Custom') ? `Saved ${hexUpper}` : current.name,
        brand: current.brand || 'Custom',
        code: current.code || hexUpper,
        hex: hexUpper,
        lrv: current.lrv
      };
      state.customFavourites.push(customItem);
      try {
        localStorage.setItem('paint_studio_custom_favs', JSON.stringify(state.customFavourites));
      } catch (err) {
        // Ignore storage error
      }
      renderSwatchShelves();
    }
  });

  // Direct Canvas Click & Hover to Select Wall Zone
  const roomCanvas = document.getElementById('room-canvas');
  const hoverPill = document.getElementById('hover-zone-pill');

  function getZoneAtCanvasEvent(e) {
    const asset = state.roomAssets[state.activeRoom];
    if (!asset) return null;

    const rect = roomCanvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * asset.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * asset.height);
    if (x < 0 || x >= asset.width || y < 0 || y >= asset.height) return null;

    const idx = (y * asset.width + x) * 4;
    const mr = asset.maskPixels[idx];
    const mg = asset.maskPixels[idx + 1];
    const mb = asset.maskPixels[idx + 2];

    const m3 = mr < mb ? mr : mb;
    const m0 = mr - m3;
    const m1 = mg;
    const m2 = mb - m3;

    const maxM = Math.max(m0, m1, m2, m3);
    if (maxM < 40) return null;

    if (state.activeRoom === 'living' && !state.unlinkLiving) {
      return 3;
    }
    if (maxM === m3) return 3;
    if (maxM === m2) return 2;
    if (maxM === m1) return 1;
    return 0;
  }

  roomCanvas.addEventListener('mousemove', (e) => {
    const z = getZoneAtCanvasEvent(e);
    if (z === null) {
      hoverPill.hidden = true;
    } else {
      hoverPill.hidden = false;
      hoverPill.textContent = `Click to select: ${ZONE_NAMES[z]}`;
    }
  });

  roomCanvas.addEventListener('mouseleave', () => {
    hoverPill.hidden = true;
  });

  roomCanvas.addEventListener('click', (e) => {
    const z = getZoneAtCanvasEvent(e);
    if (z !== null) {
      setActiveZone(z);
    }
  });

  document.querySelectorAll('.room-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.activeRoom = tab.dataset.room;
      document.querySelectorAll('.room-tab').forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderActiveRoom();
    });
  });

  document.querySelectorAll('[data-jump-room]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetRoom = btn.dataset.jumpRoom;
      const tab = document.querySelector(`.room-tab[data-room="${targetRoom}"]`);
      if (tab) tab.click();
    });
  });

  document.querySelectorAll('.zone-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setActiveZone(Number(btn.dataset.zone));
    });
  });

  document.querySelectorAll('.recipe-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      setActiveZone(Number(chip.dataset.selectZone));
    });
    chip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveZone(Number(chip.dataset.selectZone));
      }
    });
  });

  document.getElementById('chk-link-stairs').addEventListener('change', (e) => {
    state.linkStairLayers = e.target.checked;
    if (state.linkStairLayers) {
      const source = state.activeZone === 2 ? state.zoneColors[2] : state.zoneColors[1];
      state.zoneColors[1] = { ...source };
      state.zoneColors[2] = { ...source };
      renderActiveRoom();
    }
  });

  document.getElementById('chk-unlink-living').addEventListener('change', (e) => {
    state.unlinkLiving = e.target.checked;
    renderActiveRoom();
  });

  const compareBtn = document.getElementById('btn-compare-orig');
  compareBtn.addEventListener('click', () => {
    state.showOriginal = !state.showOriginal;
    compareBtn.setAttribute('aria-pressed', String(state.showOriginal));
    compareBtn.textContent = state.showOriginal
      ? 'Showing Original (Click for Painted)'
      : 'Show Original Unpainted';
    renderActiveRoom();
  });

  document.getElementById('btn-reset-default').addEventListener('click', () => {
    state.zoneColors = [
      { ...TESTED_SWATCHES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[1] }
    ];
    state.showOriginal = false;
    compareBtn.setAttribute('aria-pressed', 'false');
    compareBtn.textContent = 'Show Original Unpainted';
    setActiveZone(3);
    renderActiveRoom();
  });

  document.getElementById('btn-download').addEventListener('click', () => {
    const canvas =
      state.activeRoom === 'all'
        ? document.getElementById('multi-canvas-hallway')
        : document.getElementById('room-canvas');
    const link = document.createElement('a');
    link.download = `main-floor-${state.activeRoom}-${state.zoneColors[3].id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  const themeBtn = document.getElementById('btn-theme-toggle');
  const themeText = document.getElementById('theme-toggle-text');
  themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    themeText.textContent = next === 'dark' ? 'Light Studio' : 'Dark Studio';
  });

  // Initialize Studio
  populateBtDropdown('');
  renderSwatchShelves();
  renderWholeRoomCombos();
  setActiveZone(3);
  loadAllRoomAssets();
})();
