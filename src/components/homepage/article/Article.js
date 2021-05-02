

function Article (props){
    return(
        <div className="col-6 col-sm-4 col-lg-3">
        <article className="bg-dark text-center text-white py-5 my-2">
            <span>{props.article}</span>
        </article>
        </div>
    );
}

export default Article;