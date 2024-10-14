const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen relative z-30">
      <div className="flex flex-col items-center">
        <div className="loader mb-4">
          {/* Loader animation */}
          <div className="w-8 h-8 border-4 border-[#ff6d2e] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-lg text-white font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
