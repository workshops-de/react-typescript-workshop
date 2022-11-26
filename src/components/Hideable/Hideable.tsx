import { ReactNode, useState } from "react";

export interface HideableProps {
  children: ReactNode;
}
export const Hideable = ({ children }: HideableProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      {!hidden && <div className="fade-in">{children}</div>}
      <button onClick={() => setHidden(!hidden)}>{hidden ? "+" : "-"}</button>
    </>
  );
};
