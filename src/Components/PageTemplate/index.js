import { useEffect, useState } from "react";
import EmailDisplay from "../EmailDisplay";
import EmailList from "../EmailList";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { useWindowWidth } from "@react-hook/window-size";

const PageTemplate = (props) => {
    const [emails, setEmails] = useState(null)
    const [sideNavVisible, setSideNavVisible] = useState(false)
    const [emailDisplayVisible, setEmailDisplayVisible] = useState(false)
    const screenWidth = useWindowWidth()
    const [newEmailVisible, setNewEmailVisible] = useState(false)
    const [sentEmails, setSentEmails] = useState(null)
    const [sentNavActive, setSentNavActive] = useState(false)
    const [inboxColorActive, setInboxColorActive] = useState(true)
    const [newEmailColorActive, setNewEmailColorActive] = useState(false);
    const [userName, setUserName] = useState('Charlie Cogglefish')
    const [emailToBeDisplayedId, setEmailToBeDisplayedId] = useState(null)
    const [emailToBeDisplayed, setEmailToBeDisplayed] = useState(null)


    useEffect(() => {
        if(screenWidth > 992) {
            setSideNavVisible(true)
        } else {
            setSideNavVisible(false)
        }

    }, [screenWidth])

    useEffect(() => {
        if(screenWidth > 576) {
            setEmailDisplayVisible(true)
        } else {
            setEmailDisplayVisible(false)
        }

    }, [screenWidth])

    const getEmails = () => {
            fetch (`${process.env.REACT_APP_API_URL}/emails`)
            .then(data => data.json())
            .then((response) => {
                setEmails (response.data)
            }
        )
    }

    const getSentEmails = () => {
         fetch (`${process.env.REACT_APP_API_URL}/emails/sent`)
        .then(data => data.json())
        .then((response) => {
            setSentEmails (response.data)
        }
    )
}

    useEffect(() => {
        getEmails()
        getSentEmails()
    },[])
    
    return (
        <>
        <section className="row gx-0">
            <TopNav 
                setSideNavVisible={setSideNavVisible}
                sideNavVisible={sideNavVisible} 
                setUserName={setUserName} 
                userName={userName}
                />

        </section>
        <section className="row gx-0">
            {sideNavVisible &&
                <div className="sideNavContainer col-6 col-sm-2 col-md-3 col-lg-1 p-0 gx-0">
                    <SideNav
                        getSentEmails={getSentEmails}
                        emails={emails}
                        setNewEmailVisible={setNewEmailVisible}
                        newEmailVisible={newEmailVisible}
                        setSentNavActive={setSentNavActive} 
                        sentNavActive={sentNavActive}
                        setSideNavVisible={setSideNavVisible}
                        sideNavVisible={sideNavVisible}
                        screenWidth={screenWidth}
                        setInboxColorActive={setInboxColorActive}
                        inboxColorActive={inboxColorActive}
                        newEmailColorActive={newEmailColorActive}
                        setNewEmailColorActive={setNewEmailColorActive}
                    />
                </div>
            }
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 gx-0">
                <EmailList
                    userName={userName}
                    emails={sentNavActive ? sentEmails : emails} 
                    setNewEmailVisible={setNewEmailVisible}
                    newEmailVisible={newEmailVisible}
                    // setSentNavActive={setSentNavActive} 
                    sentNavActive={sentNavActive}
                    setInboxColorActive={setInboxColorActive}
                    newEmailColorActive={newEmailColorActive}
                    setNewEmailColorActive={setNewEmailColorActive}
                    getEmails={getEmails} 
                    getSentEmails={getSentEmails}
                    emailToBeDisplayed={emailToBeDisplayed} 
                    setEmailToBeDisplayed={setEmailToBeDisplayed} 
                    emailToBeDisplayedId={emailToBeDisplayedId} 
                    setEmailToBeDisplayedId={setEmailToBeDisplayedId} 
                    emailDisplayVisible={emailDisplayVisible} 
                    setEmailDisplayVisible={setEmailDisplayVisible} 
                    screenWidth={screenWidth}

                />
            </div>
            {emailDisplayVisible &&
            <div className="emailDisplayContainer d-sm-block col-sm-6 col-6 col-md-8 col-lg-7 gx-0">
                <EmailDisplay 
                    sentNavActive={sentNavActive}
                    emailToBeDisplayed={emailToBeDisplayed} 
                    setEmailToBeDisplayed={setEmailToBeDisplayed} 
                    emails={sentNavActive ? sentEmails : emails}  
                    screenWidth={screenWidth} 
                    emailToBeDisplayedId={emailToBeDisplayedId} 
                    emailDisplayVisible={emailDisplayVisible} 
                    setEmailDisplayVisible={setEmailDisplayVisible}
                    setEmailToBeDisplayedId={setEmailToBeDisplayedId}
                />
            </div>
            }
            
        </section>
        </>
    )
}
export default PageTemplate