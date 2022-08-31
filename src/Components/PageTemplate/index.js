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
            fetch ("http://localhost:8080/emails")
            .then(data => data.json())
            .then((response) => {
                setEmails (response.data)
            }
        )
    }

    useEffect(() => {
        getEmails()
    },[])

    const [emailToBeDisplayedId, setEmailToBeDisplayedId] = useState("null")
    const [emailToBeDisplayed, setEmailToBeDisplayed] = useState(null)
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
                    <SideNav emails={emails}/>
                </div>
            }
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 gx-0">
                <EmailList emailToBeDisplayed={emailToBeDisplayed} setEmailToBeDisplayed={setEmailToBeDisplayed} emails={emails} emailToBeDisplayedId={emailToBeDisplayedId} setEmailToBeDisplayedId={setEmailToBeDisplayedId} emailDisplayVisible={emailDisplayVisible} setEmailDisplayVisible={setEmailDisplayVisible} screenWidth={screenWidth}/>
            </div>
            {emailDisplayVisible &&
            <div className="emailDisplayContainer d-sm-block col-sm-6 col-6 col-md-8 col-lg-7 gx-0">
                <EmailDisplay emailToBeDisplayed={emailToBeDisplayed} setEmailToBeDisplayed={setEmailToBeDisplayed} emails={emails} screenWidth={screenWidth} emailToBeDisplayedId={emailToBeDisplayedId} emailDisplayVisible={emailDisplayVisible} setEmailDisplayVisible={setEmailDisplayVisible}/>
            </div>
            }
        </section>
        </>
    )
}
export default PageTemplate