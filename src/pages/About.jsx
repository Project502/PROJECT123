import { FaUsers, FaHistory, FaGlobe, FaSeedling } from 'react-icons/fa'

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")'
      }}>
        <div className="container">
          <h1 className="hero-title">About AgroVison</h1>
          <p className="hero-subtitle">
            Learn about our mission, vision, and the team behind our agricultural technology solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666', lineHeight: '1.8' }}>
                AgriTech was founded in 2018 by a team of agricultural experts and technology innovators who 
                saw the potential for digital transformation in farming. Our founders grew up in farming 
                communities and witnessed firsthand the challenges that farmers face every day.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666', lineHeight: '1.8' }}>
                What began as a small startup with a focus on soil analysis has grown into a comprehensive 
                agricultural technology company serving thousands of farmers across the country. Our mission 
                has remained the same: to empower farmers with technology that improves yields, reduces costs, 
                and promotes sustainable farming practices.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Today, AgriTech is at the forefront of the agricultural technology revolution, constantly 
                innovating and developing new solutions to address the evolving needs of modern farming.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Farmers in field" 
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do at AgriTech
          </p>

          <div className="grid">
            <div className="card">
              <div className="card-body text-center">
                <FaSeedling className="feature-icon" />
                <h3 className="card-title">Sustainability</h3>
                <p className="card-text">
                  We are committed to promoting farming practices that are environmentally sustainable 
                  and preserve natural resources for future generations.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <FaUsers className="feature-icon" />
                <h3 className="card-title">Farmer-First Approach</h3>
                <p className="card-text">
                  We design all our solutions with farmers' needs in mind, ensuring that our technology 
                  is accessible, practical, and delivers real value.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <FaHistory className="feature-icon" />
                <h3 className="card-title">Continuous Innovation</h3>
                <p className="card-text">
                  We are constantly researching, developing, and improving our technologies to stay 
                  ahead of the evolving challenges in agriculture.
                </p>
              </div>
            </div>

            {/* <div className="card">
              <div className="card-body text-center">
                <FaGlobe className="feature-icon" />
                <h3 className="card-title">Global Impact</h3>
                <p className="card-text">
                  We believe in the power of technology to address global food security challenges 
                  and improve agricultural practices worldwide.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the experts behind AgriTech's innovative solutions
          </p>

          <div className="grid">
            <div className="card">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Robert Johnson" 
                className="card-img"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Robert Johnson</h3>
                <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '10px' }}>CEO & Co-Founder</p>
                <p className="card-text">
                  With over 20 years of experience in agriculture and technology, Robert leads our company's 
                  vision and strategic direction.
                </p>
              </div>
            </div>

            <div className="card">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Emily Chen" 
                className="card-img"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Emily Chen</h3>
                <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '10px' }}>CTO & Co-Founder</p>
                <p className="card-text">
                  Emily oversees our technology development, bringing her expertise in AI and data science 
                  to solve complex agricultural challenges.
                </p>
              </div>
            </div>

            <div className="card">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="Michael Rodriguez" 
                className="card-img"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Michael Rodriguez</h3>
                <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '10px' }}>Chief Agricultural Officer</p>
                <p className="card-text">
                  As a former farmer and agricultural scientist, Michael ensures our solutions address 
                  real-world farming challenges effectively.
                </p>
              </div>
            </div>

            <div className="card">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Sarah Williams" 
                className="card-img"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Sarah Williams</h3>
                <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '10px' }}>Head of Customer Success</p>
                <p className="card-text">
                  Sarah leads our customer support team, ensuring that farmers get the most value from 
                  our agricultural technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
        color: 'white',
        padding: '80px 0'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>5000+</h3>
              <p style={{ fontSize: '1.2rem' }}>Farmers Served</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>20+</h3>
              <p style={{ fontSize: '1.2rem' }}>Agricultural Solutions</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>30%</h3>
              <p style={{ fontSize: '1.2rem' }}>Average Yield Increase</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>25%</h3>
              <p style={{ fontSize: '1.2rem' }}>Water Usage Reduction</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About