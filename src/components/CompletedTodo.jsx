
import React, { useState, useEffect } from 'react';
import { TableElement, HeaderRow } from './StyledComponents';

function CompletedTodo() {
  const [storedData, setData] = useState([]);

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todo')) || [];
    const completedTodos = todosFromLocalStorage.filter(todo => todo.isCompleted);
    setData(completedTodos);
  }, []);

  return (
    <div>
      {storedData.length > 0 ? (
        <TableElement>
          <thead>
            <HeaderRow>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </HeaderRow>
          </thead>
          <tbody>
            {storedData.map((item, index) => (
              <HeaderRow key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </HeaderRow>
            ))}
          </tbody>
        </TableElement>
      ) : (
        <p>No completed todos.</p>
      )}
    </div>
  );
}

export default CompletedTodo;
