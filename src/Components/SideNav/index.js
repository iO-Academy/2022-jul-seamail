import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({
    emails,
    newEmailVisible,
    setNewEmailVisible,
    setSentNavActive,
    sentNavActive,
    inboxColorActive,
    setInboxColorActive,
    newEmailColorActive,
    setNewEmailColorActive, 
    sideNavVisible, 
    setSideNavVisible, 
    screenWidth
 }) => {
    
    return (
            <>
                <div>
                    <EmailNavLinks emails={emails}
                    newEmailVisible={newEmailVisible}
                    setNewEmailVisible ={setNewEmailVisible}
                    setSentNavActive={setSentNavActive} 
                    sentNavActive={sentNavActive}
                    setInboxColorActive={setInboxColorActive}
                    inboxColorActive={inboxColorActive}
                    newEmailColorActive={newEmailColorActive}
                    setNewEmailColorActive={setNewEmailColorActive}
                    setSideNavVisible={setSideNavVisible}
                    sideNavVisible={sideNavVisible}
                    screenWidth={screenWidth}
                    />
                </div>
            </>
            )
}

export default SideNav