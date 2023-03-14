import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "./geometry";

export interface Shape {
  id: number;
  type: "trinagle" | "square" | "hexagon";
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface EditorState {
  activeTool: "select" | "move" | "closestPoints";
  shapes: Shape[];
  closestPoint: { shapeId: number; point: Point } | null;
  selection: Shape[];
}

const initialState: EditorState = {
  activeTool: "select",
  shapes: [],
  closestPoint: null,
  selection: [],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<Shape>) => {
      state.shapes.push(action.payload);
    },
    setActiveTool: (
      state,
      action: PayloadAction<EditorState["activeTool"]>
    ) => {
      state.activeTool = action.payload;
    },
  },
});

export const { addShape, setActiveTool } = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
