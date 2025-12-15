export default function BlurredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Large purple blob - top left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-blob" />

      {/* Large blue blob - top right */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      {/* Pink blob - bottom left */}
      <div className="absolute -bottom-40 -left-20 w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />

      {/* Cyan blob - center right */}
      <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px] animate-blob animation-delay-1000" />

      {/* Small accent blob - center */}
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-indigo-500/25 rounded-full blur-[100px] animate-blob animation-delay-3000" />

      {/* Noise texture overlay (optional - adds grain) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />
    </div>
  );
}
