import React from "react";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:""
        }
    }

    handleChange = (event) => {
    this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        console.log(this.state.value);
    }

    render() {
        return(
            <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control d-inline w-50 me-3"></input>
                    <button type="submit" className="btn btn-danger">Envoyer</button>
            </div>
    );
}
}

export default AddItem;