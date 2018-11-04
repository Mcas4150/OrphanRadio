import React, { Component } from "react";

export const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);
