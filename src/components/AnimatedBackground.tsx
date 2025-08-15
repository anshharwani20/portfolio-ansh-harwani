const AnimatedBackground = () => {
  return (
    <div className="floating-dots">
      {Array.from({ length: 50 }).map((_, index) => {
        // Generate random movement distances
        const dx = (Math.random() - 0.5) * 800; // Random x movement
        const dy = (Math.random() - 0.5) * 600; // Random y movement
        const duration = 8 + Math.random() * 12; // 8-20 seconds
        const delay = Math.random() * -20; // Start at random time

        return (
          <div
            key={index}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
              animation: `randomFloat ${duration}s ${delay}s infinite ease-in-out`,
            } as React.CSSProperties & { '--dx': string; '--dy': string }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;