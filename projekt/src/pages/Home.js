import React from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../actions'
import ServiceItem from './Components/service/serviceItem'
import Hero from './Components/hero'




class Home extends React.Component {
  state = {
    services: []
  }

  componentDidMount () {
    this.props.dispatch(fetchServices())
    console.log(fetchServices());


  }

  renderServices = (services) => {
    return services.map(service => <ServiceItem key={service.id} service={service} />)
  }

  render() {
    const {services} = this.props
    // const {testingData, testingNumber} = this.props.test

    return (
      <div>

        <Hero />

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2"> Services </h2>
              <h3 className="subtitle is-5 is-muted"> You need help? go fuck yourself</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                {this.renderServices(services)}
                  </div>
                </div>
              </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({services: state.services.items})

export default connect(mapStateToProps)(Home)
