export default function HeroVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange/50 shadow-[0_0_50px_rgba(255,106,0,0.3)]" />
      </div>
    </div>
  );
}
