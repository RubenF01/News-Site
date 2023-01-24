import LoadingSpinner from "./LoadingSpinner";

const LoadingLayout = () => {
  return (
    <div className="sticky inset-0 z-50 flex items-center justify-center h-screen">
      <LoadingSpinner />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default LoadingLayout;
