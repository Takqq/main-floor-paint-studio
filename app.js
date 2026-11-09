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

  // Official Behr (Home Depot) Paint Catalog for Two-Way Conversion & Color Wheel Pins
  const BEHR_CATALOG = [
    // Pale & Muted Greens / Sages
    { name: 'Positive Energy', code: 'S370-1', hex: '#E1E2CF', family: 'Green & Sage' },
    { name: 'Fresh Dew', code: 'M370-1', hex: '#F0F4E5', family: 'Green & Sage' },
    { name: 'Cabbage Leaf', code: 'M370-2', hex: '#DFE8D0', family: 'Green & Sage' },
    { name: 'Spice Garden', code: 'M370-3', hex: '#C9D6B4', family: 'Green & Sage' },
    { name: 'Feng Shui', code: 'S370-2', hex: '#D7D9C2', family: 'Green & Sage' },
    { name: 'Sage Brush', code: 'S370-3', hex: '#BFC1A2', family: 'Green & Sage' },
    { name: 'Moss Mist', code: 'S380-1', hex: '#DFE1D2', family: 'Green & Sage' },
    { name: 'Morning Zen', code: 'S380-2', hex: '#CBCDB9', family: 'Green & Sage' },
    { name: 'Urban Nature', code: 'S380-3', hex: '#BCBFA8', family: 'Green & Sage' },
    { name: 'Sounds Of Nature', code: 'S390-1', hex: '#DFE5D7', family: 'Green & Sage' },
    { name: 'Spring Valley', code: 'S390-2', hex: '#CED7C5', family: 'Green & Sage' },
    { name: 'Creamy Spinach', code: 'S390-3', hex: '#B2BFA6', family: 'Green & Sage' },
    { name: 'Light Mist', code: 'N390-1', hex: '#DCE1D5', family: 'Green & Sage' },
    { name: 'Flora', code: 'N390-2', hex: '#CED5C7', family: 'Green & Sage' },
    { name: 'Jojoba', code: 'N390-3', hex: '#B0B9A6', family: 'Green & Sage' },
    { name: 'Environmental', code: 'PPU11-09', hex: '#B1B5A0', family: 'Green & Sage' },
    { name: 'Jade Mist', code: 'M410-1', hex: '#D6E9D7', family: 'Green & Sage' },
    { name: 'Wishful Green', code: 'M410-2', hex: '#C8E2CC', family: 'Green & Sage' },
    { name: 'Enchanted Meadow', code: 'M410-3', hex: '#B1D4B7', family: 'Green & Sage' },
    { name: 'Garden Swing', code: 'M410-4', hex: '#8CBD97', family: 'Green & Sage' },
    // Mid & Deep Olives / Forest Greens
    { name: 'Grounded', code: 'T27-01', hex: '#565344', family: 'Olive & Forest' },
    { name: 'Rejuvenation', code: 'S370-4', hex: '#A4A783', family: 'Olive & Forest' },
    { name: 'Pesto Paste', code: 'S370-5', hex: '#898C66', family: 'Olive & Forest' },
    { name: 'Seaweed Salad', code: 'S370-6', hex: '#7D7B55', family: 'Olive & Forest' },
    { name: 'Outdoor Oasis', code: 'S370-7', hex: '#6E6F4D', family: 'Olive & Forest' },
    { name: 'Bay Water', code: 'S380-4', hex: '#AAAD94', family: 'Olive & Forest' },
    { name: 'Milkweed Pod', code: 'S380-5', hex: '#95987F', family: 'Olive & Forest' },
    { name: 'Ecological', code: 'S380-6', hex: '#808367', family: 'Olive & Forest' },
    { name: 'Global Green', code: 'S380-7', hex: '#696E51', family: 'Olive & Forest' },
    { name: 'Roof Top Garden', code: 'S390-4', hex: '#9EAD93', family: 'Olive & Forest' },
    { name: 'Laurel Tree', code: 'S390-5', hex: '#889779', family: 'Olive & Forest' },
    { name: 'Cliffside Park', code: 'S390-6', hex: '#6F8165', family: 'Olive & Forest' },
    { name: 'Trailing Vine', code: 'S390-7', hex: '#5A6952', family: 'Olive & Forest' },
    { name: 'Bitter Sage', code: 'N390-4', hex: '#97A18D', family: 'Olive & Forest' },
    { name: 'Eucalyptus Wreath', code: 'N390-5', hex: '#88927E', family: 'Olive & Forest' },
    { name: 'Laurel Garland', code: 'N390-6', hex: '#68705C', family: 'Olive & Forest' },
    { name: 'Cypress Vine', code: 'N390-7', hex: '#5E6552', family: 'Olive & Forest' },
    { name: 'Green Bank', code: 'M410-5', hex: '#79B088', family: 'Olive & Forest' },
    { name: 'Turtle Creek', code: 'M410-6', hex: '#65926D', family: 'Olive & Forest' },
    { name: 'Perennial Green', code: 'M410-7', hex: '#47694F', family: 'Olive & Forest' },
    { name: 'Back To Nature', code: 'S340-4', hex: '#BDB98F', family: 'Olive & Forest' },
    { name: 'Bonsai Trunk', code: 'N380-6', hex: '#6C6D62', family: 'Olive & Forest' },
    { name: 'Black Bamboo', code: 'N380-7', hex: '#5B5D53', family: 'Olive & Forest' },
    // Creams, Yellows & Warm Whites
    { name: 'Frittata', code: 'M290-2', hex: '#FEEBC8', family: 'Cream & Yellow' },
    { name: 'Thickened Cream', code: 'M290-1', hex: '#FCF3DD', family: 'Cream & Yellow' },
    { name: 'Corn Stalk', code: 'M290-3', hex: '#FCDBA6', family: 'Cream & Yellow' },
    { name: 'Vanilla Paste', code: 'S290-1', hex: '#F3E7D3', family: 'Cream & Yellow' },
    { name: 'White Bean Hummus', code: 'S290-2', hex: '#E8D0B2', family: 'Cream & Yellow' },
    { name: 'Slender Reed', code: 'S290-3', hex: '#DEC29F', family: 'Cream & Yellow' },
    { name: 'Blank Canvas', code: 'DC-003', hex: '#F1EDE1', family: 'Cream & Yellow' },
    { name: 'Swiss Coffee', code: '12', hex: '#F1EDE0', family: 'Cream & Yellow' },
    { name: 'Roadster White', code: 'N370-1', hex: '#E1E0D7', family: 'Cream & Yellow' },
    // Stone, Greige, Taupe & Earth Neutrals
    { name: 'Eon', code: 'N370-2', hex: '#D4D3C9', family: 'Stone & Neutral' },
    { name: 'Light Year', code: 'N370-3', hex: '#BFBFB4', family: 'Stone & Neutral' },
    { name: 'Confederate', code: 'N370-4', hex: '#A7A699', family: 'Stone & Neutral' },
    { name: 'Incognito', code: 'N370-5', hex: '#8E8E82', family: 'Stone & Neutral' },
    { name: 'Mortar', code: 'N380-1', hex: '#D6D7CF', family: 'Stone & Neutral' },
    { name: 'Heath Gray', code: 'N380-2', hex: '#C9CBC2', family: 'Stone & Neutral' },
    { name: 'Weathered Moss', code: 'N380-3', hex: '#BABBB3', family: 'Stone & Neutral' },
    { name: 'Strong Winds', code: 'N380-4', hex: '#A3A59B', family: 'Stone & Neutral' },
    { name: 'Naturalist Gray', code: 'N380-5', hex: '#8B8C83', family: 'Stone & Neutral' },
    { name: 'Sage Gray', code: '710F-4', hex: '#9EA49D', family: 'Stone & Neutral' },
    { name: 'Seagull Gray', code: 'N360-1', hex: '#D9D9D2', family: 'Stone & Neutral' },
    { name: 'Silver Marlin', code: 'N360-2', hex: '#C8C8C0', family: 'Stone & Neutral' },
    { name: 'Still Gray', code: 'N360-3', hex: '#ABA9A0', family: 'Stone & Neutral' },
    { name: 'Battleship Gray', code: 'N360-4', hex: '#98968D', family: 'Stone & Neutral' },
    { name: 'Mossy Oak', code: 'N360-5', hex: '#848178', family: 'Stone & Neutral' },
    { name: 'Patio Stone', code: 'N360-6', hex: '#6B655B', family: 'Stone & Neutral' },
    { name: 'Potting Soil', code: 'N360-7', hex: '#595147', family: 'Stone & Neutral' },
    // Blues & Slates
    { name: 'Mozart', code: 'PPU15-02', hex: '#485480', family: 'Blue & Accent' },
    { name: 'Denim Light', code: 'PPU14-15', hex: '#B8CAD5', family: 'Blue & Accent' },
    { name: 'Hidden Gem', code: 'N430-6A', hex: '#596D69', family: 'Blue & Accent' }
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

  // Enrich BEAUTITONE_CATALOG and BEHR_CATALOG with precomputed RGB, LRV, HSL, and Lab
  function enrichCatalog(catalog, brandName, prefix) {
    catalog.forEach((item) => {
      item.hex = item.hex.toUpperCase();
      item.rgb = hexToRgb(item.hex);
      item.lrv = computeLRV(item.rgb.r, item.rgb.g, item.rgb.b);
      item.hsl = rgbToHsl(item.rgb.r, item.rgb.g, item.rgb.b);
      item.lab = rgbToLab(item.rgb.r, item.rgb.g, item.rgb.b);
      item.brand = brandName;
      item.id = prefix + '-' + item.code.toLowerCase();
    });
  }

  enrichCatalog(BEAUTITONE_CATALOG, 'BeautiTone', 'bt');
  enrichCatalog(BEHR_CATALOG, 'Behr', 'behr');

  const ALL_BRAND_CATALOG = [...BEHR_CATALOG, ...BEAUTITONE_CATALOG];

  function findClosestCatalogColors(hex, catalog, count = 3) {
    const rgb = hexToRgb(hex);
    const targetLab = rgbToLab(rgb.r, rgb.g, rgb.b);
    const scored = catalog.map((item) => {
      const dist = deltaE(targetLab, item.lab);
      const similarity = Math.max(0, Math.min(100, Math.round(100 - dist * 1.6)));
      return { item, dist, similarity };
    });
    scored.sort((a, b) => a.dist - b.dist);
    return scored.slice(0, count);
  }

  // Individual clickable wall segments per room (independent of zone)
  const ROOM_WALL_SEGMENTS = {
    hallway: [
      { id: 0, name: 'Left Window Wall', defaultZone: 0 },
      { id: 1, name: 'Upper Back Stairwell', defaultZone: 0 },
      { id: 2, name: 'Stair Layer 1 (Pony Wall)', defaultZone: 1 },
      { id: 3, name: 'Stair Layer 2 (Handrail)', defaultZone: 2 },
      { id: 4, name: 'Door Header Bulkhead', defaultZone: 3 },
      { id: 5, name: 'Far-Back Living Wall', defaultZone: 3 },
      { id: 6, name: 'Right Hallway Wall', defaultZone: 3 },
      { id: 7, name: 'Far-Right Doorway Wall', defaultZone: 3 }
    ],
    stairwell: [
      { id: 0, name: 'Upper Back Stairwell', defaultZone: 0 },
      { id: 1, name: 'Stair Layer 1 (Mirror Wall)', defaultZone: 1 },
      { id: 2, name: 'Stair Layer 2 (Middle Stair)', defaultZone: 2 },
      { id: 3, name: 'Left Front Door Wall', defaultZone: 3 },
      { id: 4, name: 'Upper Stair Bulkhead', defaultZone: 0 },
      { id: 5, name: 'Right Hallway Wall', defaultZone: 3 },
      { id: 6, name: 'Far-Right Doorway Wall', defaultZone: 3 }
    ],
    living: [
      { id: 0, name: 'Left Skyline Wall', defaultZone: 3 },
      { id: 1, name: 'Center Living Window Wall', defaultZone: 3 },
      { id: 2, name: 'Center Clock Pillar', defaultZone: 3 },
      { id: 3, name: 'Back Dining Window Wall', defaultZone: 3 },
      { id: 4, name: 'Back Kitchen Shelf Wall', defaultZone: 3 },
      { id: 5, name: 'Right Foreground Wall', defaultZone: 3 }
    ],
    entryway: [
      { id: 0, name: 'Far-Left Coat Hook Wall', defaultZone: 3 },
      { id: 1, name: 'Left Front Door Wall', defaultZone: 3 },
      { id: 2, name: 'Center Closet Wall', defaultZone: 3 },
      { id: 3, name: 'Stair Layer 1 (Mirror Wall)', defaultZone: 1 },
      { id: 4, name: 'Back Stairwell Window Wall', defaultZone: 0 },
      { id: 5, name: 'Stair Layer 2 (Handrail)', defaultZone: 2 }
    ],
    fireplace: [
      { id: 0, name: 'Left Fridge Wall', defaultZone: 3 },
      { id: 1, name: 'Upper Kitchen Cabinet Wall', defaultZone: 3 },
      { id: 2, name: 'Far-Left Hallway Wall', defaultZone: 3 },
      { id: 3, name: 'Far Front Door Wall', defaultZone: 3 },
      { id: 4, name: 'Stairwell Return Bulkhead', defaultZone: 3 },
      { id: 5, name: 'Center Fireplace & Art Wall', defaultZone: 3 },
      { id: 6, name: 'Right Living Room Wall', defaultZone: 3 },
      { id: 7, name: 'Far Stairwell Opening Wall', defaultZone: 1 }
    ]
  };

  const state = {
    activeRoom: 'hallway',
    targetMode: 'zone', // 'wall' (individual clicked wall) or 'zone' (whole zone)
    activeZone: 3,
    activeWall: { room: 'hallway', segId: 6 },
    brushOnClick: false,
    lastPickedColor: { ...DEFAULT_FAVOURITES[1] },
    flashWall: null,
    linkStairLayers: true,
    unlinkLiving: false,
    showOriginal: false,
    showBtPins: true,
    showBehrPins: true,
    brandFilter: 'all',
    selectedBtLookup: BEHR_CATALOG[0],
    customFavourites: [],
    savedLayouts: [],
    activeLayoutId: null,
    zoneColors: [
      { ...TESTED_SWATCHES[0] },   // Zone 0: Frittata
      { ...DEFAULT_FAVOURITES[0] }, // Zone 1: Grounded
      { ...DEFAULT_FAVOURITES[0] }, // Zone 2: Grounded
      { ...DEFAULT_FAVOURITES[1] }  // Zone 3: Positive Energy
    ],
    wallColors: {},
    wheelHSL: { h: 63, s: 27, l: 85 },
    roomAssets: {}
  };

  function cloneZones(zones) {
    return zones.map((c) => ({ ...c }));
  }

  function cloneWalls(wallsObj) {
    const out = {};
    Object.keys(ROOM_WALL_SEGMENTS).forEach((room) => {
      out[room] = ROOM_WALL_SEGMENTS[room].map((seg, idx) => {
        const src = wallsObj && wallsObj[room] && wallsObj[room][idx];
        return src ? { ...src } : { ...state.zoneColors[seg.defaultZone] };
      });
    });
    return out;
  }

  function buildWallsFromZones(zones) {
    const out = {};
    Object.keys(ROOM_WALL_SEGMENTS).forEach((room) => {
      out[room] = ROOM_WALL_SEGMENTS[room].map((seg) => ({
        ...zones[seg.defaultZone]
      }));
    });
    return out;
  }

  function syncAllWallsFromZones() {
    state.wallColors = buildWallsFromZones(state.zoneColors);
  }

  function syncZoneToWalls(zoneIdx, colorObj) {
    Object.keys(ROOM_WALL_SEGMENTS).forEach((room) => {
      ROOM_WALL_SEGMENTS[room].forEach((seg, idx) => {
        if (seg.defaultZone === zoneIdx) {
          state.wallColors[room][idx] = { ...colorObj };
        }
      });
    });
  }

  syncAllWallsFromZones();

  function persistWorkingState() {
    try {
      localStorage.setItem(
        'paint_studio_working_state_v1',
        JSON.stringify({
          zoneColors: state.zoneColors,
          wallColors: state.wallColors,
          activeLayoutId: state.activeLayoutId
        })
      );
    } catch (err) {
      // Ignore storage error
    }
  }

  function persistSavedLayouts() {
    try {
      localStorage.setItem('paint_studio_saved_layouts_v1', JSON.stringify(state.savedLayouts));
    } catch (err) {
      // Ignore storage error
    }
  }

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

  try {
    const savedLayoutsRaw = localStorage.getItem('paint_studio_saved_layouts_v1');
    if (savedLayoutsRaw) {
      const parsedLayouts = JSON.parse(savedLayoutsRaw);
      if (Array.isArray(parsedLayouts) && parsedLayouts.length > 0) {
        state.savedLayouts = parsedLayouts;
      }
    }
  } catch (err) {
    // Ignore storage error
  }

  if (state.savedLayouts.length === 0) {
    const trioZones = [
      { ...TESTED_SWATCHES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[1] }
    ];
    const greenTeaZones = [
      { ...TESTED_SWATCHES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[3] }
    ];
    state.savedLayouts = [
      {
        id: 'layout-starter-1',
        name: 'Positive Energy + Grounded',
        isDefault: true,
        zoneColors: cloneZones(trioZones),
        wallColors: buildWallsFromZones(trioZones)
      },
      {
        id: 'layout-starter-2',
        name: 'Pale Green Tea + Grounded',
        isDefault: false,
        zoneColors: cloneZones(greenTeaZones),
        wallColors: buildWallsFromZones(greenTeaZones)
      }
    ];
    state.activeLayoutId = 'layout-starter-1';
  }

  // Restore user's default layout or live working state on startup
  try {
    const defaultLayout = state.savedLayouts.find((l) => l.isDefault);
    if (defaultLayout) {
      state.zoneColors = cloneZones(defaultLayout.zoneColors);
      state.wallColors = cloneWalls(defaultLayout.wallColors);
      state.activeLayoutId = defaultLayout.id;
    }

    const workingRaw = localStorage.getItem('paint_studio_working_state_v1');
    if (workingRaw) {
      const working = JSON.parse(workingRaw);
      if (working && Array.isArray(working.zoneColors) && working.zoneColors.length === 4) {
        state.zoneColors = cloneZones(working.zoneColors);
        state.wallColors = cloneWalls(working.wallColors);
        if (working.activeLayoutId) {
          state.activeLayoutId = working.activeLayoutId;
        }
      }
    }
  } catch (err) {
    // Ignore storage error
  }

  // Image Asset Loader & Per-Pixel Wall Segment Map Builder
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

  function buildRoomSegmentMaps(room, width, height, maskPixels) {
    const numPixels = width * height;
    const m0Seg = new Uint8Array(numPixels);
    const m1Seg = new Uint8Array(numPixels);
    const m2Seg = new Uint8Array(numPixels);
    const m3Seg = new Uint8Array(numPixels);
    const topSeg = new Uint8Array(numPixels);
    topSeg.fill(255);

    for (let y = 0; y < height; y++) {
      const rowOffset = y * width;
      for (let x = 0; x < width; x++) {
        const p = rowOffset + x;
        const idx = p * 4;
        const mr = maskPixels[idx];
        const mg = maskPixels[idx + 1];
        const mb = maskPixels[idx + 2];

        const m3 = mr < mb ? mr : mb;
        const m0 = mr - m3;
        const m1 = mg;
        const m2 = mb - m3;

        let s0 = 0, s1 = 0, s2 = 0, s3 = 0;

        if (room === 'hallway') {
          const cornerX = y < 48 ? 204 + (48 - y) * 1.9 : 200 + y * 0.076;
          const rightDoorCornerX = 885 - (y - 325) * 0.1667;
          s0 = x < cornerX ? 0 : 1;
          s1 = 2;
          s2 = 3;
          s3 =
            x < 625 && y < 410
              ? 4
              : x < 735
                ? 5
                : x >= rightDoorCornerX && y < 430
                  ? 7
                  : 6;
        } else if (room === 'stairwell') {
          const rightDoorCornerX = 865 + (y - 510) * 0.06415;
          s0 = 0;
          s1 = 1;
          s2 = 2;
          s3 = x < 450 ? 3 : y < 400 ? 4 : x >= rightDoorCornerX ? 6 : 5;
        } else if (room === 'living') {
          s0 = 1;
          s1 = 0;
          s2 = 5;
          s3 = x < 590 ? 1 : x < 648 ? 2 : x < 882 ? 3 : 4;
        } else if (room === 'entryway') {
          const doorCornerX = 451 - (y - 225) * 0.022;
          s3 = x < 82 ? 0 : x < doorCornerX ? 1 : 2;
          s1 = 3;
          s0 = 4;
          s2 = 5;
        } else if (room === 'fireplace') {
          s2 = x < 128 ? 0 : x < 440 ? 1 : 7;
          s0 = x < 480 ? 2 : 3;
          s3 = x < 611 ? 4 : 5;
          s1 = 6;
        }

        m0Seg[p] = s0;
        m1Seg[p] = s1;
        m2Seg[p] = s2;
        m3Seg[p] = s3;

        const maxM = Math.max(m0, m1, m2, m3);
        if (maxM >= 40) {
          if (maxM === m3) topSeg[p] = s3;
          else if (maxM === m2) topSeg[p] = s2;
          else if (maxM === m1) topSeg[p] = s1;
          else topSeg[p] = s0;
        }
      }
    }

    return { m0Seg, m1Seg, m2Seg, m3Seg, topSeg };
  }

  async function loadAllRoomAssets() {
    const rooms = ['hallway', 'stairwell', 'living', 'entryway', 'fireplace'];
    const statusEl = document.getElementById('canvas-status');
    try {
      await Promise.all(
        rooms.map(async (room) => {
          const [baseImg, maskImg, origImg] = await Promise.all([
            loadImage(`assets/${room}_base.jpg?v=11`),
            loadImage(`assets/${room}_mask.png?v=11`),
            loadImage(`assets/${room}_orig.jpg?v=11`)
          ]);
          const baseData = extractImageData(baseImg);
          const maskData = extractImageData(maskImg);
          const origData = extractImageData(origImg);
          const segMaps = buildRoomSegmentMaps(room, baseData.width, baseData.height, maskData.data);
          state.roomAssets[room] = {
            width: baseData.width,
            height: baseData.height,
            basePixels: baseData.data,
            maskPixels: maskData.data,
            origPixels: origData.data,
            ...segMaps,
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

  // Real-Time Pixel Shader (Supports Independent Per-Wall Colors)
  function renderRoomToCanvas(roomKey, targetCanvas) {
    const asset = state.roomAssets[roomKey];
    if (!asset) return;

    const { width, height, basePixels, maskPixels, origPixels, m0Seg, m1Seg, m2Seg, m3Seg, topSeg, outputImageData } = asset;
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

    const roomSegColors = state.wallColors[roomKey].map((col) => hexToRgb(col.hex));
    const flashSegId =
      state.flashWall && state.flashWall.room === roomKey ? state.flashWall.segId : -1;

    const out = outputImageData.data;
    const len = basePixels.length;

    for (let i = 0, p = 0; i < len; i += 4, p++) {
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

      const c0 = roomSegColors[m0Seg[p]];
      const c1 = roomSegColors[m1Seg[p]];
      const c2 = roomSegColors[m2Seg[p]];
      const c3 = roomSegColors[m3Seg[p]];

      const invTotal = 1.0 / totalM;
      const tr = (m0 * c0.r + m1 * c1.r + m2 * c2.r + m3 * c3.r) * invTotal;
      const tg = (m0 * c0.g + m1 * c1.g + m2 * c2.g + m3 * c3.g) * invTotal;
      const tb = (m0 * c0.b + m1 * c1.b + m2 * c2.b + m3 * c3.b) * invTotal;

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

      if (flashSegId !== -1 && topSeg[p] === flashSegId) {
        pr = pr * 0.82 + 255 * 0.18;
        pg = pg * 0.82 + 255 * 0.18;
        pb = pb * 0.82 + 255 * 0.18;
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

    if (state.activeRoom === 'all') {
      singleWrap.hidden = true;
      multiWrap.hidden = false;
      renderRoomToCanvas('hallway', document.getElementById('multi-canvas-hallway'));
      renderRoomToCanvas('stairwell', document.getElementById('multi-canvas-stairwell'));
      renderRoomToCanvas('living', document.getElementById('multi-canvas-living'));
      renderRoomToCanvas('entryway', document.getElementById('multi-canvas-entryway'));
      renderRoomToCanvas('fireplace', document.getElementById('multi-canvas-fireplace'));
    } else {
      singleWrap.hidden = false;
      multiWrap.hidden = true;
      renderRoomToCanvas(state.activeRoom, document.getElementById('room-canvas'));
    }
    updateRecipeAndZoneUI();
  }

  function getActiveTargetColor() {
    if (state.targetMode === 'wall' && state.activeWall) {
      const { room, segId } = state.activeWall;
      if (state.wallColors[room] && state.wallColors[room][segId]) {
        return state.wallColors[room][segId];
      }
    }
    return state.zoneColors[state.activeZone];
  }

  function renderRoomWallButtons() {
    const grid = document.getElementById('room-walls-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const roomKey = state.activeRoom === 'all' ? 'hallway' : state.activeRoom;
    const segments = ROOM_WALL_SEGMENTS[roomKey] || [];
    const colors = state.wallColors[roomKey] || [];

    segments.forEach((seg, idx) => {
      const col = colors[idx] || state.zoneColors[seg.defaultZone];
      const btn = document.createElement('button');
      btn.type = 'button';
      const isSelected =
        state.targetMode === 'wall' &&
        state.activeWall.room === roomKey &&
        state.activeWall.segId === idx;
      btn.className = 'wall-seg-btn' + (isSelected ? ' active' : '');
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', String(isSelected));

      const dot = document.createElement('span');
      dot.className = 'wall-seg-dot';
      dot.style.backgroundColor = col.hex;

      const textWrap = document.createElement('span');
      textWrap.className = 'wall-seg-text';

      const strong = document.createElement('strong');
      strong.textContent = seg.name;

      const small = document.createElement('small');
      small.textContent = `${col.name} (${col.hex})`;

      textWrap.appendChild(strong);
      textWrap.appendChild(small);
      btn.appendChild(dot);
      btn.appendChild(textWrap);

      btn.addEventListener('click', () => {
        selectIndividualWall(roomKey, idx, false);
      });

      grid.appendChild(btn);
    });
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

    const badge = document.getElementById('active-target-badge');
    if (badge) {
      if (state.targetMode === 'wall') {
        const seg = ROOM_WALL_SEGMENTS[state.activeWall.room][state.activeWall.segId];
        badge.textContent = `Editing Wall: ${seg ? seg.name : 'Selected Wall'}`;
      } else {
        badge.textContent = `Editing Zone: ${ZONE_NAMES[state.activeZone]}`;
      }
    }

    document.querySelectorAll('.zone-btn').forEach((btn) => {
      const z = Number(btn.dataset.zone);
      const isActive = state.targetMode === 'zone' && z === state.activeZone;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-checked', String(isActive));
    });

    document.querySelectorAll('.recipe-chip').forEach((chip) => {
      const z = Number(chip.dataset.selectZone);
      chip.classList.toggle('active', state.targetMode === 'zone' && z === state.activeZone);
    });

    renderRoomWallButtons();
    renderSavedLayouts();
    persistWorkingState();

    const activeCol = getActiveTargetColor();
    const activeHex = activeCol.hex.toUpperCase();
    document.querySelectorAll('.swatch-card').forEach((card) => {
      card.classList.toggle('selected', card.dataset.hex === activeHex);
    });
  }

  function applyColorToActiveZone(colorObj, syncWheel = true) {
    state.lastPickedColor = { ...colorObj };

    if (state.targetMode === 'wall' && state.activeWall) {
      // Independent per-wall update: ONLY changes the clicked wall!
      const { room, segId } = state.activeWall;
      state.wallColors[room][segId] = { ...colorObj };
    } else {
      // Whole-zone update
      const z = state.activeZone;
      state.zoneColors[z] = { ...colorObj };
      syncZoneToWalls(z, colorObj);

      if (state.linkStairLayers && (z === 1 || z === 2)) {
        state.zoneColors[1] = { ...colorObj };
        state.zoneColors[2] = { ...colorObj };
        syncZoneToWalls(1, colorObj);
        syncZoneToWalls(2, colorObj);
      }
    }

    if (syncWheel) {
      const rgb = hexToRgb(colorObj.hex);
      state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
      updateWheelUI();
    } else {
      renderClosestBrandMatches(colorObj.hex);
    }

    renderActiveRoom();
  }

  let flashTimer = null;
  function selectIndividualWall(room, segId, fromCanvasClick = false) {
    state.targetMode = 'wall';
    state.activeWall = { room, segId };

    if (fromCanvasClick && state.brushOnClick && state.lastPickedColor) {
      state.wallColors[room][segId] = { ...state.lastPickedColor };
    }

    const activeCol = state.wallColors[room][segId];
    const rgb = hexToRgb(activeCol.hex);
    state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
    updateWheelUI();

    state.flashWall = { room, segId };
    renderActiveRoom();
    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      state.flashWall = null;
      renderActiveRoom();
    }, 260);
  }

  function setActiveZone(z) {
    state.targetMode = 'zone';
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
        syncAllWallsFromZones();
        setActiveZone(state.activeZone);
        renderActiveRoom();
      });

      list.appendChild(btn);
    });
  }

  // Saved Layouts (All 4 Photos & Individual Walls)
  function setSavedStatus(msg) {
    const statusEl = document.getElementById('saved-layout-status');
    if (statusEl) {
      statusEl.textContent = msg;
    }
  }

  function getLayoutDistinctColors(layout) {
    const seen = new Set();
    const result = [];
    const addCol = (c) => {
      if (!c || !c.hex) return;
      const h = c.hex.toUpperCase();
      if (!seen.has(h)) {
        seen.add(h);
        result.push(c);
      }
    };
    if (layout.wallColors) {
      Object.keys(ROOM_WALL_SEGMENTS).forEach((room) => {
        (layout.wallColors[room] || []).forEach(addCol);
      });
    }
    (layout.zoneColors || []).forEach(addCol);
    return result.slice(0, 6);
  }

  function applySavedLayout(layout) {
    if (!layout) return;
    state.zoneColors = cloneZones(layout.zoneColors);
    state.wallColors = cloneWalls(layout.wallColors);
    state.activeLayoutId = layout.id;
    state.showOriginal = false;
    const compareBtnEl = document.getElementById('btn-compare-orig');
    if (compareBtnEl) {
      compareBtnEl.setAttribute('aria-pressed', 'false');
      compareBtnEl.textContent = 'Show Original Unpainted';
    }
    const activeCol = getActiveTargetColor();
    const rgb = hexToRgb(activeCol.hex);
    state.wheelHSL = rgbToHsl(rgb.r, rgb.g, rgb.b);
    updateWheelUI();
    renderActiveRoom();
    setSavedStatus(`Loaded layout: "${layout.name}"`);
  }

  function saveCurrentLayout(makeDefault = false) {
    const nameInput = document.getElementById('input-layout-name');
    const rawName = nameInput ? nameInput.value.trim() : '';
    const autoName = `Layout #${state.savedLayouts.length + 1}: ${state.zoneColors[3].name} + ${state.zoneColors[1].name}`;
    const finalName = rawName || autoName;

    if (makeDefault) {
      state.savedLayouts.forEach((l) => {
        l.isDefault = false;
      });
    }

    const newLayout = {
      id: 'layout-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      name: finalName,
      isDefault: Boolean(makeDefault),
      zoneColors: cloneZones(state.zoneColors),
      wallColors: cloneWalls(state.wallColors)
    };

    state.savedLayouts.unshift(newLayout);
    state.activeLayoutId = newLayout.id;
    if (nameInput) nameInput.value = '';
    persistSavedLayouts();
    persistWorkingState();
    renderSavedLayouts();
    setSavedStatus(
      makeDefault
        ? `Saved & set as default startup layout: "${finalName}"`
        : `Saved layout: "${finalName}"`
    );
  }

  function setCurrentAsDefaultLayout() {
    const nameInput = document.getElementById('input-layout-name');
    const rawName = nameInput ? nameInput.value.trim() : '';

    // If user typed a new name, create a new layout and mark it default
    if (rawName) {
      saveCurrentLayout(true);
      return;
    }

    // If an existing layout is active, update it with current wall colors and make it default
    let target = state.savedLayouts.find((l) => l.id === state.activeLayoutId);
    if (!target && state.savedLayouts.length > 0) {
      target = state.savedLayouts.find((l) => l.isDefault) || state.savedLayouts[0];
    }

    if (target) {
      state.savedLayouts.forEach((l) => {
        l.isDefault = l.id === target.id;
      });
      target.zoneColors = cloneZones(state.zoneColors);
      target.wallColors = cloneWalls(state.wallColors);
      state.activeLayoutId = target.id;
      persistSavedLayouts();
      persistWorkingState();
      renderSavedLayouts();
      setSavedStatus(`Updated & set as default startup layout: "${target.name}"`);
    } else {
      saveCurrentLayout(true);
    }
  }

  function renderSavedLayouts() {
    const container = document.getElementById('saved-layouts-list');
    if (!container) return;
    container.innerHTML = '';

    state.savedLayouts.forEach((layout) => {
      const card = document.createElement('div');
      const isActive = layout.id === state.activeLayoutId;
      card.className = 'saved-layout-card' + (isActive ? ' active' : '');
      card.setAttribute('role', 'listitem');

      const mainBtn = document.createElement('button');
      mainBtn.type = 'button';
      mainBtn.className = 'saved-layout-main';
      mainBtn.title = 'Click to load this layout across all 4 photos';

      const info = document.createElement('div');
      info.className = 'saved-layout-info';

      const titleRow = document.createElement('div');
      titleRow.className = 'saved-layout-title-row';

      const nameEl = document.createElement('span');
      nameEl.className = 'saved-layout-name';
      nameEl.textContent = layout.name;
      titleRow.appendChild(nameEl);

      if (layout.isDefault) {
        const badge = document.createElement('span');
        badge.className = 'saved-layout-badge';
        badge.textContent = 'Default';
        titleRow.appendChild(badge);
      }

      const distinctCols = getLayoutDistinctColors(layout);
      const subEl = document.createElement('span');
      subEl.className = 'saved-layout-sub';
      subEl.textContent = distinctCols.map((c) => c.name).slice(0, 3).join(' + ');

      info.appendChild(titleRow);
      info.appendChild(subEl);

      const swatchesWrap = document.createElement('div');
      swatchesWrap.className = 'saved-layout-swatches';
      distinctCols.forEach((c) => {
        const dot = document.createElement('span');
        dot.className = 'saved-layout-dot';
        dot.style.backgroundColor = c.hex;
        dot.title = `${c.name} (${c.hex})`;
        swatchesWrap.appendChild(dot);
      });

      mainBtn.appendChild(info);
      mainBtn.appendChild(swatchesWrap);
      mainBtn.addEventListener('click', () => {
        applySavedLayout(layout);
      });

      const actionsRow = document.createElement('div');
      actionsRow.className = 'saved-layout-actions';

      const loadBtn = document.createElement('button');
      loadBtn.type = 'button';
      loadBtn.className = 'btn-layout-action' + (isActive ? ' primary' : '');
      loadBtn.textContent = isActive ? 'Active (Reload)' : 'Load';
      loadBtn.addEventListener('click', () => {
        applySavedLayout(layout);
      });

      const updateBtn = document.createElement('button');
      updateBtn.type = 'button';
      updateBtn.className = 'btn-layout-action';
      updateBtn.textContent = 'Overwrite';
      updateBtn.title = 'Save current wall colors over this layout';
      updateBtn.addEventListener('click', () => {
        layout.zoneColors = cloneZones(state.zoneColors);
        layout.wallColors = cloneWalls(state.wallColors);
        state.activeLayoutId = layout.id;
        persistSavedLayouts();
        persistWorkingState();
        renderSavedLayouts();
        setSavedStatus(`Updated layout: "${layout.name}" with current wall colors`);
      });

      const defaultBtn = document.createElement('button');
      defaultBtn.type = 'button';
      defaultBtn.className = 'btn-layout-action';
      defaultBtn.textContent = layout.isDefault ? 'Is Default' : 'Set Default';
      defaultBtn.addEventListener('click', () => {
        state.savedLayouts.forEach((l) => {
          l.isDefault = l.id === layout.id;
        });
        persistSavedLayouts();
        renderSavedLayouts();
        setSavedStatus(`Set "${layout.name}" as default startup layout`);
      });

      actionsRow.appendChild(loadBtn);
      actionsRow.appendChild(updateBtn);
      actionsRow.appendChild(defaultBtn);

      if (state.savedLayouts.length > 1) {
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn-layout-action danger';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
          const wasDefault = layout.isDefault;
          state.savedLayouts = state.savedLayouts.filter((l) => l.id !== layout.id);
          if (wasDefault && state.savedLayouts.length > 0) {
            state.savedLayouts[0].isDefault = true;
          }
          if (state.activeLayoutId === layout.id) {
            state.activeLayoutId = state.savedLayouts[0] ? state.savedLayouts[0].id : null;
          }
          persistSavedLayouts();
          renderSavedLayouts();
          setSavedStatus(`Deleted layout: "${layout.name}"`);
        });
        actionsRow.appendChild(delBtn);
      }

      card.appendChild(mainBtn);
      card.appendChild(actionsRow);
      container.appendChild(card);
    });
  }

  // Interactive 2D Color Wheel + BeautiTone & Behr Sample Markers
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

    // Plot BeautiTone sample dots (circles) on the wheel if enabled
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

    // Plot Behr sample markers (squares) on the wheel if enabled
    if (state.showBehrPins) {
      BEHR_CATALOG.forEach((behr) => {
        const rad = (behr.hsl.h * Math.PI) / 180;
        const dist = (behr.hsl.s / 100) * (radius - 6);
        const px = radius + Math.cos(rad) * dist;
        const py = radius + Math.sin(rad) * dist;

        const isNearLightness = Math.abs(behr.hsl.l - lightness) <= 18;
        const half = isNearLightness ? 4.0 : 2.5;
        wheelCtx.fillStyle = behr.hex;
        wheelCtx.fillRect(px - half, py - half, half * 2, half * 2);
        wheelCtx.lineWidth = isNearLightness ? 1.5 : 1;
        wheelCtx.strokeStyle = isNearLightness ? '#1B1A17' : 'rgba(27, 26, 23, 0.45)';
        wheelCtx.strokeRect(px - half, py - half, half * 2, half * 2);
      });
    }
  }

  // Render Top 3 Closest Matches for a Given Brand Catalog
  function populateMatchGrid(containerId, hex, catalog) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const closest = findClosestCatalogColors(hex, catalog, 3);
    closest.forEach(({ item, dist, similarity }) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bt-match-card' + (dist < 1.5 ? ' exact' : '');
      btn.setAttribute('role', 'listitem');

      const topRow = document.createElement('div');
      topRow.className = 'bt-match-top';

      const sw = document.createElement('span');
      sw.className = 'bt-match-swatch';
      sw.style.backgroundColor = item.hex;

      const badge = document.createElement('span');
      badge.className = 'bt-match-badge';
      badge.textContent = dist < 1.2 ? 'Exact Match' : `${similarity}% Match`;

      topRow.appendChild(sw);
      topRow.appendChild(badge);

      const nameEl = document.createElement('span');
      nameEl.className = 'bt-match-name';
      nameEl.textContent = item.name;

      const codeEl = document.createElement('span');
      codeEl.className = 'bt-match-code';
      codeEl.textContent = `${item.code} | ${item.hex}`;

      btn.appendChild(topRow);
      btn.appendChild(nameEl);
      btn.appendChild(codeEl);

      btn.addEventListener('click', () => {
        state.selectedBtLookup = item;
        renderBtLookupResult(item);
        applyColorToActiveZone(item, true);
      });

      container.appendChild(btn);
    });
  }

  function renderClosestBrandMatches(hex) {
    populateMatchGrid('bt-closest-list', hex, BEAUTITONE_CATALOG);
    populateMatchGrid('behr-closest-list', hex, BEHR_CATALOG);
  }

  // Direction B: Behr & BeautiTone Catalog Lookup -> HEX Code & Cross-Brand Match
  const inputBtSearch = document.getElementById('input-bt-search');
  const selectBtCatalog = document.getElementById('select-bt-catalog');
  const btConversionResult = document.getElementById('bt-conversion-result');

  function populateBtDropdown(filterQuery = '') {
    const q = filterQuery.trim().toLowerCase();
    const basePool =
      state.brandFilter === 'Behr'
        ? BEHR_CATALOG
        : state.brandFilter === 'BeautiTone'
          ? BEAUTITONE_CATALOG
          : ALL_BRAND_CATALOG;

    const filtered = basePool.filter(
      (item) =>
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.hex.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.family.toLowerCase().includes(q)
    );

    selectBtCatalog.innerHTML = '';
    if (filtered.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'No matching Behr or BeautiTone color found';
      selectBtCatalog.appendChild(opt);
      return;
    }

    filtered.forEach((item) => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = `[${item.brand}] ${item.name} (${item.code}) -> ${item.hex}`;
      if (state.selectedBtLookup && state.selectedBtLookup.id === item.id) {
        opt.selected = true;
      }
      selectBtCatalog.appendChild(opt);
    });

    if (!filtered.some((b) => state.selectedBtLookup && b.id === state.selectedBtLookup.id)) {
      state.selectedBtLookup = filtered[0];
    }
    renderBtLookupResult(state.selectedBtLookup);
  }

  function renderBtLookupResult(item) {
    if (!item || !btConversionResult) return;
    btConversionResult.innerHTML = '';

    document.getElementById('bt-converted-readout').textContent =
      `${item.brand} ${item.code} = ${item.hex} (LRV ${item.lrv})`;

    const left = document.createElement('div');
    left.className = 'bt-result-left';

    const sw = document.createElement('span');
    sw.className = 'bt-result-swatch';
    sw.style.backgroundColor = item.hex;

    const meta = document.createElement('div');
    meta.className = 'bt-result-meta';

    const title = document.createElement('span');
    title.className = 'bt-result-title';
    title.textContent = `${item.brand} ${item.name} (${item.code})`;

    const specs = document.createElement('span');
    specs.className = 'bt-result-specs';
    specs.textContent = `HEX: ${item.hex} | RGB: (${item.rgb.r}, ${item.rgb.g}, ${item.rgb.b}) | LRV: ${item.lrv}`;

    // Cross-brand closest equivalent (Behr <-> BeautiTone)
    const otherCatalog = item.brand === 'Behr' ? BEAUTITONE_CATALOG : BEHR_CATALOG;
    const crossClosest = findClosestCatalogColors(item.hex, otherCatalog, 1)[0];
    const crossSpan = document.createElement('span');
    crossSpan.className = 'bt-cross-match';
    if (crossClosest) {
      const crossItem = crossClosest.item;
      crossSpan.textContent = `Closest ${crossItem.brand} match: ${crossItem.name} (${crossItem.code}) ${crossItem.hex}`;
    }

    meta.appendChild(title);
    meta.appendChild(specs);
    if (crossClosest) meta.appendChild(crossSpan);
    left.appendChild(sw);
    left.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'bt-result-actions';

    const applyBtn = document.createElement('button');
    applyBtn.type = 'button';
    applyBtn.className = 'btn btn-primary btn-compact';
    applyBtn.textContent = 'Apply to Wall';
    applyBtn.addEventListener('click', () => {
      applyColorToActiveZone(item, true);
    });

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn btn-secondary btn-compact';
    copyBtn.textContent = `Copy ${item.hex}`;
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(item.hex);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = `Copy ${item.hex}`;
        }, 1400);
      }
    });

    actions.appendChild(applyBtn);
    actions.appendChild(copyBtn);

    if (crossClosest) {
      const swapBtn = document.createElement('button');
      swapBtn.type = 'button';
      swapBtn.className = 'btn btn-secondary btn-compact';
      swapBtn.textContent = `Try ${crossClosest.item.brand} Match`;
      swapBtn.addEventListener('click', () => {
        state.selectedBtLookup = crossClosest.item;
        renderBtLookupResult(crossClosest.item);
        applyColorToActiveZone(crossClosest.item, true);
      });
      actions.appendChild(swapBtn);
    }

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
      const id = selectBtCatalog.value;
      const found = ALL_BRAND_CATALOG.find((b) => b.id === id);
      if (found) {
        state.selectedBtLookup = found;
        renderBtLookupResult(found);
        applyColorToActiveZone(found, true);
      }
    });
  }

  document.querySelectorAll('[data-brand-filter]').forEach((pill) => {
    pill.addEventListener('click', () => {
      state.brandFilter = pill.dataset.brandFilter;
      document.querySelectorAll('[data-brand-filter]').forEach((p) => {
        p.classList.toggle('active', p === pill);
      });
      populateBtDropdown(inputBtSearch ? inputBtSearch.value : '');
    });
  });

  const chkBtPins = document.getElementById('chk-show-bt-pins');
  if (chkBtPins) {
    chkBtPins.addEventListener('change', (e) => {
      state.showBtPins = e.target.checked;
      drawColorWheel(state.wheelHSL.l);
    });
  }

  const chkBehrPins = document.getElementById('chk-show-behr-pins');
  if (chkBehrPins) {
    chkBehrPins.addEventListener('change', (e) => {
      state.showBehrPins = e.target.checked;
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

    renderClosestBrandMatches(hex);
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

    // If sample markers are visible and user clicked directly on a marker, snap to that Behr or BeautiTone sample!
    if (allowPinSnap && (state.showBtPins || state.showBehrPins)) {
      const scale = wheelCanvas.width / rect.width;
      const clickX = (clientX - rect.left) * scale;
      const clickY = (clientY - rect.top) * scale;
      const canvasRadius = wheelCanvas.width / 2;

      const visiblePins = [
        ...(state.showBtPins ? BEAUTITONE_CATALOG : []),
        ...(state.showBehrPins ? BEHR_CATALOG : [])
      ];

      let bestPin = null;
      let bestDist = 7.5;
      visiblePins.forEach((pin) => {
        const rad = (pin.hsl.h * Math.PI) / 180;
        const d = (pin.hsl.s / 100) * (canvasRadius - 6);
        const px = canvasRadius + Math.cos(rad) * d;
        const py = canvasRadius + Math.sin(rad) * d;
        const pinDist = Math.hypot(clickX - px, clickY - py);
        if (pinDist < bestDist) {
          bestDist = pinDist;
          bestPin = pin;
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
    const current = getActiveTargetColor();
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

  // Direct Canvas Click & Hover to Select or Paint Any Individual Wall Segment
  const roomCanvas = document.getElementById('room-canvas');
  const hoverPill = document.getElementById('hover-zone-pill');

  function getWallSegmentAtCanvasEvent(e) {
    if (state.activeRoom === 'all') return null;
    const asset = state.roomAssets[state.activeRoom];
    if (!asset || !asset.topSeg) return null;

    const rect = roomCanvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * asset.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * asset.height);
    if (x < 0 || x >= asset.width || y < 0 || y >= asset.height) return null;

    const segId = asset.topSeg[y * asset.width + x];
    return segId === 255 ? null : segId;
  }

  roomCanvas.addEventListener('mousemove', (e) => {
    const segId = getWallSegmentAtCanvasEvent(e);
    if (segId === null) {
      hoverPill.hidden = true;
    } else {
      const seg = ROOM_WALL_SEGMENTS[state.activeRoom][segId];
      hoverPill.hidden = false;
      hoverPill.textContent = state.brushOnClick
        ? `Click to paint: ${seg.name} (${state.lastPickedColor.name})`
        : `Click to select wall: ${seg.name}`;
    }
  });

  roomCanvas.addEventListener('mouseleave', () => {
    hoverPill.hidden = true;
  });

  roomCanvas.addEventListener('click', (e) => {
    const segId = getWallSegmentAtCanvasEvent(e);
    if (segId !== null) {
      selectIndividualWall(state.activeRoom, segId, true);
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
      if (state.targetMode === 'wall' && state.activeRoom !== 'all') {
        state.activeWall = { room: state.activeRoom, segId: 0 };
      }
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
    if (state.linkStairLayers && state.targetMode === 'zone') {
      const source = state.activeZone === 2 ? state.zoneColors[2] : state.zoneColors[1];
      state.zoneColors[1] = { ...source };
      state.zoneColors[2] = { ...source };
      syncZoneToWalls(1, source);
      syncZoneToWalls(2, source);
      renderActiveRoom();
    }
  });

  const brushBtn = document.getElementById('btn-brush-mode');
  if (brushBtn) {
    brushBtn.addEventListener('click', () => {
      state.brushOnClick = !state.brushOnClick;
      brushBtn.setAttribute('aria-pressed', String(state.brushOnClick));
      brushBtn.textContent = state.brushOnClick
        ? 'Paint on Click (Brush): ON'
        : 'Paint on Click (Brush): OFF';
    });
  }

  const compareBtn = document.getElementById('btn-compare-orig');
  compareBtn.addEventListener('click', () => {
    state.showOriginal = !state.showOriginal;
    compareBtn.setAttribute('aria-pressed', String(state.showOriginal));
    compareBtn.textContent = state.showOriginal
      ? 'Showing Original (Click for Painted)'
      : 'Show Original Unpainted';
    renderActiveRoom();
  });

  const btnSaveLayout = document.getElementById('btn-save-layout');
  if (btnSaveLayout) {
    btnSaveLayout.addEventListener('click', () => saveCurrentLayout(false));
  }

  const btnSetDefaultLayout = document.getElementById('btn-set-default-layout');
  if (btnSetDefaultLayout) {
    btnSetDefaultLayout.addEventListener('click', () => setCurrentAsDefaultLayout());
  }

  const btnHeaderSaveLayout = document.getElementById('btn-header-save-layout');
  if (btnHeaderSaveLayout) {
    btnHeaderSaveLayout.addEventListener('click', () => saveCurrentLayout(false));
  }

  const btnHeaderSetDefault = document.getElementById('btn-header-set-default');
  if (btnHeaderSetDefault) {
    btnHeaderSetDefault.addEventListener('click', () => setCurrentAsDefaultLayout());
  }

  const inputLayoutName = document.getElementById('input-layout-name');
  if (inputLayoutName) {
    inputLayoutName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveCurrentLayout(false);
      }
    });
  }

  document.getElementById('btn-reset-default').addEventListener('click', () => {
    state.zoneColors = [
      { ...TESTED_SWATCHES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[0] },
      { ...DEFAULT_FAVOURITES[1] }
    ];
    syncAllWallsFromZones();
    state.showOriginal = false;
    compareBtn.setAttribute('aria-pressed', 'false');
    compareBtn.textContent = 'Show Original Unpainted';
    setActiveZone(3);
    renderActiveRoom();
    setSavedStatus('Reset all walls to Frittata, Grounded, and Positive Energy');
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
