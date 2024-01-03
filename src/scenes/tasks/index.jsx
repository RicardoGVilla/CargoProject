import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from "../../components/Column"
import { Box } from "@mui/material";
import { itemsFromBackend } from '../../data/mockData';


// Defining properties for kanban board 
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
      mt: "30px",
    }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Box
            key={columnId}
            sx={{
              margin: 1, 
              borderRadius: "10px", 
              minWidth: 300, 
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
