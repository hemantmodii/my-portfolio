import './Loading.css';

const Loading = () => {
  const colors = [
    "darkviolet",
    "indigo",
    "blue",
   //  "green",
   //  "yellow",
   //  "orange",
   //  "red",
  ];

  return (
    <div className="loading-root">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="row"
          style={{ animationDelay: `${i * 300 - 600}ms` }} // Correctly set animation delay
        >
          {colors.map((color, j) => (
            <div
              key={j}
              className="dot"
              style={{ backgroundColor: color }} // Set color directly
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Loading;
