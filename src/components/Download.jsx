import React, { useState } from "react";

function Download(props) {
  const [fileName, setFileName] = useState({
    FN: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFileName((prevState) => ({ ...prevState, [name]: value }));
  };

  const download = function(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    download(`${fileName.FN}.txt`, props.download);
  };

    return(
        <form onSubmit={handleSubmit}>
			<label>
				File-name:
				<input 
                    type="text"
                    name="FN"
                    value={fileName.FN}
                    onChange={handleChange}/>
			</label>
		    <input 
                type="submit" 
                value="Submit" />
		</form>
    )


}

export default Download;