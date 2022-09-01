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
    setNewEmailColorActive
 }) => {

    return (
            <>
                <div>
                    <EmailNavLinks 
                    emails={emails}
                    newEmailVisible={newEmailVisible}
                    setNewEmailVisible ={setNewEmailVisible}
                    setSentNavActive={setSentNavActive} 
                    sentNavActive={sentNavActive}
                    setInboxColorActive={setInboxColorActive}
                    inboxColorActive={inboxColorActive}
                    newEmailColorActive={newEmailColorActive}
                    setNewEmailColorActive={setNewEmailColorActive}
                    />
                </div>
            </>
            )
}


export default SideNav