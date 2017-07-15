import { connect } from 'react-redux';

let AddToDo = () => {
    return (<div>
        <form>
            <input/>
            <button/>
        </form>
    </div>);
};

AddToDo = connect()(AddToDo);

export default AddToDo;