export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2>About Us</h2>
                        <p>
                            Founded in 2020, ServicePro has helped 500+ businesses scale their online presence.
                            We combine creativity, data, and technology to deliver measurable results.
                        </p>
                        <p>
                            Our team of experts is dedicated to providing top-notch service and innovative solutions
                            tailored to your unique business needs.
                        </p>
                    </div>
                    <div className="stats">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Projects Completed</div>
                        <div className="stat-number" style={{ marginTop: "24px" }}>98%</div>
                        <div className="stat-label">Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
}