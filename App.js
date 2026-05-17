import './App.css';

function App() {
  const sendAlert = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          alert(`🚨 Emergency Alert!\nMy location: https://maps.google.com/?q=${latitude},${longitude}`);
        },
        (error) => {
          alert("⚠️ Unable to fetch location. Please check permissions.");
        }
      );
    } else {
      alert("⚠️ Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SafeSpace Web</h1>
      <button
        onClick={sendAlert}
        style={{
          padding: "20px 40px",
          fontSize: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        🚨 Emergency Alert
      </button>
    </div>
  );
}

export default App;