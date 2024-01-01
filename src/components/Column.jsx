import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import Task from './Task'; // Assuming Task is in a separate file
import { Box, Typography, useTheme } from "@mui/material";

const Column = ({ columnId, column, setColumns }) => {
  const theme = useTheme();
  const colors = theme.palette; 

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 10px',
      mt: "10px",
    }}>
      <Typography variant="h2" sx={{ padding: '5px' }}>{column.name}</Typography>
      <Box sx={{ margin: 1 }}>
        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                background: snapshot.isDraggingOver ? 'lightblue' : '#ebecf0', 
                padding: 1,
                width:"300px",
                minHeight: 500,
                borderRadius:"25px",
              }}
            >
              {column.items.map((item, index) => (
                <Task key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    </Box>
  );
};

export default Column;
