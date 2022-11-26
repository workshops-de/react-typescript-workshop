import { useContext } from "react";
import { ThemeContext } from "../domain/theme/ThemeContext";

const themeColors = ["tomato", "olivedrab", "gold", "hotpink"];

export const ThemeEditor = () => {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);

  const handleColorClick = (color: string) => {
    setPrimaryColor(color);
  };

  return (
    <div className="theme-editor">
      {themeColors.map((color) => (
        <button
          key={color}
          style={{
            color: color,
            borderBottom:
              color === primaryColor ? `2px solid ${primaryColor}` : "",
          }}
          onClick={() => handleColorClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};
