import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({ emails, newEmailVisible, setNewEmailVisible, setSentNavActive, sentNavActive }) => {

    return (
            <>
                <div className="">
                    <EmailNavLinks emails={emails}
                    newEmailVisible = {newEmailVisible}
                    setNewEmailVisible = {setNewEmailVisible}
                    setSentNavActive={setSentNavActive} 
                    sentNavActive= {sentNavActive}/>
                </div>
            </>
            )
}


export default SideNav