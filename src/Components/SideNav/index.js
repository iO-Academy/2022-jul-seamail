import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({ emails, newEmailVisible, setNewEmailVisible }) => {

    return (
            <>
                <div className="">
                    <EmailNavLinks emails={emails}
                    newEmailVisible = {newEmailVisible}
                    setNewEmailVisible = {setNewEmailVisible}/>
                </div>
            </>
            )
}


export default SideNav