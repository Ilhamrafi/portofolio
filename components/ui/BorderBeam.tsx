export default function BorderBeam() {
  return (
    <div className="absolute -inset-[3px] rounded-full overflow-hidden">
      <div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '3s' }}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '50%',
            height: '4px',
            top: '50%',
            left: '50%',
            transformOrigin: '0 0',
            filter: 'blur(3px)',
            boxShadow: '0 0 30px 8px rgba(255, 255, 255, 0.9), 0 0 50px 15px rgba(255, 255, 255, 0.5)'
          }}
        ></div>
      </div>
    </div>
  );
}
