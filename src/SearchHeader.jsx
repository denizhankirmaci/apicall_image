import { useState } from "react";

function SearchHeader({ searchProp }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    //Form default olarak gönderildiğinde (onSubmit) yenilenmesi set edilmiştir. Bu JS nin default bir özelliğidir.
    //Bu sebepten dolayı ANA formda console.log(searchProp) yazıyor ama yeniliyor değer görülüp gidiyor. Bu özelliği iptal etmek için event.preventDefault() yazılması gereklidir.
    event.preventDefault();
    //debugger atılarak ta bakılabilir.
    //debugger;
    searchProp(valueInput);
  };

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz ?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
        {/* <div>{valueInput}</div> */}
      </form>
    </div>
  );
}

export default SearchHeader;
