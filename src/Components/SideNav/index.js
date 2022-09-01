import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({ emails, newEmailVisible, setNewEmailVisible, setSentNavActive, sentNavActive, sideNavVisible, setSideNavVisible, screenWidth }) => {

    return (
            <>
                <div className="">
                    <EmailNavLinks emails={emails}
                    newEmailVisible = {newEmailVisible}
                    setNewEmailVisible = {setNewEmailVisible}
                    setSentNavActive={setSentNavActive} 
                    sentNavActive= {sentNavActive}
                    setSideNavVisible={setSideNavVisible}
                    sideNavVisible={sideNavVisible}
                    screenWidth={screenWidth} />
                </div>
            </>
            )
}


export default SideNav