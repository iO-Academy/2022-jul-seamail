import { useEffect, useState } from "react";
import EmailList from "../EmailList";
import SideNav from "../SideNav";
import TopNav from "../TopNav";

const PageTemplate = () => {
    const [emails, setEmails] = useState(null)

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
        
    return (
        <>
        <section className="row">
            <TopNav />
        </section>
        <section className="row">
            <div className="col-2">
                <SideNav />
            </div>
            <div className="col-4">
                <EmailList emails={emails}/>
            </div>
            <div className="col-6">test</div>
        </section>
        </>
    )
}
export default PageTemplate