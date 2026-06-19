export default function figmaAssets() {
  return {
    name: 'figma-assets',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset:' + id.replace('figma:asset/', '');
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        const filename = id.replace('\0figma-asset:', '');
        return `export default '/images/${filename}'`;
      }
    },
  };
}
