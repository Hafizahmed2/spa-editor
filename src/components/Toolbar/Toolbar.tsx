import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTool } from "../../app/editorSlice";
import { ShapeType } from "../Shapes/types";
import uuid from "react-uuid";
import "./toolbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const Toolbar = () => {
  const dispatch = useDispatch();
  const { activeTool } = useSelector((state: RootState) => state.editor);

  const handleToolClick = (tool: "select" | "move" | "closestPoints") => {
    dispatch(setActiveTool(tool));
  };

  const ParseElement = (element: string) => {
    const Shape_obj: ShapeType = {
      id: uuid(),
      type: element,
      isSelected: false,
      width: 50,
      height: 50,
      x: 0,
      y: 0,
    };
    return Shape_obj;
  };

  const Shapes = ["triangle", "square", "hexagon"];

  const DragStarted = (
    e: React.DragEvent<HTMLButtonElement>,
    element: string
  ) => {
    e.dataTransfer.setData("elements", JSON.stringify(ParseElement(element)));
  };

  return (
    <div>
      <div className="tool-buttons">
        <button className="button" onClick={() => handleToolClick("select")}>
          Select
        </button>
        <button className="button" onClick={() => handleToolClick("move")}>
          Move
        </button>
        <button
          className="button"
          onClick={() => handleToolClick("closestPoints")}
        >
          Closest Point
        </button>
      </div>
      <div className="shape-buttons">
        {Shapes.map((shape) => {
          return (
            <button
              className="button"
              onDragStart={(e) => DragStarted(e, shape)}
              draggable={activeTool === "select"}
            >
              {shape}
            </button>
          );
        })}
      </div>
    </div>
  );
};
