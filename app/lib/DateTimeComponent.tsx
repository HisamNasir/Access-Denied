import React from "react";

const DateTimeComponent = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${date} ${time}`;
  };

  return <div>{getCurrentDateTime()}</div>;
};

export default DateTimeComponent;
