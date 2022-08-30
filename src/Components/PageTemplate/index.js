import { useEffect, useState } from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";

const PageTemplate = (props) => {
    const [emails, setEmails] = useState(null)
    const [sideNavVisible, setSideNavVisible] = useState(false)
    
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
            <TopNav 
                setSideNavVisible={setSideNavVisible}
                sideNavVisible={sideNavVisible}  />
        </section>
        <section className="row">
            {sideNavVisible &&
                <div className="col-6 col-lg-2">
                    <SideNav />
                </div>
            }
            <div className="col-12 col-lg-4">Email List</div>
            <div className="d-none d-sm-block col-6 col-lg-6">Email Container</div>
        </section>
        </>
    )
}
export default PageTemplate