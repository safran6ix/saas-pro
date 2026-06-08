export default function Hero() {
    return (
        <section id="home" className="pt-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Expert Digital Solutions
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        We help your business grow with modern web & marketing services
                    </p>
                    <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}