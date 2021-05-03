import React from "react"
import Axios from "axios";
import Article from "./article/Article";


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            error:false,
            data:null,
            articles: null
        }
    }
componentDidMount() {
    Axios.get("https://swapi.dev/api/")
    .then((response) => {
        let resources = response.data
        let articles = Object.keys(resources).map((article)=>{
            return <Article article={article}/>
        });
        this.setState({
            loaded:true,
            data:response.data,
            articles : articles
        })
    })
    .catch((error) => {
        this.setState({
            loaded:true,
            error: error
        })
        console.log(error);
    })
    }
    

    render() {
        if(this.state.loaded){
            if(this.state.error){
                return(
                    <p>Ooops something wrong happened :-(. Message : {this.state.error.message}</p>
                );
            }
            return(
                <section>
                    <h2>Choose a categorie</h2>
                    <div className="row">
                    {this.state.articles}
                    </div>
                    <div className="spotify">
                    <iframe src="https://open.spotify.com/embed/playlist/34HMPdg2ywHWz0EmCE64yo" width="1300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </section>
            );
                
        }
        return(
            <p>Data loading</p>
        );
    }
    }

export default Homepage;