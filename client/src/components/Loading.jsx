import "../app.css";

export const Loading = () => {
  return (
    <div className="spinner-container absolute top-0 left-0 bg-gray-950/80">
      <div className="loading-spinner"></div>
    </div>
  );
};
