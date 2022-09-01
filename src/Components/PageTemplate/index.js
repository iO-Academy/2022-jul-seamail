import { useEffect, useState } from "react";
import EmailDisplay from "../EmailDisplay";
import EmailList from "../EmailList";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { useWindowWidth } from "@react-hook/window-size";

const PageTemplate = (props) => {
    const [emails, setEmails] = useState(null)
    const [sideNavVisible, setSideNavVisible] = useState(false)
    const screenWidth = useWindowWidth()
    const [newEmailVisible, setNewEmailVisible] = useState(false)
    const [sentEmails, setSentEmails] = useState(null)
    const [sentNavActive, setSentNavActive] = useState(false)

    useEffect(() => {
        if(screenWidth > 992) {
            setSideNavVisible(true)
        } else {
            setSideNavVisible(false)
        }

    }, [screenWidth])

    const getEmails = () => {
            fetch ("http://localhost:8080/emails")
            .then(data => data.json())
            .then((response) => {
                setEmails (response.data)
            }
        )
    }

    const getSentEmails = () => {
         fetch ("http://localhost:8080/emails/sent")
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
                sideNavVisible={sideNavVisible}  />
        </section>
        <section className="row gx-0">
            {sideNavVisible &&
                <div className="sideNavContainer col-6 col-sm-2 col-md-3 col-lg-1 p-0 gx-0">
                    <SideNav emails={emails}
                    setNewEmailVisible={setNewEmailVisible}
                    newEmailVisible={newEmailVisible}
                    setSentNavActive={setSentNavActive} 
                    sentNavActive= {sentNavActive}/>
                </div>
            }
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 gx-0">
                <EmailList emails={sentNavActive ? sentEmails : emails} 
                setNewEmailVisible={setNewEmailVisible}
                newEmailVisible={newEmailVisible}
                setSentEmails={setSentEmails} 
                setSentNavActive={setSentNavActive} 
                sentNavActive= {sentNavActive} />
            </div>
            <div className="d-none d-sm-block col-sm-6 col-6 col-md-5 col-lg-7 gx-0">
                <EmailDisplay />
            </div>
        </section>
        </>
    )
}
export default PageTemplate