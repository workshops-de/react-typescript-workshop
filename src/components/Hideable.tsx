import { type ReactNode, useState } from "react";

interface HideableProps {
  initiallyVisible?: boolean;
  children: ReactNode;
}

export const Hideable: React.FC<HideableProps> = ({
  initiallyVisible,
  children,
}) => {
  const [visible, setVisible] = useState(initiallyVisible);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="hideable">
      {visible && children}
      <button className="tertiary" onClick={handleToggle}>
        {visible ? "- hide" : "+ show"} details
      </button>
    </div>
  );
};
