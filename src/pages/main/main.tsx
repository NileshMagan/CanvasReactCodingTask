import React, { useEffect, FC } from "react";
import Canvas from "../../components/canvas/canvas.container";
import Table from "../../components/table/table.container";
import { FetchFindingsRequest, SetSelectedFinding, SetSelectedFindingPayload } from "../../store/findings/types";

const Main: FC<{
  fetchData: () => FetchFindingsRequest,
  setSelectedFindingId: (id: number) => SetSelectedFinding
}> = ({ 
  fetchData ,
  setSelectedFindingId
}) => {
  
  const handler = (selectedFinding: number) => {
    setSelectedFindingId(selectedFinding);
  }
  
  useEffect(() => { 
    fetchData();
    console.log('getting data');
  }, []);


  return (
      <div className="content-container">
        <Canvas itemSelectedHandler={(selectedFinding: number) => handler(selectedFinding)} />
        <Table itemSelectedHandler={(selectedFinding: number) => handler(selectedFinding)} />
      </div>
  );
};

export default Main;