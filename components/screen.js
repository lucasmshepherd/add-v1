import React from 'react';
import Router from 'next/router'
import $ from 'jquery';

import styles from './screen.module.sass'

export default class Screen extends React.Component {
  componentDidMount () {

    $('body').addClass('screener');
    
    var $text = $('.screen_text__sUFX5');

    function set(txt) {
      $text.html(txt);
    }
    
    function slicer(str) {
      var sliced = [];
      for (var i = 0; i <= str.length; i++) {
        sliced.push(str.slice(0, i));
      }
      
      return sliced;
    }
    
    function pause (str, time) {
      // Return an array with time copies of str
      
      var strings = [];
      for (var i = 0; i < time; i++) {
        strings.push(str);
      }
      return strings;
    }
    
    function assemble(statements) {
      var slices = [];
      
      statements.forEach(function (stmt) {
        var sliced = slicer(stmt);
        var interstatementPause = pause("", 3);
        slices = slices.concat(sliced);
        
        // Pause on the completed statement
        slices = slices.concat(pause(stmt, 30));
        
        // Backspace it away
        // slices = slices.concat(sliced.reverse());
        slices = slices.concat(interstatementPause);
      });
      return slices;
    }
    
    var statements = [
      "Our DAO is geared toward the advancement of a more decentralized society and providing the means to fund projects without censorship from central authorities.             ",
      "Click to continue                                                                                                                                                  ",
    ]
    
    function rand(min, max) {
      return min + Math.random() * (max - min) | 0;
    }
    
    var slices = assemble(statements);
    var slicesLength = slices.length;
    var slicesCount = slicesLength;
    
    function animate() {
      var current = slices.shift();
      set(current);
      slices.push(current);
      setTimeout(animate, rand(20, 100));
    }
    
    animate()

  }

  render () {
    return (
      <> 
        <div className={styles.text}></div>
        <div className={styles.scanlines}></div>
      </>
    )
  }
}