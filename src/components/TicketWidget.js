import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";

const TicketWidget = () => {
  // TODO: use values from Context
  // const numOfRows = 6;
  // const seatsPerRow = 6;

  const {
    state: { numOfRows, seatsPerRow, hasLoaded, seats },
  } = React.useContext(SeatContext);

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag

  if (!hasLoaded) {
    return <CircularProgress />;
  }

  return (
    <Wrapper>
      {range(numOfRows).map((rowIndex) => {
        const rowName = getRowName(rowIndex);

        return (
          <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>
            {range(seatsPerRow).map((seatIndex) => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;

              return (
                <SeatWrapper key={seatId}>
                  <Seat
                    isBooked={seats[seatId].isBooked}
                    seatId={seatId}
                    price={seats[seatId].price}
                  />
                </SeatWrapper>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
  color: black;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
