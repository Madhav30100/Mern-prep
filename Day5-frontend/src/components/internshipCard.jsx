function InternshipCard(props) {
    return (
        <div style= {{ border:'2px solid green',padding:'15px',margin:'10px'}}>
            <h2>Internship Details</h2>
            <p><strong>Duration: </strong>{props.data.duration}</p>
            <p><strong>Tech Stack: </strong>{props.data.techStack}</p>
            <p><strong>Start Date: </strong>{props.data.startDate}</p>
        </div>
    )
}

export default InternshipCard;