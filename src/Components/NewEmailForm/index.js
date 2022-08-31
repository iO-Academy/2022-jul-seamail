const NewEmailForm = ({setSideNavVisible, sideNavVisible}) => {

    return (

        <form className="col bg-white border p-5">
            <div className="mb-4">
                <input className="col form-control" name="to" type="text" id="to" placeholder="To"></input>
            </div>
            <div className="mb-4">
                <input className="col form-control" name="subject" type="text" id="subject" placeholder="Subject"></input>
            </div>
            <div className="input-group mb-4">
                <textarea class="form-control" aria-label="With textarea" placeholder="Write your email here"></textarea>
            </div>
        </form>
    )
    
    
}

export default NewEmailForm