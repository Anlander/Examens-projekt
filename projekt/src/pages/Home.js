import React from 'react'
import NavbarClone from './Components/NavbarClone'
import Navbar from './Components/Navbar'

import { getServices } from '../store'

class Home extends React.Component {
  state = {
    services: []
  }

  componentDidMount () {
    const services = getServices()
    this.setState({services})
  }

  renderServices = (services) => {
    console.log(this.state.services);
    return services.map(service =>
          <div
            key={services.id}
            className="column is-one-third">
            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
              <div className="card-title">
                 <h4>{services.title}</h4>
              </div>
              <div className="card-icon">
                 <img src={services.image} alt=""/>
              </div>
              <div className="card-text">
                 <p>{services.description}</p>
              </div>
              <div className="card-action">
                 <a href="#" className="button btn-align-md accent-btn raised">Learn More</a>
              </div>
            </div>
          </div>
    )
  }

  render() {
    const {services} = this.state
    return (
      <div>
        <NavbarClone />
        <section className="hero is-default is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-5 is-offset-1 landing-caption">
                  <h1 className="title is-1 is-bold is-spaced">
                      Learn, Collaborate.
                  </h1>
                  <h2 className="subtitle is-5 is-muted">Lorem ipsum sit dolor amet is a dummy text used by typography industry </h2>
                  <p>
                    <a className="button cta rounded primary-btn raised">
                        Get Started
                    </a>
                  </p>
                </div>
                <div className="column is-5 is-offset-1">
                  <figure className="image is-4by3">
                    <h1> Picture </h1>
                  </figure>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                {this.renderServices()}
                  </div>
                </div>
              </div>
        </section>
      </div>
    )
  }
}

export default Home
