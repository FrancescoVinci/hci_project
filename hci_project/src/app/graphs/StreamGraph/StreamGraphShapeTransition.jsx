"use client"

import {useState} from "react";
import {StreamGraph} from "./StreamGraph";
import {data} from "./data";
import {Select, SelectItem} from "@nextui-org/react";

const BUTTON_HEIGHT = 100;

export const StreamGraphShapeTransition = ({width , height}) => {
    const [offsetType, setOffsetType] = useState("silouhette");
    const [curveType, setCurveType] = useState("catMullRom");

    return (
        <div>
            <div
                style={{
                    height: BUTTON_HEIGHT,
                    display: "flex",
                    marginTop: 20,
                    alignItems: "center",
                }}
                className="gap-4"
            >
                <Select
                    color="primary"
                    label="Offset type"
                    placeholder="Select an Offset type"
                    onChange={(e) => {
                        setOffsetType(e.target.value);
                    }}
                    value={offsetType}
                    defaultSelectedKeys={["silouhette"]}

                >
                    <SelectItem key="silouhette" value="silouhette">Silouhette</SelectItem>
                    <SelectItem key="none" value="none">None</SelectItem>
                    <SelectItem key="wiggle" value="wiggle">Wiggle</SelectItem>
                    <SelectItem key="diverging" value="diverging">Diverging</SelectItem>
                    <SelectItem key="expand" value="expand">Expand</SelectItem>
                </Select>

                <Select
                    color="primary"
                    label="Curve type"
                    placeholder="Select a Curve type"
                    onChange={(e) => {
                        setCurveType(e.target.value);
                    }}
                    value={curveType}
                    defaultSelectedKeys={["curveBasis"]}

                >
                    <SelectItem key="curveBasis" value="curveBasis">Cubic basis spline</SelectItem>
                    <SelectItem key="bumpX" value="bumpX">Bezier Curve Horizontal</SelectItem>
                    <SelectItem key="bumpY" value="bumpY">Bezier Curve Vertical</SelectItem>
                    <SelectItem key="curveCardinal" value="curveCardinal">Cubic cardinal spline</SelectItem>
                    <SelectItem key="catMullRom" value="catMullRom">Catmull–Rom spline</SelectItem>
                    <SelectItem key="curveLinear" value="curveLinear">Polyline</SelectItem>
                    <SelectItem key="curveNatural" value="curveNatural">Natural cubic spline</SelectItem>
                    <SelectItem key="curveStep" value="curveStep">Step function</SelectItem>
                </Select>
            </div>
            <StreamGraph
                data={data}
                width={width}
                height={height - BUTTON_HEIGHT}
                offsetType={offsetType}
                curveType={curveType}
            />
        </div>
    );
};
