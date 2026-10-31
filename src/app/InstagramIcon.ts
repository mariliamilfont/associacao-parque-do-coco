import { createLucideIcon } from "lucide-react";

// o lucide novo não traz ícones de marca
const InstagramIcon = createLucideIcon("instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "frame" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "lens" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "dot" }],
]);

export default InstagramIcon;
