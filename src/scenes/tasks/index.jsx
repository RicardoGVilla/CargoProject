import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from "../../components/Column"
import { Box, useTheme } from "@mui/material";

// Define your initial items
const itemsFromBackend = [
  { id: '1', content: 'Review inventory levels of key products' },
  { id: '2', content: 'Coordinate with suppliers for shipment schedules' },
  { id: '3', content: 'Update logistics plan for upcoming quarter' },
  { id: '4', content: 'Assess supplier performance and compliance' },
  { id: '5', content: 'Plan for demand forecasting meeting' },
  { id: '6', content: 'Analyze transportation cost reduction strategies' }
];

// Initial data for your Kanban board
const initialColumns = {
  requested: {
    name: 'Requested',
    items: itemsFromBackend,
  },
  todo: {
    name: 'To do',
    items: [],
  },
  inProgress: {
    name: 'In Progress',
    items: [],
  },
  done: {
    name: 'Done',
    items: [],
  },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const theme = useTheme();
  const colors = theme.palette; 

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: 'green'
    }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Box
            key={columnId}
            sx={{
              backgroundColor: 'orange', // Column background color
              margin: 2, // Margin around each column
              padding: 2, // Padding inside each column
              borderRadius: 1, // Border radius for rounded corners
              minWidth: 300, // Minimum width of each column
            }}
          >
            <Column columnId={columnId} column={column} setColumns={setColumns} />
          </Box>
        ))}
      </DragDropContext>
    </Box>
  );
};

export default KanbanBoard;
