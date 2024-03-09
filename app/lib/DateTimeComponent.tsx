"use client";
import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = `${("0" + now.getDate()).slice(-2)}.${(
        "0" +
        (now.getMonth() + 1)
      ).slice(-2)}.${now.getFullYear()}`;
      const time = `${("0" + now.getHours()).slice(-2)}:${(
        "0" + now.getMinutes()
      ).slice(-2)}:${("0" + now.getSeconds()).slice(-2)}`;
      setDateTime(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTimeComponent;
