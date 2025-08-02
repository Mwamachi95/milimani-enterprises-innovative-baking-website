// App.jsx (temporary for Navigation testing)
import Navigation from './components/Navigation/Navigation';
// import TailwindTest from './components/TailwindTest';


function App() {
  return (
    <div>
      <Navigation />
      {/* <TailwindTest /> */}
      
      {/* Hero/Landing Section */}
      <section id="hero" className="h-screen bg-gradient-to-br from-milimani-brown to-milimani-cream flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Milimani Enterprises</h1>
          <p className="text-xl mb-8">Innovative Baking Solutions</p>
          <button className="bg-milimani-gold hover:bg-milimani-gold/80 text-milimani-brown px-8 py-3 rounded-lg font-semibold transition-colors">
            Discover Our Products
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen bg-milimani-cream flex items-center justify-center">
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-5xl font-bold text-milimani-brown mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-milimani-brown mb-4">Artisan Breads</h3>
              <p className="text-gray-700">Handcrafted breads using traditional techniques and premium ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-milimani-brown mb-4">Custom Cakes</h3>
              <p className="text-gray-700">Bespoke cakes for special occasions, designed to your specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-milimani-brown mb-4">Pastries</h3>
              <p className="text-gray-700">Delicate pastries and confections made fresh daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen bg-milimani-gold flex items-center justify-center">
        <div className="text-center max-w-3xl px-8">
          <h2 className="text-5xl font-bold text-milimani-brown mb-8">About Us</h2>
          <p className="text-lg text-milimani-brown mb-6">
            For over two decades, Milimani Enterprises has been at the forefront of innovative baking solutions. 
            Our commitment to quality, tradition, and innovation has made us a trusted name in the industry.
          </p>
          <p className="text-lg text-milimani-brown mb-8">
            From our humble beginnings as a small neighborhood bakery to becoming a leading supplier of 
            premium baked goods, we continue to honor our heritage while embracing modern techniques.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-milimani-brown">20+</div>
              <div className="text-milimani-brown">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-milimani-brown">500+</div>
              <div className="text-milimani-brown">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-milimani-brown">100+</div>
              <div className="text-milimani-brown">Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen bg-milimani-brown flex items-center justify-center">
        <div className="text-center max-w-2xl px-8">
          <h2 className="text-5xl font-bold text-milimani-cream mb-8">Contact Us</h2>
          <p className="text-lg text-milimani-cream mb-8">
            Ready to experience the finest baked goods? Get in touch with our team today.
          </p>
          <div className="space-y-6 text-milimani-cream">
            <div>
              <h3 className="text-xl font-semibold mb-2">Visit Our Bakery</h3>
              <p>123 Milimani Street, Nairobi, Kenya</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>+254 700 123 456</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@milimanienterprises.co.ke</p>
            </div>
          </div>
          <button className="mt-8 bg-milimani-gold hover:bg-milimani-gold/80 text-milimani-brown px-8 py-3 rounded-lg font-semibold transition-colors">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;