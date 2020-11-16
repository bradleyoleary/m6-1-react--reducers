import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import seatSrc from "../assets/seat-available.svg";

const Seat = ({ isBooked, seatId, price }) => {
  //console.log(seatId);
  const arr = seatId.split("-");
  const row = arr[0];
  const seat = arr[1];
  //console.log(seat);
  //if seat is booked, grey out the img and make the seat disabled
  return isBooked ? (
    <SeatImg
      alt="seat"
      src={seatSrc}
      style={{ filter: isBooked && "grayscale(100%)" }}
    />
  ) : (
    <Tippy
      content={
        <span>
          Row {row}, Seat {seat} - Price ${price}
        </span>
      }
      theme="material"
    >
      <SeatImg alt="seat" src={seatSrc} />
    </Tippy>
  );
};

const SeatImg = styled.img`
  cursor: pointer;
`;

export default Seat;
