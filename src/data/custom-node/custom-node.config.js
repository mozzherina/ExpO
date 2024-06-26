import React from "react";
import CustomNode from "./CustomNode";

const config = {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 8,
  minZoom: 0.1,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  width: 800,
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "red",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "SAME",
    highlightStrokeWidth: 1.5,
    labelProperty: "name",
    // labelClass: "person-node-label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    size: {
      width: 700,
      height: 900,
    },
    strokeColor: "none",
    strokeWidth: 1.5,
    svg: "",
    symbolType: "circle",
    viewGenerator: node => <CustomNode person={node} />,
  },
  link: {
    color: "#d3d3d3",
    opacity: 1,
    semanticStrokeWidth: false,
    strokeWidth: 4,
    highlightColor: "blue",
  },
};

export default config;
