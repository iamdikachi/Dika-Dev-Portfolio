export default function BlurredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-bg pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[450px] h-[450px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -right-20 w-[350px] h-[350px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
