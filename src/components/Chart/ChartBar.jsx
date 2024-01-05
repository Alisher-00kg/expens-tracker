import React from "react";
import styled from "styled-components";
export const ChartBar = ({ label, currentPrice, maximumPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  console.log(fillHeight);
  return (
    <StyledChartBar>
      <ChartBarInner>
        <ChartBarFill height={fillHeight}></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </StyledChartBar>
  );
};
const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChartBarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #363636;
  background: #a892ee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;
const ChartBarFill = styled.div`
  width: 100%;
  background: #4826b9;
  transition: all 0.3s ease-out;
  height: ${({ height }) => height}%;
`;
const ChartBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
`;
