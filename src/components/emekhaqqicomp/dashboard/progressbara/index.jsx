// ProgressBar.jsx
function ProgressBar() {
  return (
    <div className="relative w-full h-2 bg-gray-200 overflow-hidden rounded">
      <div className="absolute top-0 left-0 h-full w-1/2 bg-black animate-slide"></div>
    </div>
  );
}

export default ProgressBar;
