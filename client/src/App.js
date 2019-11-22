import React, { Component } from 'react';
import './App.scss';

import { Helmet } from 'react-helmet';

import datafile from './data/data';
import globaldata from './data/globaldata';
import sciencedata from './data/sciencedata';

import image from './styles/assets/TEDinfluence1.svg'
import graphtoo from './styles/assets/BARTRANS.png'

export default class App extends Component {
  state = {
    tech: null,
    science: null,
    global: null
  }

  openPanel = (e) => {
    console.log(e.target.value)
    if (e.target.value === "tech") {
      this.setState({
        tech: true,
        science: null,
        global: null
      })
    }
    if (e.target.value === "global") {
      this.setState({
        tech: null,
        science: null,
        global: true
      })
    }
    if (e.target.value === "science") {
      this.setState({
        tech: null,
        science: true,
        global: null
      })
    }
  }

  render() {
    return (
      <div className="App" >
        < Helmet >
          <title>TEDfluence</title>
        </Helmet>
        <div>
          <img className="image-hero" src={image} alt="asdf"></img>
          <div>
            <button className="tech-button" onClick={this.openPanel} value="tech">
              <h3>Technology</h3>
              <p>727</p>
            </button>
            <button className="global-button" onClick={this.openPanel} value="global">
              <h3>Global Issues</h3>
              <p>450</p></button>
            <button className="science-button" onClick={this.openPanel} value="science">
              <h3>Science</h3>
              <p>567</p></button>
          </div>
        </div>

        {this.state.tech ?
          <div className="videos" key="">
            {datafile.map(index => {
              let embedUrl = ''
              for (let i = 12; i < index.url.length; i++) {
                embedUrl += index.url[i]
              }
              return (
                <div className="video__card">
                  <iframe className="video__link" src={`https://embed.${embedUrl}`} width="240" height="180" frameBorder="0" scrolling="no" />
                </div>
              )
            })}
          </div>
          : null}

        {this.state.global ?
          <div className="videos" key="">
            {globaldata.map(index => {
              let embedUrl = ''
              for (let i = 12; i < index.url.length; i++) {
                embedUrl += index.url[i]
              }
              return (
                <div className="video__card">
                  <iframe className="video__link" src={`https://embed.${embedUrl}`} width="240" height="180" frameBorder="0" scrolling="no" />
                </div>
              )
            })}
          </div>
          : null}

        {this.state.science ?
          <div className="videos" key="">
            {sciencedata.map(index => {
              let embedUrl = ''
              for (let i = 12; i < index.url.length; i++) {
                embedUrl += index.url[i]
              }
              return (
                <div className="video__card">
                  <iframe className="video__link" src={`https://embed.${embedUrl}`} width="240" height="180" frameBorder="0" scrolling="no" />
                </div>
              )
            })}
          </div>
          : null}

          <div className="extra-graphs">
            <img className="graphtwo" src={graphtoo}></img>
          </div>
      </div >
    )
  }
}