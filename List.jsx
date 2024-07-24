
import propTypes from 'prop-types'
function List(props){

    const items = props.items;
    const h3 =props.h3;

    const listItems = items.map(fruit =><li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                {fruit.colories}</li>);

    return(
    <>
    <h3>{h3}</h3>
    <ol>{listItems}</ol>
    </>
    )
}
// List.propTypes = {
//     colories: propTypes.string,
//     items: propTypes.array(propTypes.shape({id: propTypes.number,
//                                             name: propTypes.string,
//                                             length: propTypes.number
//     }))
// }
// List.defaultProps = {
//     length: "length", 
//     items: [],
// }
export default List