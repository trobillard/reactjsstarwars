import ListItem from './listitem/listitem'
import AddItem from './additem/additem'
function shoppingList() {
    const items =[""];

    return(
    <div>
        <AddItem/>
        <ListItem items={items}/>
    </div>
    );
}

export default shoppingList