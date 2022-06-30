import React, { useEffect, useState, FC } from "react";
import { findConfigFile } from "typescript";
import classnames from "classnames";
import "./table.scss";

const Table: FC<{ 
    findings: any[], 
    selectedFinding: number, 
    itemSelectedHandler: Function 
}> = ({ 
    findings,
    selectedFinding, 
    itemSelectedHandler 
}) => {
    const [isShown, setIsShown] = useState(false);
    const [currentSelectedFinding, setCurrentSelectedFinding] = useState(0);
  
    useEffect(() => {
        if (isShown && itemSelectedHandler) {
            console.log("HOVERED ON: " + currentSelectedFinding);
            // itemSelectedHandler(currentSelectedFinding);
        } else if (!isShown && itemSelectedHandler) {
            console.log("HOVERED OFF: " + currentSelectedFinding);
            // itemSelectedHandler();
        }
        if (itemSelectedHandler) {
            itemSelectedHandler(currentSelectedFinding);
        }
    }, [isShown, currentSelectedFinding, itemSelectedHandler]);

    const findingHandler = (id: number, entered: boolean) => { // Need to make sure label is always unique
        setCurrentSelectedFinding(id);
        setIsShown(entered);
    }


    return (
    <div>
        <h2 onClick={() => itemSelectedHandler()} >Findings</h2>
        <table className="FindingsTable">
            {findings.map((finding: any, index: number) => {
                return (
                    <tr 
                        className={classnames({
                            highlighted: (selectedFinding  - 1) == index
                        })}
                        onClick={() => itemSelectedHandler()} 
                        onMouseEnter={() => findingHandler(finding.id, true)}
                        onMouseLeave={() => findingHandler(0, false)}
                        key={finding.label}
                    >
                        <td>{finding.label}</td>
                        <td>{finding.note}</td>
                    </tr>
                );
            })}
        </table>
    </div>
  );
};

export default Table;
