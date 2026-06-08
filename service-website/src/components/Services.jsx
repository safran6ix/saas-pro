const services = [
    { title: "Web Development", desc: "Modern, fast, responsive websites.", icon: "🌐" },
    { title: "SEO Optimization", desc: "Rank higher on Google.", icon: "📈" },
    { title: "Social Media Mgmt", desc: "Engage your audience daily.", icon: "📱" },
    { title: "Business Consulting", desc: "Strategic advice for growth.", icon: "💡" },
];

export default function Services() {
    return (
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}