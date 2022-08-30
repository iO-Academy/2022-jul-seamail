import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({ emails }) => {

    return (
            <>
                <div className="sideNavContainer">
                    <EmailNavLinks emails={emails}/>
                </div>
            </>
            )
}


export default SideNav