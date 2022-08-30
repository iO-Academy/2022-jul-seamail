import './styles.scss';

const EmailDisplay = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="emailButtons col-12 d-flex justify-content-end border-bottom">
            <button type="button" className="btn btn-danger btn-sm my-2">Delete</button>
            <button type="button" className="btn btn-primary mx-2 btn-sm my-2">Reply</button>
        </div>
        <div className="col-10">
            <p className="fs-5 fw-bold mt-2 mb-0">Maria Smith</p>
            <p className="fs-6 fw-bold mb-1">maria.smith@fakecompany.com</p>
            <p className="fs-4 fw-bold">Hello world</p>
        </div>
        <div className="col-2">
            <p className="fs-8 fw-bold mt-2 align-item-center">23/07/2022</p>
        </div>
        <div className="testEmail col-12 border-bottom lh-lg">
            <p className="fs-6">
            Hello world, <br></br>
            This is my first email. <br></br>
            I am looking forward to speaking with you. <br></br>
            Could you please click this link and schedule a time and date for our call? <br></br>
            If you have any questions about the call, just reply to this email. I will get back to you ASAP. <br></br>
            Thank you, <br></br>
            Maria
            </p>
        </div>
    </div>
</div>
    )
}

export default EmailDisplay