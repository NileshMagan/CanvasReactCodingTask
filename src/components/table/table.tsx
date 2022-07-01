import React, { useEffect, useState, FC } from "react";
import classnames from "classnames";
import "./table.scss";
import { Props } from "../shared-props/findings";

const Table: FC<Props> = ({ 
    findings,
    selectedFinding, 
    itemSelectedHandler 
}) => {
    const [isShown, setIsShown] = useState(false);
    const [currentSelectedFinding, setCurrentSelectedFinding] = useState(0);
  
    useEffect(() => {
        if (itemSelectedHandler) {
            itemSelectedHandler(currentSelectedFinding);
        }
    }, [isShown, currentSelectedFinding, itemSelectedHandler]);

    const findingHandler = (id: number, entered: boolean) => { 
        setCurrentSelectedFinding(id);
        setIsShown(entered);
    }

    return (
    <div>
        <h2 onClick={() => itemSelectedHandler()} >Findings</h2>
        <table className="FindingsTable">
            {findings.map((finding: any, index: number) => { // Check if findings are valid
                return (
                    <tr 
                        className={classnames({
                            highlighted: (selectedFinding  - 1) === index
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
