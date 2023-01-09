import { useEffect, useState } from "react";
import "./App.css";

const xCells = 10;
const yCells = 10;

const tileWidth = 50;
const tileHeight = 50;
const headColor = "green";
const bodyColor = "red";
const speed = 500;

function Tile({ x, y, isHead }) {
  const style = {
    position: "absolute",
    left: x * tileWidth,
    top: y * tileHeight,
    width: tileWidth,
    height: tileHeight,
    backgroundColor: isHead ? headColor : bodyColor,
  };
  return <div className="" style={style}></div>;
}

function App() {
  const [state, setState] = useState(0);

  const directions = ["Up", "Left", "Down", "Right"];

  const [direction, setDirection] = useState("Down");

  const [snake, setSnake] = useState([
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
  ]);

  const changeDirection = (movingDir) => {
    console.log(movingDir);
    const index = directions.findIndex((d) => d === movingDir);
    if (index !== -2) {
      const currentIndex = directions.findIndex((d) => d === direction);

      if (index % 2 !== currentIndex % 2) {
        setDirection(movingDir);
      }
    }
  };

  // console.log(direction);

  const moveRight = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x > xCells - snake.length + 1) {
          return { x: 0, y: item.y };
        }
        return { x: item.x + 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveLeft = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x > xCells - snake.length + 1) {
          return { x: xCells - 1, y: item.y };
        }
        return { x: item.x + 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveUp = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y === 0) {
          return { x: item.x, y: yCells - 1 };
        }
        return { x: item.x, y: item.y - 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveDown = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y > yCells - snake.length + 1) {
          return { x: item.x, y: 0 };
        }
        return { x: item.x, y: item.y + 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };
  // setTimeout(() => {
  //   moveDown();
  // }, 2000);

  const handleKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowDown":
        changeDirection("Down");

        break;
      case "ArrowUp":
        changeDirection("Up");

        break;
      case "ArrowRight":
        changeDirection("Right");

        break;
      case "ArrowLeft":
        changeDirection("Left");

        break;
      default:
        console.log("Non binary key");
    }
  };

  useEffect(() => {
    switch (direction) {
      case "Up":
        moveUp();
        break;
      case "Down":
        moveDown();
        break;
      case "Right":
        moveRight();
        break;
      case "Left":
        moveLeft();
        break;
    }
  }, [state]);

  setTimeout(() => {
    setState(state + 1);
  }, speed);
  return (
    <div className="wrapper" onKeyDown={handleKeyDown} tabIndex={0}>
      <h1>Snake game</h1>
      <div
        className="board"
        style={{ width: xCells * tileWidth, height: yCells * tileHeight }}
      >
        {snake.map((item, index) => {
          const isHead = index === 0;
          return (
            <Tile
              x={item.x}
              y={item.y}
              isHead={isHead}
              key={`snake-tile-${index}`}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}

export default App;
