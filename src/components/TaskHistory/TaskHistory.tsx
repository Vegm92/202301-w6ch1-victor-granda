import React, { useState } from "react";
import { TodoStructure } from "../../data/types";
import { useAppSelector } from "../../store/hooks";
import styled from "styled-components";

const HistoryContainer = styled.div`
  margin-top: 20px;
`;

const HistoryToggle = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const HistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
`;

const TaskHistory: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { completedTasks, deletedTasks } = useAppSelector(
    (state) => state.todos
  );

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <HistoryContainer>
      <HistoryToggle onClick={toggleOpen}>
        {isOpen ? "▼" : "▶"} Task History
      </HistoryToggle>
      {isOpen && (
        <div>
          <h4>Completed Tasks</h4>
          <HistoryList>
            {completedTasks.map((task: TodoStructure) => (
              <HistoryItem key={task.id}>{task.name} (Completed)</HistoryItem>
            ))}
          </HistoryList>
          <h4>Deleted Tasks</h4>
          <HistoryList>
            {deletedTasks.map((task: TodoStructure) => (
              <HistoryItem key={task.id}>{task.name} (Deleted)</HistoryItem>
            ))}
          </HistoryList>
        </div>
      )}
    </HistoryContainer>
  );
};

export default TaskHistory;
