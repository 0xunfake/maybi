await Bun.build({
  entrypoints: ['./src/index.html'],
  compile: true,
  target: 'browser',
  outdir: 'dist',
})
