import react, {useState, useRef, useEffect} from "react";

function MyComponent(){

  const inputRef = useRef(null);//useref returns an object that has one property

  console.log(ref);

  useEffect(() => {
    console.log("component rendered");
    console.log(inputRef);
  });

  function handleClick(){
   ref.current++;//increasing current property by 1
   
  }
  return(
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input ref={inputRef}/>

      </div>
    
  );
}

export default MyComponent;