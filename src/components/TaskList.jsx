
let TaskList = (props) => {
  const { setInputText, tasks } = props;

  if (tasks.length === 0) {
    // create new 
  }

  return (
    <div>
      {/* <input
        type="text"
        placeholder="aa"
        className="TaskList"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // Handle adding a new task here
          }
          setInputText(e.target.value);
        }}
        
      /> */}
    </div>
  );
};


let TaskListEntry = (props) => {
  return (
    <div>
      Task List Entry
    </div>
  );
}





export default TaskList;

/*
for vertically adjusting input field, will use 
[] expand on enter
[] box length longer
[] each line has checkbox 

[] 

Curr:
[] each task has one box


- Each task is an individual entry  with an indent field



task {
  text: string,

}



*/