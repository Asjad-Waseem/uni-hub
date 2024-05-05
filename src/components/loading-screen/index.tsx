import "assets/styles/components/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div data-testid="loading-screen" className="loading-screen">
      <div data-testid="loading-spinner" className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;
