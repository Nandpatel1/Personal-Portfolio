import NavBar from "./NavBar";
import SocialNetwork from "./SocialNetwork";
import emailjs from 'emailjs-com';

const ContactMe = ()=>{
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_r77zkb5', 'template_f89t1t9', e.target, 'lwvlzuqNoLy991ZQA').then(res =>{
            console.log(res);
        }).catch(err => console.log(err))
    }
    function emailSent(){
        alert('Your message was sent');
    }
    return (
        <>
            <NavBar/>
            <SocialNetwork/>
            <div className="contact_form">
                <div class="container">
                    <form className="row" action="" onSubmit={sendEmail}>
                        <label for="fname">Enter Your Name</label>
                        <input type="text" id="fname" name="name" className="form-control" placeholder="Your Name"/>

                        <label for="email">Enter Your Email</label>
                        <input type="email" id="email" name="user_email" className="form-control" placeholder="Email"/>

                        <label for="subject">Message</label>
                        <textarea id="subject" name="message" rows="4" placeholder="Write something.."></textarea>
                        <input type="submit" onClick={emailSent} value="Send" className="form-control"/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactMe;