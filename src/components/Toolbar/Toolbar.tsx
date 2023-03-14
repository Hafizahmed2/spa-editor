import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTool } from "../../app/editorSlice";
import { ShapeType } from "../Shapes/types";
import uuid from 'react-uuid'

export const Toolbar = () => {
  const dispatch = useDispatch();

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
      position: {
        x: 0,
        y: 0
      }
    }
    return Shape_obj
  }

  const Shapes = [
    'triangle',
    'square',
    'hexagon'
  ]

  const DragStarted = (e: React.DragEvent<HTMLButtonElement>, element: string) => {
    e.dataTransfer.setData('elements', JSON.stringify(ParseElement(element)))
  }

  return (
    <div>
      <div className="tool-buttons">
        <button onClick={() => handleToolClick("select")}>Select</button>
        <button onClick={() => handleToolClick("move")}>Move</button>
        <button onClick={() => handleToolClick("closestPoints")}>Closest Point</button>
      </div>
      <div>
        {Shapes.map((shape) => {
          return <button onDragStart={e => DragStarted(e, shape)} draggable={true}>{shape}</button>
        })}
      </div>
    </div>
  );
};

