import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur?',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur?',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur?',
      },
      {
        icon: <FaBeer />,
        title: 'Craft beers',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur?',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((element, index) => (
            <article key={index} className='service'>
              <span>{element.icon}</span>
              <h6>{element.title}</h6>
              <p>{element.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
