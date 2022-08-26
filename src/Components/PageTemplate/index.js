import { useEffect, useState } from "react";

const PageTemplate = () => {
    const [emails, setemails] = useState(null)

    const getEmails = () => {
            fetch ("http://localhost:8080/emails")
            .then(data => data.json())
            .then((response) => {
                setemails (response.data)
            }
        )
    }

    useEffect(() => {
        getEmails()
    },[])
        
    return (
        <>
        <section className="row">
            <div className="col-2" onClick={() => console.log(emails)}>test</div>
            <div className="col-8">test</div>
            <div className="col-2">test</div>
        </section>
        <section className="row">
            <div className="col-2">test</div>
            <div className="col-4">test</div>
            <div className="col-6">test</div>
        </section>
        </>
        
    )
}
export default PageTemplate