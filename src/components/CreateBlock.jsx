
let CreateBlock = (props) => {
  const { setInputText } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Start a work block"
        className="CreateBlock"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // Handle adding a new task here
            console.log("Enter check")
          }
          setInputText(e.target.value);
        }}
        
      />
    </div>
  );
}


export default CreateBlock;




