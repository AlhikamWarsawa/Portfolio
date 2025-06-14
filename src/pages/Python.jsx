import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "../components/snake/useInterval";
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS,
} from "../components/snake/constants";

const SnakeGame = ({ scoreSnake = () => {} }) => {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useInterval(() => gameLoop(), speed);

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    };

    const moveSnake = (e) => {
        const key = e.key.toLowerCase();
        if (key === 'w' && dir[1] !== 1) setDir([0, -1]);
        if (key === 's' && dir[1] !== -1) setDir([0, 1]);
        if (key === 'a' && dir[0] !== 1) setDir([-1, 0]);
        if (key === 'd' && dir[0] !== -1) setDir([1, 0]);
        if (key === ' ' && (speed === null || gameOver)) startGame();
    };

    const createApple = () =>
        apple.map(
            (_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
        );

    const checkCollision = (piece, snk = snake) => {
        if (
            piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0
        )
            return true;

        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }
        return false;
    };

    const checkAppleCollision = (newSnake) => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [
            snakeCopy[0][0] + dir[0],
            snakeCopy[0][1] + dir[1],
        ];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    };

    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setGameOver(false);
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);

        // Draw Snake
        context.fillStyle = "#2ecc71"; // Green color
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));

        // Draw Apple
        context.fillStyle = "#e74c3c"; // Red color
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver]);

    // Handle key presses
    useEffect(() => {
        window.addEventListener("keydown", moveSnake);
        return () => {
            window.removeEventListener("keydown", moveSnake);
        };
    });

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Python</h2>
            <div style={styles.gameContainer} tabIndex="0">
                <canvas
                    style={styles.canvas}
                    ref={canvasRef}
                    width={`${CANVAS_SIZE[0]}px`}
                    height={`${CANVAS_SIZE[1]}px`}
                />
                {gameOver && (
                    <div style={styles.gameOverOverlay}>
                        <div style={styles.gameOverText}>
                            GAME OVER
                        </div>
                    </div>
                )}
                {!speed && !gameOver && (
                    <div style={styles.startMessage}>
                        Press <strong>Spacebar</strong> to Start
                    </div>
                )}
            </div>
            <p style={styles.score}>Score: {snake.length - 2}</p>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#011627",
        color: "#43D9AD",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "20px",
    },
    gameContainer: {
        position: "relative",
        outline: "none",
    },
    canvas: {
        backgroundColor: "#010C15",
        border: "2px solid #1E2D3D",
        borderRadius: "10px",
    },
    gameOverOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#43D9AD",
        fontSize: "2rem",
        textAlign: "center",
        borderRadius: "10px",
    },
    gameOverText: {
        lineHeight: "1.5",
    },
    startMessage: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#43D9AD",
        fontSize: "1.5rem",
        textAlign: "center",
    },
    score: {
        marginTop: "20px",
        fontSize: "1.2rem",
    },
};

export default SnakeGame;
