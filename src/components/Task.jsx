import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

const Task = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: 'none',
            padding: '10px',
            margin: '0 0 8px 0',
            minHeight: '50px',
            backgroundColor: snapshot.isDragging ? '#ebecf0' : '#ffffff',
            color: '#17394d',
            borderRadius: '10px',
            boxShadow: '0 1px 0 rgba(9,30,66,.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ...provided.draggableProps.style,
          }}
        >
          <p style={{ margin: '0', fontWeight: 'bold' }}>{item.content}</p>
          {/* Additional elements like labels or due date can be added here */}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
