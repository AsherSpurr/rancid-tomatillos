
import "./ErrorPage.css"
import rancidTomatilloError from '../../images/rancid-tomatillo.png';

function ErrorPage() {
    return (
        <div className="error-505">
            <img className="rancid-tomatillo-error" src={rancidTomatilloError} alt="Rancid Tomatillo broken icon" />
            <h1>There was a glitch in the matrix..</h1>
            <div className='error-message'>
                <p> We now know about this issue and are working to fix it.</p>
                <p>In the meantime, here is what you can do:</p>
                <p>&nbsp;</p>
                <ul>
                    <li><b>Refresh the page</b>(Sometimes this helps)</li>
                    <li><b>Try again</b> in 30 minutes</li>
                </ul>
            </div>
        </div>
    )
}

export default ErrorPage