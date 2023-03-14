export type ShapeType = {
    id: string;
    type: string;
    position: { x: number; y: number };
    isSelected: boolean;
    width: number;
    height: number
};

export interface Shape {
    id: string;
    type: ShapeType;
    x: number;
    y: number;
    width: number;
    height: number;
}

export type ActiveTool = "select" | "move" | "closestPoints";
