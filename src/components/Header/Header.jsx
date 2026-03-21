import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";

function Header({ changedUser }) {
    const changeUser = event => {
        changedUser(event.target.value);
        console.log(event.target.value);
    };
    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="Logotype" />
            <SelectUser changeUser={changeUser} />
        </>
    );
}

export default Header;
