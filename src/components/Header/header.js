import { Component } from "react";
import { connect } from "react-redux"
import { changeInfo } from "../../actions/userActions";
import styles from "./css/main.module.css"
import { Link } from "react-router";
class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        
    }
    render() { 
        return (
        <>
            <div className={styles.menu}>
            <div className={styles.menuitem}>
                    <Link to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                        Home Page
                    </Link>
                </div>

                <div className={styles.menuitem}>
                    <Link to={"/aboutus"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></svg>
                        Dashboard
                    </Link>
                </div>
                <div className={styles.menuitem}>
                    <Link to={"/aboutus"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></svg>
                        Dashboard
                    </Link>
                </div>
            </div>
            
        </> 
        );
    }
}
 




const mapStateToProps = (state) => {
    return {
        userinfo:state.userinfo
    }
}

const mapDispatchToProps = {
    changeInfo
}

export default connect(mapStateToProps , mapDispatchToProps)(Header);