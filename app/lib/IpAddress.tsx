"use client";
import React, { useState, useEffect } from "react";

const IpAddress: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  return <>Your IP: {ipAddress}</>;
};

export default IpAddress;
