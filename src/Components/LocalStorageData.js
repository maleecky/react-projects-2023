export const saveDataIntoLocalStorage = (data) => {
  localStorage.setItem("tasks", JSON.stringify(data));
};

export const getTheDataFromtheLocalStorage = () => {
  const dataJSON = localStorage.getItem("tasks");
  return dataJSON ? JSON.parse(dataJSON) : [];
};
