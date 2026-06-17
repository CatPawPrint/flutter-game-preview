# Tile art drop-in

`SpriteTileSkin` loads tile faces from this directory. Drop a PNG per file
name below and switch the table to `const SpriteTileSkin()` — any file you
haven't added yet keeps drawing the vector `PaintedTileSkin` face, so you
can add art incrementally.

## File names (35 total)

| Group | Files |
| --- | --- |
| 萬 characters | `m1.png` … `m9.png` |
| 索 bamboo | `s1.png` … `s9.png` |
| 筒 dots | `p1.png` … `p9.png` |
| 風 winds (東南西北) | `we.png` `ws.png` `ww.png` `wn.png` |
| 箭 dragons (中發白) | `dr.png` `dg.png` `dw.png` |
| back | `back.png` |

## Art guidance

- Draw **only the flat tile face** (the ivory front + its glyph/pips). The
  3D body edge, lift shadow, selection ring and dim state are composited by
  `TileWidget` around the image, so they stay consistent across skins.
- Aspect ratio ≈ the tile slot, `tileWidth : tileHeight` (default 40 : 54 ≈
  0.74). Export at a comfortable multiple, e.g. 120 × 162 px (3×) or larger
  for crisp scaling.
- Transparent corners are fine — they sit on the drawn tile body.
- For a "3D look", bake thickness/lighting into the face art (as commercial
  mahjong apps do); the pre-rendered look composites cleanly with the
  perspective discard pool.

These files are declared as package assets in `pubspec.yaml`
(`flutter: assets: - assets/tiles/`), so any app depending on `mahjong`
bundles them automatically.
