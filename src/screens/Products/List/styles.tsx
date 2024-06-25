import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 70vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Button = styled.button<{ $bgColor?: string; $width?: string }>`
  width: ${({ $width }) => $width || "300px"};
  border: none;
  background-color: ${({ $bgColor }) => $bgColor || "#171717"};
  color: #fff;
  font-weight: 600;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 5px 10px rgba(1, 1, 1, 0.5);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  width: 80%;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;
