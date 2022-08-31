const NewEmailForm = ({setSideNavVisible, sideNavVisible}) => {

    return (

        <form>
            <input name="to" type="text" id="to" placeholder="To"></input>
            <input name="subject" type="text" id="subject" placeholder="subject"></input>
            <input name="emailBody" type="text" id="emailBody"></input>
        </form>
    )
    
    
}

export default NewEmailForm