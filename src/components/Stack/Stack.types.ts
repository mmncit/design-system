import { ReactNode } from "react";

export interface StackProps {
    children: ReactNode;
    spacing: number;
    wrap: "nowrap" | "wrap" | "wrap-reverse";
    direction: "row" | "row-reverse" | "column" | "column-reverse";
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right";
    alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    
}