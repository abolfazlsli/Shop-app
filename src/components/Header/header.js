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
            <Link to={"/aboutus"}>
                Aboutus
            </Link>
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