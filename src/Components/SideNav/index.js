import EmailNavLinks from '../EmailNavLinks';
import './styles.scss';

const SideNav = ({ emails, emailToBeDisplayed }) => {

    return (
            <>
                <div className="">
                    <EmailNavLinks emails={emails} emailToBeDisplayed={emailToBeDisplayed} />
                </div>
            </>
            )
}


export default SideNav