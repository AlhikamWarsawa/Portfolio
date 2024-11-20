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

const Python = ({ scoreSnake = () => {} }) => {
    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [hideStartBtn, setHideStartBtn] = useState(false);

    useInterval(() => gameLoop(), speed);

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
        setHideStartBtn(false);
    };

    const moveSnake = ({ keyCode }) =>
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

    const createApple = () =>
        apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

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
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
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
        setHideStartBtn(true);
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        const gradient = context.createLinearGradient(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        gradient.addColorStop(0, "#3772a2");
        gradient.addColorStop(1, "#ffd642");
        context.fillStyle = gradient;
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "#FEA55F";
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#011627]">
            <h2 className="text-2xl text-[#43D9AD] mb-4">Khodam Python</h2>
            <div
                tabIndex="0"
                onKeyDown={(e) => moveSnake(e)}
                className="relative focus:outline-none"
            >
                <canvas
                    className="bg-[#010C15] border-2 border-[#1E2D3D] rounded-lg"
                    ref={canvasRef}
                    width={`${CANVAS_SIZE[0]}px`}
                    height={`${CANVAS_SIZE[1]}px`}
                />
                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[#43D9AD] text-2xl">
                        UNDEFINED!
                    </div>
                )}
                {!hideStartBtn && (
                    <button
                        onClick={startGame}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FEA55F] text-[#011627] py-2 px-4 rounded-lg hover:bg-[#FEA55F]/80 transition-all"
                    >
                        Start Coding
                    </button>
                )}
            </div>
            <p className="mt-4 text-[#43D9AD]">Error: {snake.length - 2}</p>
        </div>
    );
};

export default Python;