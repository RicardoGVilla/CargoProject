import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Column from "../../components/Column";

const KanbanBoard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Define your state variables here
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    return (
        <DragDropContext>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      ><Column title={"To Do"} tasks={incomplete} id={"1"} />
        </div>
        </DragDropContext>

    );
}

export default KanbanBoard;
