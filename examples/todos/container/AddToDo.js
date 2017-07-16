import { connect } from 'react-redux';
import { addToDo } from './actions';

let AddToDo = ({ dispatch }) => {
    let input;

    return (<div>
        <form onSublimt={e => {
            e.preventDefault();
            if(!input.value.trim()) {
                return;
            }
            dispatch(addToDo(input.value));
            input.value = '';
        }}>
            <input ref={node => {
                input = node;
            }}/>
            <button type="submit">
                Add ToDo
            </button>
        </form>
    </div>);
};

AddToDo = connect()(AddToDo);

export default AddToDo;