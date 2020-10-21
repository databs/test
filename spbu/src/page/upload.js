import React from 'react'
import './upload.css'
import Axios from 'axios'

class Upload extends React.Component {
  constructor(){
    super();
    this.state = {
        selectedFile:'',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
    this.setState({
        selectedFile: event.target.files[0],
      })
}

submit(){
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    console.log(this.state.selectedFile);
    // let link = this.props.location.pathname.toString();
    const datauser = JSON.parse(localStorage.getItem("user")).data
    console.log(datauser);
    let id = datauser.id
    let url = "http://localhost:3001/upload/" + id;

    Axios.patch(url, data, {})
    .then((response) => {
        alert("Upload Success")
        console.log(response);
        window.location = '/user'
    })

}

render(){
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card4">
          <h1 style={{marginRight: '120px'}}>Upload File Image</h1>
            <hr/>
            <div className="input">
              <div className="inputitem">
                <label>Upload Image: </label>
                <input type="file" name="file" onChange={this.handleInputChange}/>
                <br/>
                <br/>
               </div>
            </div>
                <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Upload
