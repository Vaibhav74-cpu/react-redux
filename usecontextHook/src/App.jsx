import { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  /*
steps 
1 : create context
2 : wrap all the child inside provider
3 : pass the value
4 : consume the values
use: avoid props drilling
note: if you want too create multiple context then wrap all context in single contextprovider
*/
  // const [user, setUser] = useState({ name: "vaibhav" });
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* <UserContext.Provider value={user}>
        <ChildA></ChildA>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="con"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { UserContext };
export { ThemeContext };
