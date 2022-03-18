import Todo from "../../Components/consts/Todo/Todo";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, createContext, useEffect } from "react";

export const ToggleContext = createContext(true);

const Landing = () => {
  const [page, setPage] = useState("all");

  const [originalTodos, setOriginalTodos] = useState([
    {
      title: "Wash the dishes",
      completed: false,
    },
    {
      title: "Clear the bushes",
      completed: true,
    },
    {
      title: "Go to market",
      completed: false,
    },
  ]);

  const [todos, settodos] = useState(originalTodos);

  const [isLight, setIsLight] = useState(true);

  const [newtodo, setnewtodo] = useState("");

  const [cancelled, setcancelled] = useState(false);

  const ToggleLight = () => {
    setIsLight(!isLight);
  };

  const changePage = (curr_page) => {
    setPage(curr_page);
  };

  const add_todo = (e) => {
    e.preventDefault();
    if (!newtodo) return;

    todos.unshift({ title: newtodo, completed: false });
    settodos(todos);
    setnewtodo("");
  };

  const handleDelete = (index) => {
    const remaining_todos = todos.filter(
      (_, item_index) => item_index !== index
    );
    settodos(remaining_todos);
  };

  const clear_Completed = () => {
    setOriginalTodos(prev => prev.filter((value) => !value.completed));
  };


  useEffect(() => {
    if (page === "all") {
      settodos(originalTodos);
    } else if (page === "active") {
      settodos(originalTodos.filter((value) => !value.completed));
    } else {
      settodos(originalTodos.filter((value) => value.completed));
    }
  }, [page, originalTodos]);



  return (
    <ToggleContext.Provider value={{ isLight, setIsLight, cancelled, setcancelled,originalTodos,setOriginalTodos,todos,settodos}}>
      <div className="Page_div">
        <div className="top_div"></div>
        {/* className={isLight ? "bottom_div_light" : "bottom_div_dark "} */}
        <div className={isLight ? "bottom_div_light" : "bottom_div_dark "}>
          <div className="text_div d-flex justify-content-between">
            <h2>TODO</h2>
            {!isLight ? (
              <button
                onClick={ToggleLight}
                className="btn btn-default cancel_btn"
              >
                <FontAwesomeIcon
                  icon={faSun}
                  className="fas-3x"
                  style={{ color: "#ffffff" }}
                />
              </button>
            ) : (
              <button
                onClick={ToggleLight}
                className="btn btn-default cancel_btn"
              >
                <FontAwesomeIcon
                  icon={faMoon}
                  className="fas-3x"
                  style={{ color: "#ffffff" }}
                />
              </button>
            )}
          </div>

          <div>
            <form
              onSubmit={add_todo}
              className={
                !isLight
                  ? "input_div d-flex p-3 dark_background dark_text"
                  : "input_div d-flex p-3 "
              }
            >
              <input
                type="checkbox"
                className={
                  !isLight
                    ? "input_radio dark_background dark_text"
                    : "input_radio"
                }
                name="completed"
              />
              <input
                type="text"
                onChange={(e) => setnewtodo(e.target.value)}
                className={
                  !isLight
                    ? "input_text dark_background dark_text dark_placeholder"
                    : "input_text"
                }
                placeholder="Currently Typing..."
              />
            </form>
          </div>

          <div
            className={
              !isLight
                ? "bottom_div_col dark_boxshadow dark_background dark_text "
                : "bottom_div_col"
            }
          >
            {todos.map((value, index) => {
              return (
                <Todo
                  handleDelete={() => handleDelete(index)}
                  key={index}
                  title={value.title}
                  completed={value.completed}
                />
              );
            })}

            <div className="row d-flex flex-row align-items-center justify-content-between px-3 py-3 pb-0">
              <div className="col-auto">
                <p>{todos.length} items left </p>
              </div>
              <div className="row col-auto">
                <div className="col-auto">
                  <p
                    onClick={(e) => {
                      changePage("all");
                    }}
                    className="links"
                  >
                    All
                  </p>
                </div>
                <div className="col-auto">
                  <p
                    onClick={(e) => {
                      changePage("active");
                    }}
                    className="links"
                  >
                    Active
                  </p>
                </div>
                <div className="col-auto">
                  <p
                    onClick={(e) => {
                      changePage("completed");
                    }}
                    className="links"
                  >
                    Completed
                  </p>
                </div>
              </div>
              <div className="col-auto">
                <p className="links" onClick={clear_Completed}>
                  Clear Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToggleContext.Provider>
  );
};

export default Landing;
