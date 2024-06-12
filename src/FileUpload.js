import React from "react"


class FileUpload extends React.Component{
    constructor() {
        super();
        this.state = {
            fileObj: ''
        }
    }
    changeHandler = (event) => {
        // event.target.value
        this.setState({[event.target.name]: event.target.files[0]})
    }
    showStatus = () => {
        console.log(this.state);
    }
    render() {
        let { fileObj } = this.state;
        return (
            <div>
                <h3>Demo of File Upload</h3>
                <input type="file" name="fileObj"
                    onChange={this.changeHandler}
                ></input>
                <br></br>
                <button className="my-4" onClick={this.showStatus}>Show Status</button>
                <br></br>
                <div>
                    {this.state.fileObj &&
                        <div className="text-start">
                            <h3>File Name: {fileObj.name}</h3>
                            <h3>File Type: { fileObj.type}</h3>
                            <h3>File Size: { fileObj.size/1024 > 0 && fileObj.size/1024 +'KB' }</h3>
                            <h3>Last Modified Date: {fileObj.lastModifiedDate.toDateString()}</h3>
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default FileUpload