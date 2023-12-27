import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from "../../data/data/dummy";



const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

return(
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Box m="20px">
      <Header
        title="KANBAN"
      />
      <Box
        m="20px 0 0 0"
        height="100%"
        sx={{
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
</Box>
</Box>
  <KanbanComponent>
    <ColumnsDirective>
        {kanbanGrid.map((item,index) => 
        <ColumnDirective key={index} {...item} /> )}    
    </ColumnsDirective>
  </KanbanComponent>
  </div>
);
  
}

export default Tasks;