import ListItem from './listitem/listitem'
import AddItem from './additem/additem'
function shoppingList() {
    const items =["Faire les courses", "Laver le sol", "aller voir le film"];

    return(
    <div>
        <AddItem/>
        <ListItem items={items}/>
    </div>
    );
}

export default shoppingList