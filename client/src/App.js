import React, { Component } from 'react';
import './App.scss';

import { Helmet } from 'react-helmet';

import datafile from './data/data';
import globaldata from './data/globaldata';
import sciencedata from './data/sciencedata';

import image from './styles/assets/TEDinfluence1.svg'

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
        {/* <div className="navBar">
          <h1>TEDfluence</h1>
          <ul className="navBar__list">
            <li className="navBar__item">Discover</li>
            <li className="navBar__item">About</li>
            <li className="navBar__item">Login</li>
          </ul>
        </div>
        <div className="blob">

        </div> */}

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
              // console.log(embedUrl)
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
              // console.log(embedUrl)
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
              // console.log(embedUrl)
              return (
                <div className="video__card">
                  <iframe className="video__link" src={`https://embed.${embedUrl}`} width="240" height="180" frameBorder="0" scrolling="no" />
                </div>
              )
            })}
          </div>
          : null}


        {/* <div className="background-left">

        </div> */}
        {/* <div className="videos">
          <div>
            <div>
              <iframe src="https://embed.ted.com/talks/tony_robbins_why_we_do_what_we_do" width="400" height="400" frameborder="0" scrolling="no" allowfullscreen />
            </div>
          </div>
        </div> */}
      </div >
    )
  }
}