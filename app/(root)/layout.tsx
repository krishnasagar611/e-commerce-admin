import React from "react";

type Props = {};

interface setupProps {
  children: React.ReactNode;
}
function Adminlayout({ children }: setupProps) {
  return <div>{children}</div>;
}

export default Adminlayout;
