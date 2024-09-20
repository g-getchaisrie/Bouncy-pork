import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["https://th.bing.com/th/id/R.96e9dc89447ac28dce372f10a49aa234?rik=eWn2AmoBJVdY5g&pid=ImgRaw&r=0", "https://scontent.fbkk33-2.fna.fbcdn.net/v/t39.30808-6/279591131_117538467604669_8217254012377704025_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHismYOFMYvE36X1FdzTc4DB3HkX5EPVuUHceRfkQ9W5YehQO8rT7OLeERV9Yo-5Fsvz3d6fRyUjvloIMbRzMlH&_nc_ohc=gbUXy-QiAPcQ7kNvgGE267H&_nc_zt=23&_nc_ht=scontent.fbkk33-2.fna&_nc_gid=AfhKhGNO06zUM4VvX63XZy8&oh=00_AYByhjbOutDBakwbNL3pR_NbDYovdvZZzE-wJkZatCyFvA&oe=66F363C8"];
  const buttonImages = ["https://th.bing.com/th/id/OIP.u7aCAcj6IHRXoPHxYvc-uAHaG7?w=800&h=749&rs=1&pid=ImgDetMain", "https://png.pngtree.com/png-clipart/20230914/original/pngtree-cute-cartoon-pumpkin-sticker-vector-illustration-png-image_12164530.png", "https://tse4.mm.bing.net/th?id=OIP.kRgX9fYomRiWwRnw0vlGfQHaFj&pid=Api&P=0&h=180"];

  const increaseLevel = (increment) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 100) {
        setImageIndex(1);
      }
      return newLevel;
    });
  };

  const imageSize = `${Math.max(level * 5, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0
  };

  const cardStyle = {
    border: "2px dashed",
    padding: "20px",
    width: "500px",
    height: "500px",
    position: "relative",
    overflow: "hidden"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const buttonImageStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    margin: "10px"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    color: "#34495e",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[0]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(10)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(10)} style={buttonText}>
              Level +10
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[1]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(20)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(20)} style={buttonText}>
              Level +20
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[2]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(30)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(30)} style={buttonText}>
              Level +30
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
          </div>
        </div>
      </div>
    </div>
  );
}


