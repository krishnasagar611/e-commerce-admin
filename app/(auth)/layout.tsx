import React from "react";

type Props = {};
interface AuthProps {
  children: React.ReactNode;
}
function Authlayout({ children }: AuthProps) {
  return (
    <div className="flex justify-center h-full items-center">{children}</div>
  );
}

export default Authlayout;
