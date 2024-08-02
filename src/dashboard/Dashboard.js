//? - - PACKAGES - - //
import React, {Component} from "react";
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//? - - FILES - - //
import SearchTerms from './dash-helper-files/Search-Terms'

//? - - CSS - - //
const Styles = styled.div `

        // - - - - FULL PAGE - - - - //

.full-page { 
    height: 100vh;
    width: 100%;
    position: fixed;
}

.full-page:after {
    content: "";
    clear: both;
    display: table;
}

    // - - LEFT / RIGHT PANES - - //

.left-pane {
    height: 100%;
    float: left;
    width: 17.5%;
    text-align: center;
    background-color: #f1f3f8;
    border-right: 1px solid #ccc;
}

.right-pane {
    height: 100%;
    float: left;
    width: 78%;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #FBFBFF;
}

    // - - HEADER (RIGHT PANE) - - //? SEARCH BAR & OPTIONS

.right-pane-header {
    padding-top: 1.5%;
}

.right-pane-header:after {
    content: "";
    clear: both;
    display: table;
}

.right-pane-header-left {
    float: left;
    width: 60%;
    text-align: left;
}

.right-pane-header-right {
    float: left;
    width: 40%;
    text-align: right;
}

    //! - - Search Bar - - //

    // - - SEARCH INPUT - - //

.right-pane-header-left input {
    margin-top: 0.25%;
    width: 83.5%;
    font-family: dm sans;
    padding: 1.15%;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.right-pane-header-left input:focus {
    outline: 2px solid #2980b9;
    border: 1px solid #2980b9;
}

// .right-pane-header-left input::placeholder {
    
// }

    // - - SEARCH RESULTS - - //

.searchResults {
    overflow-y: auto;
    width: 85%;
    position: relative;
    background-color: white;
    height: 100%;
    border: 1px solid #cccccc;
    border-radius: 7px;
    // border-bottom-right-radius: 7px;
    padding: 0.5%;
    padding-top: 0px;
    margin-top: 1.5%;
}

    // - SEARCH RESULT CELL - //

.searchResultCell {
    text-align: left;
    padding-left: 0.5%;
    padding-right: 0.5%;
    margin-top: 0px;
    padding-bottom: 0px;
    border-radius: 5px;
    cursor: pointer;
}

.searchResultCell p {
    margin-top: 0px;
    height: 90%;
    margin-bottom: 0px;
    font-family: dm sans;
    font-size: 85.5%;
}

.searchResultOption {
    padding-top: 1%;
    margin-bottom: 0px;
    font-size: 85.5%;
    overflow: hidden;          /* Hide the overflowing text */
    display: -webkit-box;      /* Use the flexible box layout */
    -webkit-box-orient: vertical; /* Set the box orientation to vertical */
    -webkit-line-clamp: 2;     /* Number of lines to show before truncating */
    line-clamp: 2;             /* Standard property for other browsers (future-proof) */
}

.searchResultCategory {
    font-size: 82%;
    padding-bottom: 1%;
    cursor: pointer;
}

.searchResultCell:hover,
.codeSnippetResult:hover {
  background-color: #eef7fd;
  color: #1c4c75;
}

    //! - - Top pane options - - !//

    // - - TOP PANE OPTIONS - - //

.right-pane-header-right {
    
}

.right-pane-header-right:after {
    content: "":
    display: table;
    clear: both;
}

    // - EXPORT MINUTES CONTAINER - //

.export-minutes {
    float: left;
    width: 30.5%;
    text-align: center;
    border: 1px solid #ccc;
    margin-left: 1%;
    border-radius: 10px;
    padding-top: 1.5%;
    padding-bottom: 1.15%;
}

.export-minutes:hover {
    cursor: pointer;
}

.export-minutes:after {
    content: "";
    clear: both;
    display: table;
}

.export-minutes-left {
    padding-top: 0.2%;
    float: left;
    width: 20%;
    text-align: center;
}

.export-minutes-right {
    float: left;
    width: 80%;
    text-align: left;
    padding-bottom: 0.5%;
}

    // - TOP RIGHT PANE BUTTONS (ALL) CONTAINERS - //

.right-pane-top-pane-buttons {
    float: right;
    width: 68%;
    text-align: right;
}

.right-pane-top-pane-buttons:after {
    content: "";
    clear: both;
    display: table;
}

.top-pane-btn-1 {
    float: left;
    width: 36%;
    text-align: center;
    border: 1px solid #ccc;
    margin-right: 3%;
    margin-left: 6%;
    border-radius: 10px;
    padding-top: 1.25%;
    padding-bottom: 1%;
    padding-left: 1%;
}

.top-pane-btn-1:hover {
    cursor: pointer;
}

.top-pane-btn-2 {
    float: left;
    width: 25%;
    text-align: center;
    border: 1px solid #FF3169;
    margin-right: 3.5%;
    margin-left: 3.5%;
    padding: 2%;
    border-radius: 10px;
    padding-bottom: 3%;
    padding-top: 2%;
    background-color: #FF3169;
    color: white;
    // font-weight: bold;
    cursor: pointer;
}

.top-pane-btn-3 {
    float: left;
    width: 6%;
    text-align: center;
    border: 1px solid #ccc;
    margin-left: 3.5%;
    padding: 2%;
    border-radius: 10px;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    padding-left: 3%;
    padding-right: 3%;
    cursor: pointer;
}

.top-pane-btn-1:after {
    content: "";
    clear: both;
    display: table;
}

.top-pane-btn-left {
    float: left;
    width: 19%;
    text-align: center;
    padding-top: 4.5%;
    padding-bottom: 3%;
}

.top-pane-btn-right {
    float: right;
    width: 80%;
    text-align: right;
    padding-top: 3%;
    padding-bottom: 3%;
}

    // # EXPORT MINUTES BTN IMAGE

.export-minutes-left img {
    width: 65%;
}

    // # EXPORT MINUTES BTN TEXT

.export-minutes-right label {
    font-family: dm sans;
    font-size: 83%;
    margin-top: 1.5%;
    margin-right: 9.5%;
    float: right;
}

.export-minutes-right label:hover {
    cursor: pointer;
}

    // # TOP RIGHT BUTTONS IMG (DISCORD)

.top-pane-btn-1 img {
    width: 76%;
    margin-left: 15%;
}

// # TOP RIGHT BUTTONS TEXT (DISCORD / UPGRADE / USER)

.top-pane-btn-1 label {
    font-size: 86%;
    margin-right: 10%;
}

.top-pane-btn-1 label:hover {
    cursor: pointer;
}

.top-pane-btn-2 label {
    font-size: 90%;
}

.top-pane-btn-2 label:hover {
    cursor: pointer;
}

.top-pane-btn-3 h1 {
    font-size: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
}

.top-pane-btn-3 h1:hover {
    cursor: pointer;
}

    //! - - Welcome back header - - //

.welcome-header h3 {
    margin-bottom: 1%;
    text-align: left;
    font-family: dm sans;
}


    //! - - Section 1 (right pane) - - //

.right-pane-section-1 {
    height: 22em;
}

.right-pane-section-1:after {
    content: "";
    display: table;
    clear: both;
}

.rp-sec1-left-parent {
    float: left;
    width: 32%;
    text-align: center;
    height: 100%;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #9a9a9a;
    border-radius: 8px;
    background: linear-gradient(930deg, #add8e6, #D1A6FB);
}

.rp-sec1-mid-parent {
    float: left;
    width: 32%;
    text-align: center;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 6px 20px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #9a9a9a;
    height: 100%;
    margin-left: 1.7%;
    border-radius: 8px;
    background-color: #fff;
}

.rp-sec1-right-parent {
    float: left;
    width: 32%;
    text-align: center;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 6px 20px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #9a9a9a;
    height: 100%;
    margin-left: 1.7%;
    border-radius: 8px;
    background-color: #fff;
}



    // - - WINDOW 1 (SECTION 1 - GET STARTED) - - //

.window1-bottom-section:after {
    content: "";
    display: table;
    clear: both;
}

.window1-bottom-left {
    float: left;
    width: 50%;
    text-align: center;
    padding-left
}

.window1-bottom-right {
    float: left;
    width: 50%;
    text-align: center;
}

    // # WINDOW 1 TEXT

.rp-sec1-left-parent h1 {
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
    color: white;
    font-size: 2.3em;
    font-family: dm sans;
    font-weight: 900;
    margin-top: 5%;
    margin-bottom: 1%;
 }

 .rp-sec1-left-parent p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 90%;
    text-align: left;
    margin-left: 5%;
    font-weight: bold;
    font-family: dm sans;
    color: white;
 }

    // # WINDOW 1 BUTTON

.rp-sec1-left-parent button {
    display: flex;
    left: 0;
    margin-top: 48%;
    margin-left: 10%;
    padding: 6%;
    background-color: white;
    border: 2px solid white;
    border-radius: 10px;
    font-weight: bold;
    font-size: 110%;
    font-family: dm sans;
}

.wash-button {
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    font-size: 100%;
    color: black;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth transition for background color */
  }
  
  .wash-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.1); /* Color of the wash effect */
    transition: transform 0.5s ease;
    transform: translate(-50%, -50%) scale(0); /* Initial state */
    border-radius: 50%;
  }
  
  .wash-button:hover::before {
    transform: translate(-50%, -50%) scale(1); /* Scale up on hover */
  }
  
  .wash-button:hover {
    background-color: #2980b9; /* Change background color on hover */
    color: white;
    width: 48%;
  }

    // # WINDOW 1 BUTTON IMAGE

.rp-sec1-left-parent img {
    width: 15%;
    margin-left: 9%;
}

.dialog-slide-left-enter {
    transform: translateX(-30%);
    opacity: 0;
}

.dialog-slide-left-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
}

    // # WINDOW 1 FLOATING IMAGE

.window1-pic {
    display: inline-block; /* Or any other suitable display property */
    perspective: 1000px; /* Optional, adds depth perspective */
  }
  
.levitate {
    display: block; /* Ensure the image behaves like a block element */
    animation: levitate 3s ease-in-out infinite;
}
  
@keyframes levitate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
}



    // - - WINDOW 2 (SECTION 1 - TUTORIALS) - - //

.rp-sec1-mid-parent h2 {
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
    color: black;
    font-family: dm sans;
    font-weight: 900;
    margin-top: 5%;
    margin-bottom: 1%;
}

.rp-sec1-mid-parent p {
    margin-top: 0px;
    // margin-bottom: 0px;
    font-size: 80%;
    text-align: left;
    margin-left: 5%;
    font-weight: bold;
    font-family: dm sans;
    color: black;
}

    // - TUTORIAL CONTAINER - //

    // # TUTORIAL HEADER

.tutorial-header:after {
    content: "";
    clear: both;
    display: table;
}

.tutorial-header-left {
    float: left;
    width: 70%;
    text-align: center;
}

.tutorial-header-right {
    float: left;
    width: 30%;
    text-align: center;
    // border-left: 1px solid black;
}

    // # TUTORIAL HEADER IMG

.tutorial-header-right img {
    width: 58%;
    margin-top: 8%;
}

    // # TUTORIAL CONTAINER

.tutorial-container {
    height: 15.5em;
    overflow: auto;
    // border: 1px solid black;
}

    // # TUTORIAL CELL

.tutorial-cell:after {
    content: "";
    clear: both;
    display: table;
}

.tutorial-cell {
    border: 1px solid #ccc;
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 10px;
    padding: 2%;
    background-color: white;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.tutorial-cell-left {
    float: left;
    width: 20%;
    text-align: left;
}

.tutorial-cell-right {
    float: left;
    width: 80%;
    text-align: left;
}

    // # TUTORIAL CELL MAIN IMAGE

.tutorial-cell-left img {
    width: 78.5%;
    border: 1px solid #ccc;
    padding: 3%;
    padding-left: 6%;
    padding-right: 6%;
    border-radius: 10px;
    margin-top: 5%;
    margin-left: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
}

.levitate2 {
    display: block; /* Ensure the image behaves like a block element */
    animation: levitate 1s ease-in-out;
}
  
@keyframes levitate2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5px);
    }
    100% {
      transform: translateY(0);
    }
}

    // # TUTORIAL CELL MAIN TEXT

.tutorial-cell-right h5 {
    margin-top: 2%;
    margin-bottom: 1%;
    font-size: 75%;
    margin-left: 5%;
    margin-right: 5%;
    font-family: dm sans;
    color: #5e626a;
    font-weight: normal;
}

.tutorial-cell-timer {
    width: 50%;
    margin-left: 3%;
}

.tutorial-cell-timer:after {
    content: "";
    clear: both;
    display: table;
}

.tutorial-cell-timer-left {
    float: left;
    width: 15%;
    text-align: left;
    // border-right: 1px solid black;
}

.tutorial-cell-timer-right {
    float: left;
    width: 60%;
    text-align: left;
    // border-right: 1px solid black;
}

    // # TUTORIAL CELL TIMER IMAGE

.tutorial-cell-timer-left img {
    width: 85%;
    margin-left: 15%;
    margin-top: 20%;
}

    // # TUTORIAL CELL TIMER TEXT  

.tutorial-cell-timer-right p {
    margin-top: 6%;
    margin-bottom: 0px;
    font-size: 75%;
    color: #2980B9;
    font-weight: 900;
}

    // # TUTORIAL CELL WATCH BUTTON

.tutorial-cell-header button {
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 8px;
    font-family: dm sans;
    font-size: 80%;
    font-weight: bold;
    padding-left: 5%;
    padding-right: 5%;
    cursor: pointer;
}

.tutorial-cell-header button:hover {
    background-color: #2980B9;
    color: white;
    border: 2px solid #2980B9;
}

    // # TUTORIAL FOOTER

.tutorial-footer h4 {
    text-align: left;
    margin-left: 5%;
    font-family: dm sans;
    color: #2890b9;
}



    // - - WINDOW 3 (SECTION 1 - POPULAR APPS) - - //

.rp-sec1-right-parent h1 {
    text-align: left;
    padding-left: 4%;
    padding-right: 4%;
    color: black;
    font-family: dm sans;
    font-weight: 900;
    margin-top: 3%;
    margin-bottom: 0px;
}

.rp-sec1-right-parent h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 103%;
    text-align: left;
    margin-left: 4%;
    font-weight: bold;
    font-family: dm sans;
    color: #2980b9;
}

    // - POPULAR APPS - //
.popular-apps-container {
    height: 15.53em;
    overflow: auto;
}

.popular-apps-row-container {
    margin-left: 4%;
    margin-right: 4%;
    height: auto;
    margin-top: 3%;
}

.popular-apps-row-container:after {
    content: "";
    display: table;
    clear: both;
}

.popular-apps-cell { 
    float: left;
    width: 48%;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 9px;
    border-bottom: 5px solid #FF3169;
}

.popular-apps-cell:hover { 
    cursor: pointer;
}

    // # POPULAR APPS CELL IMAGE

.popular-apps-cell-img-container {
    background: white;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #ccc;
    background: linear-gradient(930deg, #add8e6, #D1A6FB);
}

.popular-apps-cell img { 
    width: 60%;
}

    // # POPULAR APPS CELL TEXT

.popular-apps-cell-text-container h5 {
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: left;
    margin-left: 3%;
    font-family: dm sans;
    color: #2890b9;
}

.popular-apps-cell-text-container p {
    text-align: left;
    font-size: 70%;
    margin-top: 0px;
    margin-bottom: 5%;
    margin-left: 3%;
    margin-right: 3%;
    font-family: dm sans;
}


    //! - - Section 2 (right pane) - - //

.right-pane-section-2 {
    // border: 1px solid black;
    margin-top: 2%;
    height: 36.8vh;
    width: 100%;
}

.right-pane-section-2:after {
    content: "";
    display: table;
    clear: both;
}

.rp-sec2-left-parent {
    float: left;
    width: 49%;
    text-align: center;
    border: 1px solid #9a9a9a;
    height: 100%;
    border-radius: 10px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
}

.rp-sec2-right-parent {
    float: left;
    width: 49%;
    text-align: center;
    border: 1px solid #9a9a9a;
    margin-left: 1.65%;
    height: 100%;
    border-radius: 10px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 6px 20px 0 rgba(0, 0, 0, 0.06);
}



    // - - WINDOW 1 (SECTION 2 - PROJECTS) - - //

    // # PROJECTS HEADER CONTAINER

.projects-header:after {
    content: "";
    display: table;
    clear: both;
}

.projects-header-left {
    float: left;
    width: 70%;
    text-align: left;
    // border: 1px solid black;
}

.projects-header-right {
    float: left;
    width: 30%;
    text-align: center;
}

    // # PROJECTS HEADER CONTAINER TEXT

.projects-header-left h2 {
    text-align: left;
    margin-left: 3%;
    margin-top: 1%;
    margin-bottom: 0px;
    font-family: dm sans;
    color: #000;
}

.projects-header-left p {
    margin-top: 0px;
    margin-bottom: 3%;
    margin-left: 3%;
    font-size: 75%;
    font-family: dm sans;
    font-weight: bold;
    color: #2890b9;
}

    // # PROJECTS HEADER CONTAINER BUTTON

.projects-header-right button {
    width: 88%;
    padding: 6%;
    margin-top: 5%;
    border-radius: 8px;
    background-color: #2890b9;
    border: 2px solid #2890b9;
    color: white;
    font-weight: bold;
    font-family: dm sans;
    cursor: pointer;
    font-size: 85%;
}

    // # PROJECTS PLACEHOLDER CONTAINER

.projects-placeholder {
    border: 1px solid #9a9a9a;
    margin-left: 2%;
    margin-right: 2%;
    height: 74%;
    border-radius: 8px;
}

.projects-placeholder img {
    width: 6%;
    margin-top: 9vh;
}

.projects-placeholder p { 
    margin-top: 0px;
    font-family: dm sans;
    font-weight: bold;
    color: #2890b9;
    font-size: 80%;
}

    // - - WINDOW 2 (SECTION 2 - EXAMPLES) - - //

    // # EXAMPLES HEADER

.examples-header:after {
    content: "";
    display: table;
    clear: both;
}

.examples-header-left {
    float: left;
    width: 70%;
    text-align: left;
}

.examples-header-right {
    float: left;
    width: 30%;
    text-align: left;
}

.examples-header-left h2 {
    text-align: left;
    margin-top: 1%;
    margin-left: 3%;
    margin-bottom: 0px;
    font-family: dm sans;
}

.examples-header-left p {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 3%;
    margin-left: 3%;
    font-size: 85%;
    font-family: dm sans;
    font-weight: bold;
    color: #2890b9;
}

    // # EXAMPLES CREATORS CAROUSEL CONTAINER

.slider-container:after {
    content: "";
    display: table;
    clear: both;
}

.slider-left-btn {
    float: left;
    width: 6%;
    text-align: right;
}

.slider-mid-container {
    float: left;
    width: 88%;
    text-align: center;
}

.slider-right-btn {
    float: left;
    width: 6%;
    text-align: left;
}

.creator-slider-container {
    // border: 1px solid black;
    width: 99% !important;
    height: 25vh;
}

.creator-slider-row-container:after {
    content: "";
    display: table;
    clear: both;
}

    // # CAROUSEL INNER CONTAINER

.creator-profile-col {
    float: left;
    width: 23%;
    text-align: center;
    // border: 1px solid black;
    height: 100%;
    margin-left: 2.1%;
}

    // # CAROUSEL BUTTONS

.slider-left-btn button {
    font-family: dm sans;
    font-weight: bold;
    margin-top: 9vh;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: #2890b9;
    color: white;
}

.slider-right-btn button {
    font-family: dm sans;
    font-weight: bold;
    margin-top: 9vh;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: #2890b9;
    color: white;
}

    // # CREATOR PROFILE CELL

.creator-profile-cell {
    width: 100%;
    // border: 1px solid blue;
    height: 49%;
}

    // # CREATOR PROFILE BACKGROUND CELL

.creator-profile-cell-bg {
    margin: auto;
    width: 70%;
    border: 1px solid #8a8a8a;
    margin-top: 0px;
    padding-top: 8%;
    border-radius: 9px;
    padding-bottom: 1%;
    border-bottom: 5px solid #8a8a8a;
    cursor: pointer;
}

.creator-profile-cell-bg img {
    text-align: center;
    width: 50%;
    margin: auto;
    border: 1px solid #8a8a8a;
    border-radius: 50%;
}

.creator-profile-cell-bg h5 {
    margin-top: 5%;
    margin-bottom: 0px;
    font-size: 45%;
}

.creator-profile-cell-bg p {
    margin-top: 2%;
    font-size: 45%;
    font-weight: bold;
    color: #2890b9;
}


`
//* - TRIE NODE IMPLEMENTATION (for search functionality) - *//
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

export default class Dashboard extends Component {
    constructor () {
        super()
        this.state = {

                //! - - TOP PANE (RIGHT PANE) - - !//

            //* - - SEARCH BAR VAR(s) - - *//
            searchedData: "",
            searchBarBorderColor: "#dedede",

            //* - - EXPORT POINTS VAR(s) - - *//
            exportPointsBorderColor: "#ccc",

            //* - - JOIN DISCORD VAR(s) - - *//
            joinDiscordBorderColor: "#ccc",
            joinDiscordHovered: false,

            //* - - UPGRADE VAR(s) - - *//
            upgradeBgColor: "white",
            upgradeTxtColor: "black",

            //* - - USER NAME BTN VAR(s) - - *//
            userNameBgColor: "#c2175b",
            userNameTxtColor: "white",

                //! - - SECTION 1 (RIGHT PANE) - - !//

            //* - - 'START CREATING' BUTTON - - *//
            startCreatingBtnWidth: "auto",
            startCreatingBtnFontSize: "100%",
            startCreatingIconWidth: "0%",

            //* - - TUTORIAL CELL VAR(S) - - *//
            tutorialCell1Hovered: false,
            tutorialCell1BorderColor: "#8a8a8a",
            tutorialCell1ImgBgColor: "white",
            tutorialCell1TimerColor: "#5e626a",
            tutorialCell1MainTextColor: "#000",

            tutorialCell2Hovered: false,
            tutorialCell2BorderColor: "#8a8a8a",
            tutorialCell2ImgBgColor: "white",
            tutorialCell2TimerColor: "#5e626a",
            tutorialCell2MainTextColor: "#000",

            tutorialCell3Hovered: false,
            tutorialCell3BorderColor: "#8a8a8a",
            tutorialCell3ImgBgColor: "white",
            tutorialCell3TimerColor: "#5e626a",
            tutorialCell3MainTextColor: "#000",

            tutorialCell4Hovered: false,
            tutorialCell4BorderColor: "#8a8a8a",
            tutorialCell4ImgBgColor: "white",
            tutorialCell4TimerColor: "#5e626a",
            tutorialCell4MainTextColor: "#000",

            tutorialCell5Hovered: false,
            tutorialCell5BorderColor: "#8a8a8a",
            tutorialCell5ImgBgColor: "white",
            tutorialCell5TimerColor: "#5e626a",
            tutorialCell5MainTextColor: "#000",

            tutorialCell6Hovered: false,
            tutorialCell6BorderColor: "#8a8a8a",
            tutorialCell6ImgBgColor: "white",
            tutorialCell6TimerColor: "#5e626a",
            tutorialCell6MainTextColor: "#000",

            tutorialCell7Hovered: false,
            tutorialCell7BorderColor: "#8a8a8a",
            tutorialCell7ImgBgColor: "white",
            tutorialCell7TimerColor: "#5e626a",
            tutorialCell7MainTextColor: "#000",

            tutorialCell8Hovered: false,
            tutorialCell8BorderColor: "#8a8a8a",
            tutorialCell8ImgBgColor: "white",
            tutorialCell8TimerColor: "#5e626a",
            tutorialCell8MainTextColor: "#000",

            //* - - POPULAR APPS VAR(S) - - *//
            popularApp1Hovered: false,
            popularApp2Hovered: false,
            popularApp3Hovered: false,
            popularApp4Hovered: false,
            popularApp5Hovered: false,
            popularApp6Hovered: false,

                //! - - SECTION 1 (RIGHT PANE) - - !//

            //* - - CONTENT EXAMPLES VAR(S - - *//
            currentSlide: 0,
            totalSlides: 3,
            carouselPrevBtnBgColor: "transparent",
            carouselPrevBtnTxtColor: "transparent",
            carouselPrevBtnClicker: "default",
            carouselNextBtnBgColor: "#2890b9",
            carouselPrevBtnTxtColor: "white",
            carouselNextBtnClicker: "pointer",

        }

            //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

            //* - - REFERENCE FOR CAROUSEL BUTTONS - - *//
        this.sliderRef = React.createRef();

    }

            //* - - - - - PROGRAM FUNCTIONS - - - - - *//

        //! - - SEARCH FUNCTIONS - - !//

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    }

    handleSearchChange = (e) => {
        const { searchFilterTitle, searchFilterSelected, menuOption1, menuOption2, menuOption3, menuOption4 } = this.state; 
        let { currentSectionSearching } = this.state;
        this.setState({
            searchedData: e.target.value,
            isSearchLoading: true,
            clearSearchBtn: true,
            showDocsPopupHomescreen: false
        });
        
        const searchInput = e.target.value.toLowerCase();
        
        // Clear previous timeout
    
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false,
                    showDocsPopupHomescreen: true,
                    clearSearchBtn: false
                });

            } else {

                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    const filteredOptions = SearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(' '); // Split search input into words
                        const optionWords = name.split(' '); // Split name into words
                    
                        if (searchWords.length === 1) {
                            // Special case: search input is a single word
                            const searchWord = searchWords[0];
                            return optionWords.some(optionWord => optionWord.startsWith(searchWord));
                        } else {
                            // Combine search words into a single substring
                            const searchSubstring = searchWords.join(' ');
                            return name.includes(searchSubstring);
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0; // Check if any results were found
    
                    const highlightedOptions = filteredOptions.map(option => ({
                        ...option,
                        highlightedName: this.highlightMatchedCharacters(option, searchInput)
                    }));
    
                    const groupedResults = this.groupBy(highlightedOptions, 'category');
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // Update state after search logic is complete
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: highlightedOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                });
            }
        }, 0); // Set debounce delay to 500ms
    };

    highlightMatchedCharacters(option, searchInput, isSearchLoading) {
        const name = option.name.toLowerCase();
        const searchRegex = new RegExp(`\\b${searchInput}`, 'i');
        const match = name.match(searchRegex);
        
        if (!isSearchLoading && searchInput && match) {
            // Match found and search input is not empty and not loading
            const startIndex = match.index;
            const endIndex = startIndex + searchInput.length;
            const highlightedName = (
                <span>
                    {option.name.substring(0, startIndex)}
                    <span style={{ fontWeight: "bold", color: "#2980b9" }}>
                        {option.name.substring(startIndex, endIndex)}
                    </span>
                    {option.name.substring(endIndex)}
                </span>
            );
            return highlightedName;
        } else {
            // No match found or search input is empty or loading
            return option.name;
        }
    }

        //! - - TOP RIGHT PANE FUNCTIONS - - !//

    exportPointsEnter = () => {
        this.setState({ exportPointsBorderColor: "#FF3169" })
    }
    exportPointsLeave = () => {
        this.setState({ exportPointsBorderColor: "#ccc" })
    }


    joinDiscordEnter = () => {
        this.setState({ joinDiscordBorderColor: "#FF3169", joinDiscordHovered: true })
    }
    joinDiscordLeave = () => {
        this.setState({ joinDiscordBorderColor: "#ccc", joinDiscordHovered: false })
    }


    startCreatingEnter = () => {
        this.setState({ startCreatingArrow: true, startCreatingIconWidth: "15%", startCreatingBtnWidth: "90%"})
    }
    startCreatingLeave = () => {
        this.setState({ startCreatingArrow: false, startCreatingIconWidth: "0px", startCreatingBtnWidth: "auto", })
    }

        //! - - SECTION 1 FUNCTIONS - - !//
        
        //* - - WINDOW 2 - - *//

    tutorialCell1Enter = () => {
        this.setState({
            tutorialCell1Hovered: true,
            tutorialCell1BorderColor: "#2980B9",
            tutorialCell1MainTextColor: "#000",
            tutorialCell1TimerColor: "#2980B9",
            tutorialCell1ImgBgColor: "#2980B9"
        })
    }
    tutorialCell1Leave = () => {
        this.setState({
            tutorialCell1Hovered: false,
            tutorialCell1BorderColor: "#8a8a8a",
            // tutorialCell1MainTextColor: "#5e626a",
            tutorialCell1TimerColor: "#5e626a",
            tutorialCell1ImgBgColor: "white"
        })
    }


    tutorialCell2Enter = () => {
        this.setState({
            tutorialCell2Hovered: true,
            tutorialCell2BorderColor: "#2980B9",
            tutorialCell2MainTextColor: "#000",
            tutorialCell2TimerColor: "#2980B9",
            tutorialCell2ImgBgColor: "#2980B9"
        })
    }
    tutorialCell2Leave = () => {
        this.setState({
            tutorialCell2Hovered: false,
            tutorialCell2BorderColor: "#8a8a8a",
            // tutorialCell2MainTextColor: "#5e626a",
            tutorialCell2TimerColor: "#5e626a",
            tutorialCell2ImgBgColor: "white"
        })
    }


    tutorialCell3Enter = () => {
        this.setState({
            tutorialCell3Hovered: true,
            tutorialCell3BorderColor: "#2980B9",
            tutorialCell3MainTextColor: "#000",
            tutorialCell3TimerColor: "#2980B9",
            tutorialCell3ImgBgColor: "#2980B9"
        })
    }
    tutorialCell3Leave = () => {
        this.setState({
            tutorialCell3Hovered: false,
            tutorialCell3BorderColor: "#8a8a8a",
            // tutorialCell3MainTextColor: "#5e626a",
            tutorialCell3TimerColor: "#5e626a",
            tutorialCell3ImgBgColor: "white"
        })
    }


    tutorialCell4Enter = () => {
        this.setState({
            tutorialCell4Hovered: true,
            tutorialCell4BorderColor: "#2980B9",
            tutorialCell4MainTextColor: "#000",
            tutorialCell4TimerColor: "#2980B9",
            tutorialCell4ImgBgColor: "#2980B9"
        })
    }
    tutorialCell4Leave = () => {
        this.setState({
            tutorialCell4Hovered: false,
            tutorialCell4BorderColor: "#8a8a8a",
            // tutorialCell4MainTextColor: "#5e626a",
            tutorialCell4TimerColor: "#5e626a",
            tutorialCell4ImgBgColor: "white"
        })
    }


    tutorialCell5Enter = () => {
        this.setState({
            tutorialCell5Hovered: true,
            tutorialCell5BorderColor: "#2980B9",
            tutorialCell5MainTextColor: "#000",
            tutorialCell5TimerColor: "#2980B9",
            tutorialCell5ImgBgColor: "#2980B9"
        })
    }
    tutorialCell5Leave = () => {
        this.setState({
            tutorialCell5Hovered: false,
            tutorialCell5BorderColor: "#8a8a8a",
            // tutorialCell5MainTextColor: "#5e626a",
            tutorialCell5TimerColor: "#5e626a",
            tutorialCell5ImgBgColor: "white"
        })
    }


    tutorialCell6Enter = () => {
        this.setState({
            tutorialCell6Hovered: true,
            tutorialCell6BorderColor: "#2980B9",
            tutorialCell6MainTextColor: "#000",
            tutorialCell6TimerColor: "#2980B9",
            tutorialCell6ImgBgColor: "#2980B9"
        })
    }
    tutorialCell6Leave = () => {
        this.setState({
            tutorialCell6Hovered: false,
            tutorialCell6BorderColor: "#8a8a8a",
            // tutorialCell6MainTextColor: "#5e626a",
            tutorialCell6TimerColor: "#5e626a",
            tutorialCell6ImgBgColor: "white"
        })
    }


    tutorialCell7Enter = () => {
        this.setState({
            tutorialCell7Hovered: true,
            tutorialCell7BorderColor: "#2980B9",
            tutorialCell7MainTextColor: "#000",
            tutorialCell7TimerColor: "#2980B9",
            tutorialCell7ImgBgColor: "#2980B9"
        })
    }
    tutorialCell7Leave = () => {
        this.setState({
            tutorialCell7Hovered: false,
            tutorialCell7BorderColor: "#8a8a8a",
            // tutorialCell7MainTextColor: "#5e626a",
            tutorialCell7TimerColor: "#5e626a",
            tutorialCell7ImgBgColor: "white"
        })
    }


    tutorialCell8Enter = () => {
        this.setState({
            tutorialCell8Hovered: true,
            tutorialCell8BorderColor: "#2980B9",
            tutorialCell8MainTextColor: "#000",
            tutorialCell8TimerColor: "#2980B9",
            tutorialCell8ImgBgColor: "#2980B9"
        })
    }
    tutorialCell8Leave = () => {
        this.setState({
            tutorialCell8Hovered: false,
            tutorialCell8BorderColor: "#8a8a8a",
            // tutorialCell8MainTextColor: "#5e626a",
            tutorialCell8TimerColor: "#5e626a",
            tutorialCell8ImgBgColor: "white"
        })
    }

        //* - - WINDOW 3 - - *//

    popularApp1Enter = () => {
        this.setState({ 
            popularApp1Hovered: true
         })
    }
    popularApp1Leave = () => {
        this.setState({ 
            popularApp1Hovered: false 
         })
    }


    popularApp2Enter = () => {
        this.setState({ 
            popularApp2Hovered: true
         })
    }
    popularApp2Leave = () => {
        this.setState({ 
            popularApp2Hovered: false 
         })
    }


    popularApp3Enter = () => {
        this.setState({ 
            popularApp3Hovered: true
         })
    }
    popularApp3Leave = () => {
        this.setState({ 
            popularApp3Hovered: false 
         })
    }


    popularApp4Enter = () => {
        this.setState({ 
            popularApp4Hovered: true
         })
    }
    popularApp4Leave = () => {
        this.setState({ 
            popularApp4Hovered: false 
         })
    }


    popularApp5Enter = () => {
        this.setState({ 
            popularApp5Hovered: true
         })
    }
    popularApp5Leave = () => {
        this.setState({ 
            popularApp5Hovered: false 
         })
    }


    popularApp6Enter = () => {
        this.setState({ 
            popularApp6Hovered: true
         })
    }
    popularApp6Leave = () => {
        this.setState({ 
            popularApp6Hovered: false 
         })
    }

        //! - - SECTION 2 FUNCTIONS - - !//

        //* - - WINDOW 2 - - *//

    next = () => {
        this.sliderRef.current.slickNext();
    };
    
    previous = () => {
        this.sliderRef.current.slickPrev();
    };

    handleAfterChange = (current) => {
        const { totalSlides } = this.state;

        this.setState({ currentSlide: current });
        if (current === 1) {
            this.setState({
                carouselPrevBtnBgColor: "#2890b9",
                carouselPrevBtnTxtColor: "white",
                carouselPrevBtnClicker: "pointer",
                carouselNextBtnBgColor: "#2890b9",
                carouselNextBtnTxtColor: "white",
                carouselNextBtnClicker: "pointer",
            })
        } else if (current === 0) {
            this.setState({
                carouselPrevBtnBgColor: "transparent",
                carouselPrevBtnTxtColor: "transparent",
                carouselPrevBtnClicker: "default",
            })
        } else if (current === totalSlides - 1) {
            this.setState({
                carouselNextBtnBgColor: "transparent",
                carouselNextBtnTxtColor: "transparent",
                carouselNextBtnClicker: "default",
            })
        }

        console.log("total slides: ", totalSlides)
    };

    creatorCardEnter = (creatorID) => {
        this.setState({
            [`creator${creatorID}Hovered`] : true
        })
    }

    creatorCardLeave = (creatorID) => {
        this.setState({
            [`creator${creatorID}Hovered`] : false
        })
    }


        //* - - DESKTOP SCREENS - - *//

    desktop5Render = () => {

        //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

        //* - - CRAYO CONTETNT EXAMPLES CAROUSEL SETUP - - *// 

        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return ( <div/> );
        }
          
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return ( <div/> );
        }

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>, 
            prevArrow: <SamplePrevArrow/>,
            afterChange: this.handleAfterChange
        };

        return (
            <div className="full-page">
                <div className="left-pane">
                    <p>test</p>
                </div>
                <div className="right-pane">

                    {/* - - TOP PANE - -  */}

                    <div className="right-pane-header">
                        <div className="right-pane-header-left">
                            <input
                            style={{border: `1px solid ${this.state.searchBarBorderColor}`}}
                            id='searchedData'
                            type="text"
                            value={this.state.searchedData}
                            onChange={this.handleSearchChange}
                            onClick={this.searchBarClicked}
                            placeholder="Search..."
                            />
                            {searchInput !== "" && (
                                <div className='searchResults'>
                                    {isSearchLoading && 
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    }
                                    {!isSearchLoading && resultsFound && 
                                        Object.entries(groupedOptions).map(([category, options]) => (
                                            <div style={{borderBottom: "1px solid #ccc", paddingTop: "0.5%", paddingBottom: "0.5%", position: "sticky"}} key={category}>
                                                {options.map(option => (
                                                    <div 
                                                    onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                    className='searchResultCell' 
                                                    key={option.id}>
                                                        <p className='searchResultOption'>{option.highlightedName}</p>
                                                        <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </p> 
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                    {!isSearchLoading && !resultsFound && 
                                        <div>
                                            <p style={{marginLeft: "0.5%", fontFamily: "dm sans"}}>No results found</p>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                        <div className="right-pane-header-right">
                            <div 
                            onMouseEnter={this.exportPointsEnter}
                            onMouseLeave={this.exportPointsLeave}
                            style={{border: `1px solid ${this.state.exportPointsBorderColor}`}} className="export-minutes">
                                <div className="export-minutes-left">
                                    <img src="/assets/export-minutes.png"/>
                                </div>
                                <div className="export-minutes-right">
                                    <label>0 export points</label>
                                </div>
                            </div>
                            <div className="right-pane-top-pane-buttons">
                                <div 
                                onMouseEnter={this.joinDiscordEnter}
                                onMouseLeave={this.joinDiscordLeave}
                                style={{border: `1px solid ${this.state.joinDiscordBorderColor}`}} className="top-pane-btn-1">
                                    <div>
                                        <div className="top-pane-btn-left">
                                            <img src={this.state.joinDiscordHovered ?  "/assets/discord-logo-icon-color.png" : "/assets/discord-logo-icon.png"}/> 
                                        </div>
                                        <div className="top-pane-btn-right">
                                            <label>Join discord</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-pane-btn-2">
                                    <div>
                                        <label>Upgrade</label>
                                    </div>
                                </div>
                                <div style={{backgroundColor: this.state.userNameBgColor, color: this.state.userNameTxtColor, border: `1px solid ${this.state.userNameBgColor}`}} className="top-pane-btn-3">
                                    <h1>N</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* - - SECTION 1 - -  */}

                    <div className="welcome-header">
                        <h3>Welcome back Norman,</h3>
                    </div>
                    <div className="right-pane-section-1">
                        <div className="rp-sec1-left-parent">
                            <h1><span style={{color: "#2890b9"}}>Create</span> your first short-form piece of content</h1>
                            <p>Generate short-form content using AI.</p>
                            <div className="window1-bottom-section">
                                <div className="window1-bottom-left">
                                    <button 
                                    style={{width: this.state.startCreatingBtnWidth, fontSize: this.state.startCreatingBtnFontSize}}
                                    onMouseEnter={this.startCreatingEnter}
                                    onMouseLeave={this.startCreatingLeave}
                                    className="wash-button">
                                        Start Creating
                                        <CSSTransition
                                        in={this.state.startCreatingArrow}
                                        timeout={{enter: 500, exit: 0}}
                                        classNames="dialog-slide-left"
                                        unmountOnExit
                                        >
                                            <img style={{width: this.state.startCreatingIconWidth}} src="/assets/start-creating-arrow.png"/>
                                        </CSSTransition>
                                    </button>  
                                </div>
                                <div className="window1-bottom-right"> 
                                    <div className="window1-pic">
                                        <img className="levitate" style={{width: "67%", float: "right", marginTop: "9%"}} src="/assets/iphone-pic.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rp-sec1-mid-parent">
                            <div className="tutorial-header">
                                <div className="tutorial-header-left">
                                    <h2>Video Guides</h2>
                                    <p style={{color: "#2980B9"}}>Watch our video guides to learn how you can get the most out of Crayo.</p>
                                </div>
                                <div className="tutorial-header-right">
                                    <img src="/assets/desktop-pic.png"/>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid #8a8a8a", marginLeft: "4%", marginRight: "4%"}}></div>
                            
                            <div className="tutorial-container">

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell1BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell1BorderColor}`}}
                                onMouseEnter={this.tutorialCell1Enter}
                                onMouseLeave={this.tutorialCell1Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell1Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell1ImgBgColor}} src={this.state.tutorialCell1Hovered ? "/assets/tutorial-pic1-color.png" : "/assets/tutorial-pic1.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell1Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell1TimerColor}}>3 min 26 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn1Enter}
                                            onMouseLeave={this.tutorialBtn1Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell1BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell1MainTextColor}}>Learn how to create AI-generated video for your stories.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell2BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell2BorderColor}`}}
                                onMouseEnter={this.tutorialCell2Enter}
                                onMouseLeave={this.tutorialCell2Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell2Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell2ImgBgColor}} src={this.state.tutorialCell2Hovered ? "/assets/tutorial-pic2-color.png" : "/assets/tutorial-pic2.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell2Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell2TimerColor}}>2 min 19 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn2Enter}
                                            onMouseLeave={this.tutorialBtn2Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell2BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell2MainTextColor}}>Learn how to make high-quality voice-overs for your videos.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell3BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell3BorderColor}`}}
                                onMouseEnter={this.tutorialCell3Enter}
                                onMouseLeave={this.tutorialCell3Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell3Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell3ImgBgColor}} src={this.state.tutorialCell3Hovered ? "/assets/tutorial-pic3-color.png" : "/assets/tutorial-pic3.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell3Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell3TimerColor}}>3 min 35 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn3Enter}
                                            onMouseLeave={this.tutorialBtn3Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell3BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell3MainTextColor}}>Learn how to create ChatGPT-like image videos.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell4BorderColor}`}}
                                onMouseEnter={this.tutorialCell4Enter}
                                onMouseLeave={this.tutorialCell4Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell4Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell4ImgBgColor}} src={this.state.tutorialCell4Hovered ? "/assets/tutorial-pic4-color.png" : "/assets/tutorial-pic4.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell4Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell4TimerColor}}>2 min 56 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn4Enter}
                                            onMouseLeave={this.tutorialBtn4Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell4MainTextColor}}>Learn how to create splitscreen content using our gameplay library.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell5BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell5BorderColor}`}}
                                onMouseEnter={this.tutorialCell5Enter}
                                onMouseLeave={this.tutorialCell5Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell5Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell5ImgBgColor}} src={this.state.tutorialCell5Hovered ? "/assets/tutorial-pic5-color.png" : "/assets/tutorial-pic5.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell5Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell5TimerColor}}>1 min 43 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn4Enter}
                                            onMouseLeave={this.tutorialBtn4Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell5MainTextColor}}>Learn how to create simulated text conversation videos for Instagram, Tiktok and Shorts.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell6BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell6BorderColor}`}}
                                onMouseEnter={this.tutorialCell6Enter}
                                onMouseLeave={this.tutorialCell6Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell6Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell6ImgBgColor}} src={this.state.tutorialCell6Hovered ? "/assets/tutorial-pic6-color.png" : "/assets/tutorial-pic6.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell6Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell6TimerColor}}>1 min 59 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn4Enter}
                                            onMouseLeave={this.tutorialBtn4Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell6MainTextColor}}>Learn how to create AI avatars with fully customized speech for UGC content.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell7BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell7BorderColor}`}}
                                onMouseEnter={this.tutorialCell7Enter}
                                onMouseLeave={this.tutorialCell7Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell7Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell7ImgBgColor}} src={this.state.tutorialCell7Hovered ? "/assets/tutorial-pic7-color.png" : "/assets/tutorial-pic7.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell7Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell7TimerColor}}>2 min 13 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn4Enter}
                                            onMouseLeave={this.tutorialBtn4Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell7MainTextColor}}>Learn how to add any type of AI voiceover from our vast library to your videos.</h5>
                                    </div>
                                </div>

                                <div
                                style={{border: `1px solid ${this.state.tutorialCell8BorderColor}`, borderBottom: `5px solid ${this.state.tutorialCell8BorderColor}`}}
                                onMouseEnter={this.tutorialCell8Enter}
                                onMouseLeave={this.tutorialCell8Leave}
                                className="tutorial-cell">
                                    <div className="tutorial-cell-left">
                                        <img className={this.state.tutorialCell8Hovered ? "levitate2" : ""} style={{backgroundColor: this.state.tutorialCell8ImgBgColor}} src={this.state.tutorialCell8Hovered ? "/assets/tutorial-pic8-color.png" : "/assets/tutorial-pic8.png"}/>
                                    </div>
                                    <div className="tutorial-cell-right">
                                        <div className="tutorial-cell-header" style={{display: "flex", justifyContent: "space-between"}}>
                                            <div className="tutorial-cell-timer">
                                                <div className="tutorial-cell-timer-left">
                                                    <img src={this.state.tutorialCell8Hovered ? "/assets/tutorial-cell-timer-color.png" : "/assets/tutorial-cell-timer.png"}/>
                                                </div>
                                                <div className="tutorial-cell-timer-right">
                                                    <p style={{color: this.state.tutorialCell8TimerColor}}>2 min 20 sec</p>
                                                </div>
                                            </div>
                                            {/* <button 
                                            onMouseEnter={this.tutorialBtn4Enter}
                                            onMouseLeave={this.tutorialBtn4Leave}
                                            style={{border: `1px solid ${this.state.tutorialCell4BorderColor}`}}>
                                                Watch
                                            </button> */}
                                        </div>
                                        <h5 style={{color: this.state.tutorialCell8MainTextColor}}>Learn how to add any YouTube video directly into your content via Crayo.</h5>
                                    </div>
                                </div>

                                <div className="tutorial-footer">
                                    <h4>More guides coming soon!</h4>
                                </div>

                                <div style={{borderBottom: "1px solid white", marginTop: "5%", marginLeft: "4%", marginRight: "4%"}}></div>

                            </div>

                        </div>
                        <div className="rp-sec1-right-parent">
                            <h1>Popular Apps</h1>
                            <h2>Try our user-favorite apps.</h2>
                            <div style={{borderBottom: "1px solid #8a8a8a", marginLeft: "4%", marginRight: "4%", marginTop: "5.3%"}}></div>
                            <div className="popular-apps-container">

                                <div className="popular-apps-row-container">
                                    <div 
                                    onMouseEnter={this.popularApp1Enter}
                                    onMouseLeave={this.popularApp1Leave}
                                    style={{marginRight: "2.8%", border: `1px solid ${this.state.popularApp1Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.popularApp1Hovered ? "#2890b9" : "#8a8a8a"}`}} className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp1Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/split-screen-pic3.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp1Hovered ? "#2890b9" : "#000"}}>Splitscreen Video</h5>
                                            <p>Create splitscreen content w/ our gameplay library.</p>
                                        </div>
                                    </div>
                                    <div 
                                    onMouseEnter={this.popularApp2Enter}
                                    onMouseLeave={this.popularApp2Leave}
                                    style={{border: `1px solid ${this.state.popularApp2Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.popularApp2Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                    className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp2Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/fake-text-pic.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp2Hovered ? "#2890b9" : "#000"}}>Fake Texts Video</h5>
                                            <p>Create fake text conversation videos for Instagram, Tiktok, and Shorts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="popular-apps-row-container">
                                    <div 
                                    onMouseEnter={this.popularApp3Enter}
                                    onMouseLeave={this.popularApp3Leave}
                                    style={{marginRight: "2.8%", border: `1px solid ${this.state.popularApp3Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.popularApp3Hovered ? "#2890b9" : "#8a8a8a"}`}} className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp3Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/ai-avatar-pic.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp3Hovered ? "#2890b9" : "#000"}}>AI Avatars</h5>
                                            <p>Create AI avatars to say anything for UGC content.</p>
                                        </div>
                                    </div>
                                    <div 
                                    onMouseEnter={this.popularApp4Enter}
                                    onMouseLeave={this.popularApp4Leave}
                                    style={{border: `1px solid ${this.state.popularApp4Hovered ? "#2890b9" : "#ccc"}`, borderBottom: `5px solid ${this.state.popularApp4Hovered ? "#2890b9" : "#ccc"}`}}
                                    className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp4Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/voice-over-pic.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp4Hovered ? "#2890b9" : "#000"}}>Voiceover Story</h5>
                                            <p>Create wholesome, scary, or any type of story using AI voices.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="popular-apps-row-container">
                                    <div 
                                    onMouseEnter={this.popularApp5Enter}
                                    onMouseLeave={this.popularApp5Leave}
                                    style={{marginRight: "2.8%", border: `1px solid ${this.state.popularApp5Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.popularApp5Hovered ? "#2890b9" : "#8a8a8a"}`}} className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp5Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/download-pic2.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp5Hovered ? "#2890b9" : "#000"}}>Download YouTube Videos</h5>
                                            <p>Get YouTube videos in MP4 format directly in Crayo.</p>
                                        </div>
                                    </div>
                                    <div 
                                    onMouseEnter={this.popularApp6Enter}
                                    onMouseLeave={this.popularApp6Leave}
                                    style={{border: `1px solid ${this.state.popularApp6Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.popularApp6Hovered ? "#2890b9" : "#8a8a8a"}`}} className="popular-apps-cell">
                                        <div style={{background: "white", borderBottom: this.state.popularApp6Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} className="popular-apps-cell-img-container">
                                            <img src="/assets/more-apps-pic2.gif"/>
                                        </div>
                                        <div className="popular-apps-cell-text-container">
                                            <h5 style={{color: this.state.popularApp6Hovered ? "#2890b9" : "#000"}}>All Apps</h5>
                                            <p>See our full list of apps.</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{borderBottom: "1px solid white", marginTop: "4%", marginLeft: "4%", marginRight: "4%"}}></div>

                            </div>
                            
                        </div>
                    </div>  

                    {/* - - SECTION 2 - -  */}

                    <div className="right-pane-section-2">
                        <div className="rp-sec2-left-parent">
                            <div className="projects-header">
                                <div className="projects-header-left">
                                    <h2>My Projects</h2>
                                    <p>Create a new project.</p>
                                </div>
                                <div className="projects-header-right">
                                    <button>+ New Project</button>
                                </div>
                            </div>

                            <div className="projects-placeholder">
                                <img src="/assets/projects-placeholder.png"/>
                                <p>No existing projects.</p>
                            </div>
                        </div>
                        <div className="rp-sec2-right-parent">
                            <div className="examples-header">
                                <div className="examples-header-left">
                                    <h2>Crayo Content in the wild</h2>
                                    <p>See how solo creators, brands & institutions are using Crayo.</p>
                                </div>
                                <div className="examples-header-right">

                                </div>
                            </div>

                            <div className="slider-container">
                                <div className="slider-left-btn">
                                    <button 
                                    style={{
                                        backgroundColor: this.state.carouselPrevBtnBgColor,
                                        color: this.state.carouselPrevBtnTxtColor,
                                        cursor: this.state.carouselPrevBtnClicker,
                                    }}
                                    className="button" onClick={this.previous}>
                                        &lt;
                                    </button>
                                </div>
                                <div className="slider-mid-container">
                                    <Slider ref={this.sliderRef} {...settings}>
                                        <div className="creator-slider-container">
                                            <div style={{marginLeft: "0%"}} className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(1)}
                                                    onMouseLeave={() => this.creatorCardLeave(1)}
                                                    style={{border: `1px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`}} className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator1Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-1.png"/>
                                                        <h5>Gracey K.</h5>
                                                        <p>121k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(5)}
                                                    onMouseLeave={() => this.creatorCardLeave(5)}
                                                    style={{border: `1px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator5Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-2.png"/>
                                                        <h5>Brisky</h5>
                                                        <p>13k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(2)}
                                                    onMouseLeave={() => this.creatorCardLeave(2)}
                                                    style={{border: `1px solid ${this.state.creator2Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator2Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator2Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-3.png"/>
                                                        <h5>Ava RuGzz</h5>
                                                        <p>200k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(6)}
                                                    onMouseLeave={() => this.creatorCardLeave(6)}
                                                    style={{border: `1px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator6Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-4.png"/>
                                                        <h5>Spence</h5>
                                                        <p>1m followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(3)}
                                                    onMouseLeave={() => this.creatorCardLeave(3)}
                                                    style={{border: `1px solid ${this.state.creator3Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator3Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator3Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-5.png"/>
                                                        <h5>Jahoozeyy</h5>
                                                        <p>328k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div
                                                    onMouseEnter={() => this.creatorCardEnter(7)}
                                                    onMouseLeave={() => this.creatorCardLeave(7)}
                                                    style={{border: `1px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`}} 
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator7Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-6.png"/>
                                                        <h5>Barl008</h5>
                                                        <p>65k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(4)}
                                                    onMouseLeave={() => this.creatorCardLeave(4)}
                                                    style={{border: `1px solid ${this.state.creator4Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator4Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator4Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-7.png"/>
                                                        <h5>MartaMAKES</h5>
                                                        <p>2.2m followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(8)}
                                                    onMouseLeave={() => this.creatorCardLeave(8)}
                                                    style={{border: `1px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator8Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-8.png"/>
                                                        <h5>Laby Khame</h5>
                                                        <p>802k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="creator-slider-container">
                                            <div style={{marginLeft: "0%"}} className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(1)}
                                                    onMouseLeave={() => this.creatorCardLeave(1)}
                                                    style={{border: `1px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`}} className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator1Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-9.png"/>
                                                        <h5>SeeWell</h5>
                                                        <p>12k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(5)}
                                                    onMouseLeave={() => this.creatorCardLeave(5)}
                                                    style={{border: `1px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator5Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-10.png"/>
                                                        <h5>Kizzy Kicks</h5>
                                                        <p>28k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(2)}
                                                    onMouseLeave={() => this.creatorCardLeave(2)}
                                                    style={{border: `1px solid ${this.state.creator2Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator2Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator2Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-11.png"/>
                                                        <h5>Beth's Bakery</h5>
                                                        <p>330k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(6)}
                                                    onMouseLeave={() => this.creatorCardLeave(6)}
                                                    style={{border: `1px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator6Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-12.png"/>
                                                        <h5>Tech Gamer</h5>
                                                        <p>1.6k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(3)}
                                                    onMouseLeave={() => this.creatorCardLeave(3)}
                                                    style={{border: `1px solid ${this.state.creator3Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator3Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator3Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-13.png"/>
                                                        <h5>Krypto Beats</h5>
                                                        <p>600k followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div
                                                    onMouseEnter={() => this.creatorCardEnter(7)}
                                                    onMouseLeave={() => this.creatorCardLeave(7)}
                                                    style={{border: `1px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`}} 
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator7Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-14.png"/>
                                                        <h5>K's Jewelry</h5>
                                                        <p>88k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(4)}
                                                    onMouseLeave={() => this.creatorCardLeave(4)}
                                                    style={{border: `1px solid ${this.state.creator4Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator4Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator4Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-15.png"/>
                                                        <h5>Gula Café</h5>
                                                        <p>255 followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(8)}
                                                    onMouseLeave={() => this.creatorCardLeave(8)}
                                                    style={{border: `1px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator8Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-16.png"/>
                                                        <h5>ur fav cleanerz</h5>
                                                        <p>9k followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator-slider-container">
                                            
                                        </div>
                                        {/* <div className="creator-slider-container">
                                            <h3>4</h3>
                                        </div>
                                        <div className="creator-slider-container">
                                            <h3>5</h3>
                                        </div>
                                        <div className="creator-slider-container">
                                            <h3>6</h3>
                                        </div> */}
                                    </Slider>
                                </div>
                                <div className="slider-right-btn">
                                    <button 
                                    style={{
                                        backgroundColor: this.state.carouselNextBtnBgColor,
                                        color: this.state.carouselNextBtnTxtColor,
                                        cursor: this.state.carouselNextBtnClicker,
                                    }}
                                    className="button" onClick={this.next}>
                                        &gt;
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
    desktop4Render = () => {

    }
    desktop3Render = () => {

    }
    desktop2Render = () => {

    }
    desktop1Render = () => {

    }


        //* - - TABLET SCREENS - - *//

    tablet3Render = () => {
        
    }

    tablet2Render = () => {

    }

    tablet1Render = () => {

    }


        //* - - PHABLET SCREENS - - *//


    phablet3Render = () => {
    
    }

    phablet2Render = () => {
    
    }

    phablet1Render = () => {
    
    }


        //* - - PHONE SCREENS - - *//

    phone2Render = () => {

    }

    phone1Render = () => {

    }

    render () {

        const dekstop5MediaQuery = `(min-width: 1456px)`
        const desktop4MediaQuery = `(min-width: 1361px) and (max-width: 1455px)`
        const desktop3MediaQuery = `(min-width: 1266px) and (max-width: 1360px)`
        const desktop2MediaQuery = `(min-width: 1171px) and (max-width: 1265px)`
        const desktop1MediaQuery = `(min-width: 1076px) and (max-width: 1170px)`
        const tablet3MediaQuery = `(min-width: 981px) and (max-width: 1075px)`; 
        const tablet2MediaQuery = `(min-width: 886px) and (max-width: 980px)`; 
        const tablet1MediaQuery = `(min-width: 792px) and (max-width: 885px)`; 
        const phablet3MediaQuery = `(min-width: 699px) and (max-width: 791px)`
        const phablet2MediaQuery = `(min-width: 604px) and (max-width: 698px)`
        const phablet1MediaQuery = `(min-width: 509px) and (max-width: 603px)`
        const phone2MediaQuery = `(min-width: 414px) and (max-width: 508px)`
        const phone1MediaQuery = `(min-width: 320px) and (max-width: 413px)`

        return(
            <Styles>
                <div>

                    {/* - - - - DEKSTOP SCREENS - - - - */}

                {/* - WIDTH: (1456px + ) - */}

                <MediaQuery query={dekstop5MediaQuery}>
                    {this.desktop5Render()}
                </MediaQuery>

                {/* - WIDTH: (1361px - 1455px) - */}

                <MediaQuery query={desktop4MediaQuery}>
                    {this.desktop4Render()}
                </MediaQuery>

                {/* - WIDTH: (1266px - 1360px) - */}

                <MediaQuery query={desktop3MediaQuery}>
                    {this.desktop3Render()}
                </MediaQuery>

                {/* - WIDTH: (1171px - 1265px) - */}

                <MediaQuery query={desktop2MediaQuery}>
                    {this.desktop2Render()}
                </MediaQuery>

                {/* - WIDTH: (1076px - 1170px) - */}

                <MediaQuery query={desktop1MediaQuery}>
                    {this.desktop1Render()}
                </MediaQuery>


                    {/* - - - - TABLET SCREENS - - - - */}

                {/* - WIDTH: (981px - 1075px) - */}

                <MediaQuery query={tablet3MediaQuery}>
                    {this.tablet3Render()}
                </MediaQuery>

                {/* - WIDTH: (886px - 980px) - */}

                <MediaQuery query={tablet2MediaQuery}>
                    {this.tablet2Render()}
                </MediaQuery>

                {/* - WIDTH: (792px - 885px) - */}

                <MediaQuery query={tablet1MediaQuery}>
                    {this.tablet1Render()}
                </MediaQuery>


                    {/* - - - - PHABLET SCREENS - - - - */}

                {/* - WIDTH: (699px - 791px) - */}

                <MediaQuery query={phablet3MediaQuery}>
                    {this.phablet3Render()}
                </MediaQuery>

                {/* - WIDTH: (604px - 698px) - */}

                <MediaQuery query={phablet2MediaQuery}>
                    {this.phablet2Render()}
                </MediaQuery>

                {/* - WIDTH: (509px - 604px) - */}

                <MediaQuery query={phablet1MediaQuery}>
                    {this.phablet2Render()}
                </MediaQuery>


                    {/* - - - - PHONE SCREENS - - - - */}

                {/* - WIDTH: (414px - 508px) - */}

                <MediaQuery query={phone2MediaQuery}>
                    {this.phone2Render()}
                </MediaQuery>

                {/* - WIDTH: (320px - 414px) - */}

                <MediaQuery query={phone1MediaQuery}>
                    {this.phone1Render()}
                </MediaQuery>

                    
                </div>
            </Styles>
        )
    }
}