import React, { useEffect, useState, useRef, FC, useMemo } from "react";
import { fabric } from "fabric";
import { CANVAS_CENTER, CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants/canvas-constants";
import { usePrevious } from "../../helpers/hook-helpers";
import { FINDING_RADIAL_TYPE } from "../../constants/data-constants";
import { Props } from "../shared-props/findings";

const Canvas: FC<Props> = ({ 
  findings,
  selectedFinding, 
  itemSelectedHandler 
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [techTaskCanvas, setTechTaskCanvas] = useState<fabric.Canvas | null>(null);      
    const prevFinding = usePrevious( selectedFinding );

    useMemo(() => {
      if (!techTaskCanvas)
        return;

      techTaskCanvas!.on('mouse:over', function(e) {
        try {
          const indexObject = (e.target! as fabric.Group).item(2);
          const index = parseInt((indexObject as unknown as fabric.Text)!.text!);

          itemSelectedHandler(index + 1);
        } catch (e: any) {
          return;
        }
      });
    
      techTaskCanvas!.on('mouse:out', function(e) {
        itemSelectedHandler(0);
      });
    }, [techTaskCanvas, itemSelectedHandler]);

    useEffect(() => {
      const options = {};
      const canvas = new fabric.Canvas(canvasRef.current, options);
      setTechTaskCanvas(canvas);
  
      return () => {
        setTechTaskCanvas(null);
        canvas.dispose();
      };
    }, []);

    const covertRadialToAbsolute = (hours: number, minutes: number, distanceFromCenter: number) => {
      // Convert hours + minutes to angle
      const degrees = ((hours/12) * 360) + ((minutes/60) * 30);
      const radians = degrees * (Math.PI / 180);
      return {
        x: CANVAS_CENTER.x + distanceFromCenter * Math.cos(radians),
        y: CANVAS_CENTER.y + distanceFromCenter * Math.sin(radians)
      }
    }

    const generateFinding = (x: number, y: number, label: string, index: number) : any => {
      const circle = new fabric.Circle({
        radius: 10,
        fill: "red",
        left: 0,
        top: 0,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });

      const text = new fabric.Text(label, {
        fontFamily: "Arial",
        fontSize: 12,
        fill: "yellow",
        left: 24,
        top: 0,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });

      const indexHolder = new fabric.Text(index.toString(), {
        visible: false
      });

      return new fabric.Group([circle, text, indexHolder], {
        left: x,
        top: y,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });
    } 

    useEffect(() => {
      findings.forEach(({ type, x, y, label, hours, minutes, distanceFromCenter }: any, index: number) => {
        if (!techTaskCanvas) {
          return;
        }
        
        let absolutePositioning = { x, y }; 

        if (type === FINDING_RADIAL_TYPE) {
          absolutePositioning = covertRadialToAbsolute(hours, minutes, distanceFromCenter);
        }

        const finding = generateFinding(absolutePositioning.x, absolutePositioning.y, label, index);
        
        techTaskCanvas.add(finding);
      });
      
    }, [findings, techTaskCanvas]);

    useEffect(() => {
      if (techTaskCanvas == null) {
        return;
      }      

      try {
        if (prevFinding) {
          techTaskCanvas.item(prevFinding - 1).getObjects().at(0)?.set({
            fill: "red"
          });
        }

        if (selectedFinding) {
          techTaskCanvas.item(selectedFinding - 1).getObjects().at(0)?.set({
            fill: "blue"
          });
        }

        techTaskCanvas.renderAll();
      } catch (e: any) {

      }
    }, [selectedFinding, prevFinding, techTaskCanvas]);
  
    return (
      <div className="Canvas">
        <div>
          <h2>Canvas</h2>
          <div className="CanvasWrapper">
            <canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvasRef} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Canvas;