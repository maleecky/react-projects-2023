export default function Tasklists({ tasks, dispatch }) {
  function handleTaskCompletion(task) {
    dispatch({
      type: "complete_task",
      payLoads: {
        task: task,
      },
    });
  }

  function handleDeleteTask(task) {
    dispatch({
      type: "delete_task",
      payLoads: {
        id: task.id,
      },
    });
  }

  function handleTextareaExpand(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  return tasks.length <= 0 ? (
    <li className="empty-list">
      <div className="emptylists-note">Empty todo list</div>
    </li>
  ) : (
    tasks.map((task, index) => {
      return (
        <li key={task.id} className="tasklist">
          <label className="task-wrapper">
            <input
              type="radio"
              checked={task.completed}
              onChange={() => {
                handleTaskCompletion(task);
              }}
            />
            <textarea
              rows={1}
              className={task.completed ? "completed" : "uncompleted"}
              disabled={task.completed}
              value={task.name}
              onInput={handleTextareaExpand}
              onBlur={() => {
                if (task.name === "") {
                  handleDeleteTask(task);
                }
              }}
              onChange={(e) => {
                dispatch({
                  type: "edit_task",
                  payLoads: {
                    text: e.target.value,
                    task: task,
                  },
                });
              }}
            ></textarea>
          </label>
          <div className="control-icons--wrapper">
            <button
              className="plain-btn"
              disabled={task.completed}
              onClick={() => {
                handleTaskCompletion(task);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                className="markasdone--icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.27199 28.5714C3.98874 28.5714 3.71709 28.451 3.51681 28.2367C3.31652 28.0224 3.204 27.7317 3.204 27.4286V4.57143C3.204 4.26832 3.31652 3.97763 3.51681 3.76331C3.71709 3.54898 3.98874 3.42857 4.27199 3.42857H24.03C24.4548 3.42857 24.8623 3.24796 25.1628 2.92647C25.4632 2.60498 25.632 2.16894 25.632 1.71429C25.632 1.25963 25.4632 0.823594 25.1628 0.502103C24.8623 0.180612 24.4548 6.77491e-09 24.03 0H4.27199C3.13899 0 2.05239 0.481631 1.25124 1.33894C0.450084 2.19625 0 3.35901 0 4.57143V27.4286C0 28.641 0.450084 29.8038 1.25124 30.6611C2.05239 31.5184 3.13899 32 4.27199 32H25.632C26.765 32 27.8516 31.5184 28.6527 30.6611C29.4539 29.8038 29.904 28.641 29.904 27.4286V20C29.904 19.5453 29.7352 19.1093 29.4347 18.7878C29.1343 18.4663 28.7268 18.2857 28.302 18.2857C27.8771 18.2857 27.4696 18.4663 27.1692 18.7878C26.8687 19.1093 26.7 19.5453 26.7 20V27.4286C26.7 27.7317 26.5874 28.0224 26.3872 28.2367C26.1869 28.451 25.9152 28.5714 25.632 28.5714H4.27199ZM31.57 8.41143C31.853 8.08646 32.0071 7.65664 31.9998 7.21252C31.9924 6.7684 31.8243 6.34467 31.5308 6.03058C31.2373 5.71649 30.8413 5.53658 30.4263 5.52874C30.0112 5.52091 29.6096 5.68576 29.3059 5.98857L17.434 18.6903L13.4333 14.2651C13.2873 14.1019 13.1126 13.9712 12.9193 13.8805C12.726 13.7897 12.5178 13.7408 12.3067 13.7365C12.0956 13.7321 11.8858 13.7725 11.6894 13.8552C11.4929 13.9379 11.3137 14.0613 11.162 14.2184C11.0102 14.3755 10.889 14.5631 10.8053 14.7705C10.7216 14.9779 10.677 15.2009 10.6741 15.4268C10.6712 15.6527 10.71 15.877 10.7884 16.0867C10.8667 16.2965 10.9831 16.4876 11.1307 16.6491L16.2635 22.3269C16.4112 22.4908 16.5879 22.6216 16.7833 22.7116C16.9788 22.8016 17.189 22.8491 17.4018 22.8512C17.6145 22.8533 17.8256 22.8101 18.0225 22.724C18.2195 22.6379 18.3985 22.5106 18.549 22.3497L31.57 8.41143Z"
                />
              </svg>
            </button>
            <button
              className="plain-btn"
              onClick={() => {
                handleDeleteTask(task);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H14V24H12V12ZM18 12H20V24H18V12Z"
                  fill="#C20E0E"
                />
                <path
                  d="M4 6V8H6V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V8H28V6H4ZM8 28V8H24V28H8ZM12 2H20V4H12V2Z"
                  fill="#C02020"
                />
              </svg>
            </button>
          </div>
        </li>
      );
    })
  );
}
