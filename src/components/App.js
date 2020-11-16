import React from "react";
import styled from "styled-components";
import { SeatContext } from "./SeatContext";
import GlobalStyles from "./GlobalStyles";
import TicketWidget from "./TicketWidget";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer },
  } = React.useContext(SeatContext);

  React.useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);
  return (
    <>
      <GlobalStyles />
      <h1>This venue has {numOfRows} rows!</h1>
      <Wrapper>
        <TicketWidget />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
