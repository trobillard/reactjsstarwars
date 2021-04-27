function ListItem (props) {
    // let items = props.items.map(function(item) {
        // return <li className="list-group-item">{item}</li>;
    // });
    // same function but in ES6
    let items = props.items.map((item) =>
    <li className="list-group-item">{item}</li>
    );

    return(
        <ul className="list-group">
            {items}
        </ul>
    );
}

export default ListItem;