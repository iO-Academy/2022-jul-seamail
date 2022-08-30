import { useEffect, useState } from "react";
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
            <div className="d-none d-sm-block col-lg-2">
                <SideNav />
            </div>
            <div className="col-12 col-lg-4">Email List</div>
            <div className="d-none d-sm-block col-6 col-lg-6">Email Container</div>
        </section>
        </>
    )
}
export default PageTemplate