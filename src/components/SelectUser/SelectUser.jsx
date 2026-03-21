function SelectUser({ changedUser }) {
    const changeUser = event => {
        changedUser(event.target.value);
        console.log(event.target.value);
    };
    return (
        <select name="user" id="user" onChange={changeUser}>
            <option value="1">Егор</option>
            <option value="2">Вася</option>
        </select>
    );
}

export default SelectUser;
