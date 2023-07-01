import { saveDataIntoLocalStorage } from "./LocalStorageData";

export const reducerHandler = (state, action) => {
  switch (action.type) {
    case "add_task": {
      state.push({
        name: action.payLoads.task,
        id: action.payLoads.id,
        completed: false,
      });
      saveDataIntoLocalStorage(state);
      return state;
    }

    case "complete_task": {
      const updatedState = state.map((item) => {
        if (item.id === action.payLoads.task.id) {
          return {
            ...item,
            completed: !action.payLoads.task.completed,
          };
        }
        return item;
      });
      saveDataIntoLocalStorage(updatedState);
      return updatedState;
    }
    case "edit_task": {
      const updatedState = state.map((item) => {
        if (item.id === action.payLoads.task.id) {
          return {
            ...item,
            name: action.payLoads.text,
          };
        }
        return item;
      });

      saveDataIntoLocalStorage(updatedState);
      return updatedState;
    }
    case "delete_task": {
      const updatedState = state.filter(
        (item) => item.id !== action.payLoads.id
      );
      saveDataIntoLocalStorage(updatedState);
      return updatedState;
    }
    default: {
      throw new Error("There is a problem try again");
    }
  }
};
