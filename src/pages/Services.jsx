import { FaLeaf, FaChartLine, FaCloudSun, FaHandshake, FaTractor, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <main>
      {/* Hero Section with unique class */}
      <section className="hero services-hero">
        <div className="container">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive agricultural technology solutions to optimize your farming operations
          </p>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Help Farmers</h2>
          <p className="section-subtitle">
            Our integrated suite of services addresses every aspect of modern farming
          </p>
          <div className="services-grid">
            <div className="service-card">
              <img
                src="data:image/jpeg;base64,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"
                alt="Soil Analysis"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Weather Forecasting</h3>
                <p className="service-text">
                  Accurate weather forecasting and analysis to optimize farming decisions and protect crops from extreme conditions.
                </p>
                <ul className="service-list">
                  <li>Real-time weather monitoring</li>
                  <li>Temperature and humidity tracking</li>
                  <li>Precipitation and wind analysis</li>
                  <li>Customized climate adaptation strategies</li>
                </ul>
                <Link to="/weather" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/031/696/054/small_2x/sprawling-agricultural-farm-featuring-fields-of-crops-ai-generated-photo.jpg"
                alt="Crop Monitoring"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Crop Monitoring & Disease Detection</h3>
                <p className="service-text">
                  Advanced sensors and AI-powered analytics to monitor crop health and detect issues early.
                </p>
                <ul className="service-list">
                  <li>Real-time crop health monitoring</li>
                  <li>Early disease detection</li>
                  <li>Pest infestation alerts</li>
                  <li>Growth stage tracking</li>
                </ul>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Irrigation Management"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Smart Irrigation Management</h3>
                <p className="service-text">
                  Optimize water usage with precision irrigation systems based on real-time data.
                </p>
                <ul className="service-list">
                  <li>Soil moisture monitoring</li>
                  <li>Weather-based irrigation scheduling</li>
                  <li>Water usage optimization</li>
                  <li>Drought stress prevention</li>
                </ul>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Weather Forecasting"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Agricultural Weather Forecasting</h3>
                <p className="service-text">
                  Hyperlocal weather predictions specifically designed for agricultural planning.
                </p>
                <ul className="service-list">
                  <li>7-day detailed forecasts</li>
                  <li>Frost and heat warnings</li>
                  <li>Rainfall predictions</li>
                  <li>Seasonal outlook reports</li>
                </ul>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Market Intelligence"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Market Intelligence</h3>
                <p className="service-text">
                  Stay informed about market trends, pricing, and demand forecasts for your crops.
                </p>
                <ul className="service-list">
                  <li>Price trend analysis</li>
                  <li>Demand forecasting</li>
                  <li>Market opportunity alerts</li>
                  <li>Supply chain optimization</li>
                </ul>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Farm Management"
                className="service-img"
              />
              <div className="service-body">
                <h3 className="service-title">Farm Management Software</h3>
                <p className="service-text">
                  Comprehensive software to manage all aspects of your farm operations in one place.
                </p>
                <ul className="service-list">
                  <li>Inventory management</li>
                  <li>Equipment tracking</li>
                  <li>Labor scheduling</li>
                  <li>Financial reporting</li>
                </ul>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our simple process to get you started with AgriTech services
          </p>
          <div className="how-it-works-grid">
            <div className="how-it-works-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-text">
                We begin with a thorough assessment of your farm, understanding your specific needs, 
                challenges, and goals.
              </p>
            </div>
            <div className="how-it-works-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Customized Solution</h3>
              <p className="step-text">
                Our experts design a tailored package of services and technologies specifically for 
                your farm's unique requirements.
              </p>
            </div>
            <div className="how-it-works-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Implementation</h3>
              <p className="step-text">
                We handle the setup and installation of all necessary equipment and software, 
                ensuring everything works seamlessly.
              </p>
            </div>
            <div className="how-it-works-item">
              <div className="step-number">4</div>
              <h3 className="step-title">Training & Support</h3>
              <p className="step-text">
                Our team provides comprehensive training and ongoing support to help you 
                maximize the benefits of our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;