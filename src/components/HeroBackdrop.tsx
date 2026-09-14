export default function HeroBackdrop() {
  return (
    <div
      className="absolute top-0 left-0 right-0 h-[700px] sm:h-[840px] lg:h-[920px] overflow-hidden pointer-events-none z-0 select-none"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <img
        src="pawel_backdrop.webp"
        alt="Atmospheric cosmic fluid background"
        className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.12]"
        style={{
          objectPosition: "25% 42%",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.08) 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.08) 85%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
}