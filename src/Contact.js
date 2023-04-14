import React from 'react'
import Front from './Front'
// import Map from './Map'

function Contact() {
    return (
        <div className='container' >
            <form action="https://formspree.io/f/xjvdpavr" method="POST">
                <div className="form-group">
                    {/* <Front /> */}
                    <h2 className='text-center'> Please feel free to contact me if you have any questions or concerns.</h2>
                    <input class="form-control"
                        type="text"
                        placeholder="username"
                        name="username"
                        required
                        autoComplete="off"
                    />
                    <br />
                    <input class="form-control"
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required
                        autoComplete="off"
                    />
                    <br />
                    <textarea class="form-control"
                        // id="exampleFormControlTextarea1"
                        name="Message"
                        rows="3"
                        placeholder="your message"
                        required
                        autoComplete="off"
                    >
                    </textarea>
                </div>

                <br />
                <button type="submit" className="btn btn-primary" value="send">Submit</button>
            </form>

            <br />
            {/* <Map /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.292763076418!2d77.
            42749657402682!3d23.232431258466576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397
            c42674cd1e311%3A0x5de763e9d7cd5c51!2sDB%20Mall%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C
            %20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1681409173188!5m2!1sen!2sin"
                width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact