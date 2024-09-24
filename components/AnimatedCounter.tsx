'use client';

import React from "react";
import CountUp from "react-countup";

type AmountType = {
  amount: number;
};
const AnimatedCounter = ({ amount }: AmountType) => {
  return (
    <div className="w-full">
      <CountUp duration={4} decimals={2} decimal="." prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
