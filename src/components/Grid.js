import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import luma_index from "../util/rgb";

const Grid = ({ rows, columns, selectedColor }) => {
    const [grid, setGrid] = useState(() => {
        const initialGrid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push({ backgroundColor: "#fff" });
            }
            initialGrid.push(row);
        }
        return initialGrid;
    });

    const isMouseDown = useRef(false);

    const handleMouseDown = () => {
        isMouseDown.current = true;
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
    };

    const updateBackground = (i, j) => {
        const updatedGrid = [...grid];
        updatedGrid[i][j].backgroundColor = `#${selectedColor}`;
        setGrid(updatedGrid);
    };

    const handleMouseEnter = (i, j) => {
        if (isMouseDown.current) {
            const updatedGrid = [...grid];
            const backgroundColor = `#${selectedColor}`;

            updatedGrid[i][j].backgroundColor = backgroundColor;

            setGrid(updatedGrid);
        }
    };

    useEffect(() => {
        // Watch for changes in rows and columns and update the grid
        const updatedGrid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                if (grid[i] && grid[i][j]) {
                    // If the cell already exists, keep its backgroundColor
                    row.push(grid[i][j]);
                } else {
                    // If the cell doesn't exist, create a new one with the default backgroundColor
                    row.push({ backgroundColor: "#fff" });
                }
            }
            updatedGrid.push(row);
        }
        setGrid(updatedGrid);
    }, [rows, columns]);

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            isMouseDown.current = false;
        };

        window.addEventListener("mouseup", handleGlobalMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, []);

    return (
        <div
            className="grid-container"
            style={{ display: 'grid', gridTemplateColumns: `repeat(${columns + 1}, 0fr)` }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {grid.map((row, i) => (
                <React.Fragment key={`row-${i}`}>
                    <div className="row-number">{rows - i}</div>
                    {row.map((cell, j) => (
                        <button
                            key={`${i}-${j}`}
                            className="grid-item"
                            style={{
                                ...cell,
                                width: `50px`,
                                height: `50px`,
                                border: `0.5px ${luma_index(cell.backgroundColor)} dashed`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onMouseEnter={() => handleMouseEnter(i, j)}
                            onClick={() => updateBackground(i, j)}
                        >
                            <span style={{ color: luma_index(cell.backgroundColor) }}>
                                {(rows % 2 === 0 ? i % 2 === 0 : i % 2 !== 0)
                                    ? columns - j
                                    : j + 1}
                            </span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Grid;
