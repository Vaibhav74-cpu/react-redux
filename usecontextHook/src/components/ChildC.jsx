import React, { useContext } from "react";
import { ThemeContext} from "../App";

function ChildC() {
//   const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handletheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      {/* {user.name} */}
      <button onClick={handletheme}>change theme</button>
    </div>
  );
}

export default ChildC;
