const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80">
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
