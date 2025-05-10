import React from "react";
import "./DateFormat.css";
const DateFormat = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("es-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="DateFormat">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
};

export default DateFormat;
