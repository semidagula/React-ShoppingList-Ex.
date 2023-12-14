import ShoppingListItem from "./shoppingListItem";
import PropTypes from 'prop-types';

function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}
                />
                //OR:
                //<ShoppingListItem key={i.id} {...i}/>
            ))}
        </ul>
    );
}

ShoppingListItem.propTypes = { //Setting propTypes for the component
    item: PropTypes.string,  //Defining the expected types for the component's props
    quantity: PropTypes.number,
    completed: PropTypes.bool,
}
export default ShoppingList;