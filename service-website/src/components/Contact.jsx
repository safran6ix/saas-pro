export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll get back to you soon.");
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <p>📧 hello@servicepro.com</p>
                        <p>📞 +1 (555) 123-4567</p>
                        <p>📍 123 Business Ave, Suite 100</p>
                        <p>🕒 Mon-Fri: 9am - 6pm</p>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea rows="4" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}