//? - - PACKAGES - - //
import React, {Component} from "react";
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";

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

    //! - - Left pane - - !//

    // - - LEFT PANE CONTAINER - - //

.left-pane {
    height: 100%;
    float: left;
    width: 5%;
    text-align: center;
    background-color: #f1f3f8;
    border-right: 1px solid #ccc;
    transition: width 0.5s ease-out;
}

    //! - - (Navbar - EXPANDED) - - //

    // # LEFT PANE HEADER

.left-pane-header {
    margin-top: 9%;
}

.left-pane-header:after {
    content: "";
    clear: both;
    display: table;
}

.left-pane-header-left {
    float: left;
    width: 78%;
    text-align: left;
    // border: 1px solid black;
}

.left-pane-header-right {
    float: left;
    width: 20%;
    text-align: right;
    // border: 1px solid black;
}

    // # LEFT PANE HEADER LOGO IMAGE

.left-pane-header-left img {
    margin-top: 2%;
    width: 35%;
    margin-left: 6%;
}

    // # LEFT PANE HEADER SIDEBAR COLLAPSE IMAGE

.left-pane-header-right img {
    width: 40%;
    margin-right: 8%;
    margin-top: 3.75%;
    cursor: pointer;
}


    // - - NAVBAR OPTIONS CONTAINER - - //

.navbar-options-container {
    position: relative;
    // border: 1px solid black;
    margin-top: 15%;
    height: 85vh;
    margin-left: 5%;
    margin-right: 5%;
    overflow: scroll;
}

    // - NAVBAR OPTION CELL - //

.navbar-option-cell {
    // border: 1px solid #707a9f;
    border-radius: 9px;
    cursor: pointer;
}

.navbar-option-cell:hover {
    background-color: #E0F4FC;
}

.navbar-option-cell:after {
    content: "";
    clear: both;
    display: table;
}

.navbar-option-icon {
    float: left;
    width: 20%;
    text-align: center;
}

.navbar-option-text { 
    float: left;
    width: 60%;
    text-align: left;
}

.navbar-option-dropdown {
    float: left;
    width: 20%;
    text-align: right;
}

    // # NAVBAR OPTION CELL ICON

.navbar-option-icon img {
    width: 38%;
    margin-top: 1em;
    // margin-bottom: 1em;
}

    // # NAVBAR OPTION CELL TEXT

.navbar-option-text p {
    font-family: dm sans;
    // font-weight: bold;
    font-size: 93.5%;
    // color: #707A9f;
} 

    // # ACTIVE SUB OPTION

.active-sub-option p {
    margin-top: 1% !important;
    margin-bottom: 5% !important;
    font-size: 65% !important;
    font-weight: bold;
    color: #1c4c75;
}

    // # NAVBAR OPTION CELL DROPDOWN ICON

.navbar-option-dropdown img {
    margin-right: 0.3em;
    width: 40%;
    margin-top: 1em;
}

.navbar-option-dropdown-unrotated {
    transition: transform 0.3s ease;
}

.navbar-option-dropdown-rotated {
    transform: rotate(180deg);
}

    // - NAVBAR OPTIONS SUBOPTIONS - //

.dashboard-option-subs {
    // border: 1px solid black;
}

.dashboard-option-subs:after {
    content: "";
    display: table;
    clear: both;
}

.dashboard-option-sub-connector {
    float: left;
    width: 20%;
    text-align: center;
}

.dashboard-option-sub-text {
    float: left;
    width: 80%;
    text-align: left;
    margin-top: 6%;
}

.dialog-slide-down-enter {
    transform: translateY(-15%);
    opacity: 0;
}

.dialog-slide-down-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
}

.dialog-slide-down-exit {
    transform: translateY(0);
    opacity: 1;
}

.dialog-slide-down-exit-active {
    transform: translateY(-10%);
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
}

    // # NAVBAR OPTIONS CONNECTOR

.dashboard-option-sub-connector div {
    padding-bottom: 185%;
}

.dashboard-option-sub-connector-line {
    background-color: #ccc;
    width: 6.5%;
    margin-left: 48%;
    margin-top: 38.5%;
}

    // # NAVBAR OPTIONS TEXT/CONTAINER

.dashboard-option-sub-text div {
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
}

.dashboard-option-sub-text div:hover {
    background-color: #E0F4FC;
}

.dashboard-option-sub-text p {
    font-family: dm sans;
    font-size: 85%;
    margin-left: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}

.dashboard-sub-option-cell:after {
    content: "";
    display: table;
    clear: both;
}

    //! - - Left pane footer - - !//

.left-pane-footer {
    // border: 1px solid black;
}

.left-pane-footer-left {
    float: left;
    width: 10%;
    text-align: center;
}

.left-pane-footer-right {
    float: left;
    width: 90%;
    text-align: center;
}

.left-pane-footer:after {
    content: "";
    clear: both;
    display: table;
}

    //! - - (Navbar - SHRANK) - - //

.shrank-left-pane-header img {
    width: 35%;
    margin-top: 38%;
    transform: scaleX(-1);
    cursor: pointer;
}

    // - - SHRANK NAVBAR OPTIONS - - //

.shrank-navbar-options {
    // border: 1px solid black;
    margin-top: 67%;
    padding-bottom: 10%;
    // padding-top: 5%;
}

.shrank-navbar-option {
    border: 1px solid blue;
    margin-top: 10%;
    margin-right: 11%;
    margin-left: 11%;
    border-radius: 8px;
    cursor: pointer;
}

.shrank-navbar-option img {
    width: 35%;
    margin-top: 13%;
}

.shrank-navbar-option p {
    margin-top: 3%;
    font-size: 50%;
    font-family: dm sans;
}

    //! - - Right pane - - !//

    // - - RIGHT PANE CONTAINER - - //

.right-pane {
    height: 100%;
    float: left;
    width: 90.5%;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #EEEEEF;
    transition: width 0.5s ease-out;;
    overflow: auto;
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

.welcome-header:after {
    content: "";
    clear: both;
    display: table;
}

.welcome-header-left {
    float: left;
    width: 90%;
    text-align: left;
} 

.welcome-header-right {
    float: left;
    width: 10%;
    text-align: right;
}

    // # WELCOME HEADER TEXT

.welcome-header-left h3 {
    margin-bottom: 1%;
    text-align: left;
    font-family: dm sans;
}

// # WELCOME HEADER BUTTON

.welcome-header-right button {
    margin-top: 15%;
    padding: 3%;
    padding-left: 8%;
    padding-right: 8%;
    border-radius: 6px;
    border: 1px solid white;
    font-family: dm sans;
    cursor: pointer;
}

    //! - - Continue Session [Section 1 (right pane)] - - !//

    // # CONTINUE SESSION (WINDOW 1)

.continue-window-1 {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: white !important;
}

.continue-session-items {
    // border: 1px solid black;
    height: 15em;
    overflow: auto;
}

.continue-session-item {
    border: 1px solid #8a8a8a;
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    padding: 2%;
    padding-left: 1.5%;
    border-radius: 9px;
    border-bottom: 5px solid #8a8a8a;
    cursor: pointer;
 }

.continue-session-item:after {
    content: "";
    display: table;
    clear: both;
}

.continue-session-item-left {
    float: left;
    width: 30%;
    text-align: left;
    // border-right: 1px solid black;
}

.continue-session-item-right {
    float: left;
    width: 70%;
    text-align: left;
}

    // # CONTINUE SESSION ITEM IMAGE

.continue-session-item-left img {
    width: 75% !important;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    margin-right: 3%;
    margin-top: 5%;
}

    // # CONTINUE SESSION HEADER TEXT

.continue-session-item-right h5 { 
    font-family: dm sans;
    margin-top: 2%;
    margin-bottom: 0px;
    // color: #8a8a8a;
    font-size: 90%;
}


    // # CONTINUE SESSION DETAILS

.session-item-details {
    // border: 1px solid black;
    // margin-top: 3%;
    // height: 2vh;
}
 
.session-item-details:after {
    content: "";
    display: table;
    clear: both;
}

.session-item-details-left {
    float: left;
    width: 45%;
    text-align: left;
    // border-right: 1px solid black;
    height: 100%;
}

.session-item-details-right {
    float: left;
    width: 55%;
    text-align: right;
    // border-right: 1px solid black;
}


    // # CONTINUE SESSION DETAILS CONTENT TYPE

.session-item-details-left span {
    // all: unset !important;
    margin-top: 0px !important;
    // margin-bottom: 1.5% !important;
    // background-color: #8a8a8a !important;
    font-size: 55% !important;
    font-family: dm sans !important;
    color: white !important;
    padding: 3% !important;
    padding-left: 5% !important;
    padding-right: 5% !important;
    font-weight: bold !important;
    border-radius: 5px !important;
}


    // # CONTINUE SESSION DETAILS LAST UPDATED

.session-item-details-right p { 
    text-align: right !important;
    color: black !important;
    font-size: 60% !important;
    margin-top: 5.8% !important;
    margin-top: 2% !important;
}

// # CONTINUE SESSION CONTENT DESCRIPTION

.continue-session-item-right label {
    font-size: 80%;
    // margin-top: 2%;
    font-family: dm sans;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    cursor: pointer;
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
    color: #2980b9;
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
    width: 75%;
    text-align: center;
}

.tutorial-header-right {
    float: left;
    width: 25%;
    text-align: center;
    // border-left: 1px solid black;
}


    // # TUTORIAL HEADER TEXT

.tutorial-header-left h2 {
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
    color: black;
    font-family: dm sans;
    font-weight: 900;
    margin-top: 5%;
    margin-bottom: 1%;
}

.tutorial-header-left p {
    margin-top: 0px;
    // margin-bottom: 0px;
    font-size: 80%;
    text-align: left;
    margin-left: 5%;
    font-weight: bold;
    font-family: dm sans;
    color: #2980b9;
}

    // # TUTORIAL HEADER IMG

.tutorial-header-right img {
    width: 58%;
    margin-top: 8%;
}

    // # TUTORIAL CONTAINER

.tutorial-container {
    height: 15em;
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
    width: 70%;
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
    height: 15.1em;
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

    //! - - Sections 2 (V2 Window 1 - right pane) - - !//

    // - - PROJECT LIST - - //

.project-list-header {
    background-color: #2890b9;
    // border: 1px solid black !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.project-list-header:after {
    content: "";
    display: table;
    clear: both;
}

.project-list-header-1 {
    float: left;
    width: 10%;
    text-align: center;
    // border: 1px solid black;
}

.project-list-header-2 {
    float: left;
    width: 32%;
    text-align: left;
    // border-right: 1px solid white;
}

.project-list-header-3 {
    float: left;
    width: 25%;
    text-align: left;
    // border-right: 1px solid white;
}

.project-list-header-4 {
    float: left;
    width: 30%;
    text-align: left;
    // border-right: 1px solid white;
}

    // # PROJECTS COLUMN 1 HEADER (CHECKBOX)

.project-list-header-1 img {
    margin-top: 8.1% !important;
    width: 50% !important;
}

    // # PROJECTS COLUMN 2 HEADER (PROJECT NAME)

.project-list-header-2 h5 {
    margin-top: 5.8%;
    margin-bottom: 6%;
    font-family: dm sans;
    margin-left: 5%;
    color: white;
    font-weight: normal;
}

    // # PROJECTS COLUMN 3 HEADER (CONTENT TYPE)

.project-list-header-3 h5 {
    margin-top: 7.3%;
    margin-bottom: 6%;
    font-family: dm sans;
    margin-left: 8%;
    color: white;
    font-weight: normal;
}

    // # PROJECTS COLUMN 4 HEADER (LAST EDITED)

.project-list-header-4 h5 {
    margin-top: 6%;
    margin-bottom: 5%;
    font-family: dm sans;
    margin-left: 8%;
    color: white;
    font-weight: normal;
}

    // -  PROJECT LIST CELL - //

.project-list-body {
    height: 82.5%;
    overflow: auto;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.project-list-cell {
    border-bottom: 1px solid #8a8a8a !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding-top: 0.7%;
    padding-bottom: 0.3%;
    cursor: pointer;
}

.project-list-cell:after {
    content: "";
    display: table;
    clear: both;
}

.project-list-cell-1 {
    float: left;
    width: 10%;
    text-align: center;
}

.project-list-cell-2 {
    float: left;
    width: 32%;
    text-align: left;
}

.project-list-cell-3 {
    float: left;
    width: 25%;
    text-align: left;
}

.project-list-cell-4 {
    float: left;
    width: 30%;
    text-align: left;
}

// # PROJECTS COLUMN 1 CELL (CHECKBOX)

.project-list-cell-1 img {
    margin-top: 5% !important;
    margin-left: 2% !important;
    width: 45% !important;
    margin-bottom: 3%;
}

    // # PROJECTS COLUMN 2 CELL (PROJECT NAME)

.project-list-cell-2 h5 {
    margin-top: 3.9%;
    font-family: dm sans;
    margin-left: 5%;
    font-weight: normal;
    margin-bottom: 4.5%;
}

    // # PROJECTS COLUMN 3 CELL (CONTENT TYPE)

.project-list-cell-3 h5 {
    margin-top: 5.1%;
    font-family: dm sans;
    margin-left: 8%;
    font-weight: normal;
    margin-bottom: 4.5%;
}

    // # PROJECTS COLUMN 4 CELL (LAST EDITED)

.project-list-cell-4 h5 {
    margin-top: 4.6%;
    font-family: dm sans;
    margin-left: 8%;
    font-weight: normal;
    margin-bottom: 4.5%;
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
    background-color: white;
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
    background-color: white;
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

                //! - - LEFT PANE - - !//

            //* - - LEFT PANE CONTAINER VAR(S) - - *//
            leftPaneMinimized: false,
            showExpandedLeftPane: true,
            showShrankLeftPane: false,
            collapseNavbarHovered: false,

            //* - - DASHBOARD OPTIONS VAR(S) - - *//
            dashboardOptionHovered: false,
            dashboardOptionClicked: false,
            dashboardSubActive: "",

            createOptionHovered: false,
            createOptionClicked: false,
            createSubActive: "",

            toolsOptionHovered: false,
            toolsOptionClicked: false,
            toolsSubActive: "",

            moreOptionHovered: false,
            moreOptionClicked: false,
            moreSubActive: "",

            //* - - SHRANK DASHBOARD OPTIONS VAR(S) - - *//
            shrankDashboardOptionHovered: false,
            shrankDashboardOptionClicked: false,

            shrankCreateOptionHovered: false,
            shrankCreateOptionClicked: false,

            shrankToolsOptionHovered: false,
            shrankToolsOptionClicked: false,

            shrankMoreOptionHovered: false,
            shrankMoreOptionClicked: false,
    
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

                //! - - VERSION BUTTON - - !//

            //* - - VERSION BUTTON - - *//
            versionButtonText: "OFF",
            versionButtonHovered: false,
            version1ButtonClicked: false,
            version2ButtonClicked: false,

                //! - - SECTION 1 (V2 - RIGHT PANE) - - !//
            latestProject1Hovered: false,
            latestProject2Hovered: false,
            latestProject3Hovered: false,

                //! - - SECTION 1 (V1 - RIGHT PANE) - - !//

            //* - - VERSIONS (RIGHT PANE) - - *//
            showVersion1Sec1Window1: false,
            showVersion2Sec1Window1: true,

            //* - - 'START CREATING' BUTTON - - *//
            startCreatingBtnWidth: "auto",
            startCreatingBtnFontSize: "100%",
            startCreatingIconWidth: "0%",

            //* - - TUTORIAL CELL VAR(S) - - *//
            tutorialCell1Hovered: false,
            tutorialCell1BorderColor: "#8a8a8a",
            tutorialCell1ImgBgColor: "white",
            tutorialCell1TimerColor: "#5e626a",
            tutorialCell1MainTextColor: "",

            tutorialCell2Hovered: false,
            tutorialCell2BorderColor: "#8a8a8a",
            tutorialCell2ImgBgColor: "white",
            tutorialCell2TimerColor: "#5e626a",
            tutorialCell2MainTextColor: "",

            tutorialCell3Hovered: false,
            tutorialCell3BorderColor: "#8a8a8a",
            tutorialCell3ImgBgColor: "white",
            tutorialCell3TimerColor: "#5e626a",
            tutorialCell3MainTextColor: "",

            tutorialCell4Hovered: false,
            tutorialCell4BorderColor: "#8a8a8a",
            tutorialCell4ImgBgColor: "white",
            tutorialCell4TimerColor: "#5e626a",
            tutorialCell4MainTextColor: "",

            tutorialCell5Hovered: false,
            tutorialCell5BorderColor: "#8a8a8a",
            tutorialCell5ImgBgColor: "white",
            tutorialCell5TimerColor: "#5e626a",
            tutorialCell5MainTextColor: "",

            tutorialCell6Hovered: false,
            tutorialCell6BorderColor: "#8a8a8a",
            tutorialCell6ImgBgColor: "white",
            tutorialCell6TimerColor: "#5e626a",
            tutorialCell6MainTextColor: "",

            tutorialCell7Hovered: false,
            tutorialCell7BorderColor: "#8a8a8a",
            tutorialCell7ImgBgColor: "white",
            tutorialCell7TimerColor: "#5e626a",
            tutorialCell7MainTextColor: "",

            tutorialCell8Hovered: false,
            tutorialCell8BorderColor: "#8a8a8a",
            tutorialCell8ImgBgColor: "white",
            tutorialCell8TimerColor: "#5e626a",
            tutorialCell8MainTextColor: "",

            //* - - POPULAR APPS VAR(S) - - *//
            popularApp1Hovered: false,
            popularApp2Hovered: false,
            popularApp3Hovered: false,
            popularApp4Hovered: false,
            popularApp5Hovered: false,
            popularApp6Hovered: false,

                //! - - SECTION 2 (WINDOW 1 - RIGHT PANE) - - !//

            //* - - PROJECTS PLACEHOLDER / LIST - - *//
            showProjectsPlaceholder: false,
            showProjectsList: true,

            project1Hovered: false,
            project1Clicked: false,
            project2Hovered: false,
            project2Clicked: false,
            project3Hovered: false,
            project3Clicked: false,
            project4Hovered: false,
            project4Clicked: false,
            project5Hovered: false,
            project5Clicked: false,
            project6Hovered: false,
            project6Clicked: false,
            project7Hovered: false,
            project7Clicked: false,
            project8Hovered: false,
            project8Clicked: false,
            project9Hovered: false,
            project9Clicked: false,
            project10Hovered: false,
            project10Clicked: false,


                //! - - SECTION 2 (WINDOW 2 - RIGHT PANE) - - !//

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


        //! - - NAVBAR FUNCTIONS - - !//

    mainLogoEnter = () => {
        this.setState({ crayoLogoHovered: true })
    }

    mainLogoLeave = () => {
        this.setState({ crayoLogoHovered: false })
    }

    collapseNavbarEnter = () => {
        this.setState({ collapseNavbarHovered: true })
    }

    collapseNavbarLeave = () => {
        this.setState({ collapseNavbarHovered: false })
    }

    collapseNavbarClicked = () => {
        if (this.state.leftPaneMinimized === false) {
            this.setState({
                leftPaneMinimized: true,
                showExpandedLeftPane: false,
            }, () => {
                setTimeout(() => {
                    this.setState({ showShrankLeftPane: true, collapseNavbarHovered: false })
                }, 500)
            })
        } else {
            this.setState({
                leftPaneMinimized: false,
                showShrankLeftPane: false
            }, () => {
                setTimeout(() => {
                    this.setState({ showExpandedLeftPane: true, collapseNavbarHovered: false })
                }, 500)
            })
        }
        
    }

    //* - - DASHBOARD OPTION - - *//

    dashboardOptionEnter = () => {
        this.setState({ dashboardOptionHovered: true })
    }

    dashboardOptionLeave = () => {
        this.setState({ dashboardOptionHovered: false })
    }

    dashboardNavOptionClicked = () => {
        if (this.state.dashboardOptionClicked === false) {
            this.setState({
                dashboardOptionClicked: true,
                showDashboardSuboptions: true,
            })
        } else {
            this.setState({ dashboardOptionClicked: false, showDashboardSuboptions: false, shrankDashboardOptionHovered: false })
        }
    }

    dashboardSub1Enter = () => {
        this.setState({ dashboardSub1Hovered: true })
    }

    dashboardSub1Leave = () => {
        this.setState({ dashboardSub1Hovered: false })
    }

    dashboardSub1OptionClicked = () => {
        if (this.state.dashboardSub1Clicked !== true) {
            clearTimeout()
            this.setState({ 
                dashboardSub1Clicked: true, 
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: true,
                showDashboardSub2Loading: false,
                showDashboardSub3Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loaded: false,
                dashboardSubActive: "Main Editor",
                
                //* - CLOSING NON-DASHBOARD OPTIONS - *//
                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showDashboardSub1Loading: false,
                        showDashboardSub1Loaded: true,
                        showDashboardSub2Loading: false,
                        showDashboardSub3Loading: false,
                        showDashboardSub2Loaded: false,
                        showDashboardSub3Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ dashboardSub1Clicked: false, showDashboardSub1Loaded: false, dashboardSubActive: "" })
        }
    }

    dashboardSub2Enter = () => {
        this.setState({ dashboardSub2Hovered: true })
    }

    dashboardSub2Leave = () => {
        this.setState({ dashboardSub2Hovered: false })
    }

    dashboardSub2OptionClicked = () => {
        if (this.state.dashboardSub2Clicked !== true) {
            this.setState({ 
                dashboardSub1Clicked: false, 
                dashboardSub2Clicked: true,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: true,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,
                dashboardSubActive: "My Projects",
                
                //* - CLOSING NON-DASHBOARD OPTIONS - *//
                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showDashboardSub2Loading: false,
                        showDashboardSub2Loaded: true,
                        showDashboardSub1Loading: false,
                        showDashboardSub1Loaded: false,
                        showDashboardSub3Loading: false,
                        showDashboardSub3Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ dashboardSub2Clicked: false, showDashboardSub2Loaded: false, dashboardSubActive: "" })
        }
    }

    dashboardSub3Enter = () => {
        this.setState({ dashboardSub3Hovered: true })
    }

    dashboardSub3Leave = () => {
        this.setState({ dashboardSub3Hovered: false })
    }

    dashboardSub3OptionClicked = () => {
        if (this.state.dashboardSub3Clicked !== true) {
            this.setState({ 
                dashboardSub1Clicked: false, 
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: true,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: true,
                dashboardSubActive: "My Assets",
                
                //* - CLOSING NON-DASHBOARD OPTIONS - *//
                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showDashboardSub3Loading: false,
                        showDashboardSub3Loaded: true,
                        showDashboardSub1Loading: false,
                        showDashboardSub1Loaded: false,
                        showDashboardSub2Loading: false,
                        showDashboardSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ dashboardSub3Clicked: false, showDashboardSub3Loaded: false, dashboardSubActive: "" })
        }
    }

        //* - - CREATE OPTION - - *//

    createOptionEnter = () => {
        this.setState({ createOptionHovered: true })
    }

    createOptionLeave = () => {
        this.setState({ createOptionHovered: false })
    }

    createNavOptionClicked = () => {
        if (this.state.createOptionClicked === false) {
            this.setState({
                createOptionClicked: true,
                showCreateSuboptions: true,
            })
        } else {
            this.setState({ createOptionClicked: false, showCreateSuboptions: false, shrankCreateOptionHovered: false })
        }
    }

    createSub1Enter = () => {
        this.setState({ createSub1Hovered: true })
    }

    createSub1Leave = () => {
        this.setState({ createSub1Hovered: false })
    }

    createSub1OptionClicked = () => {
        if (this.state.createSub1Clicked !== true) {
            this.setState({ 
                createSub1Clicked: true, 
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: true,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,
                createSubActive: "Split Video",
                
                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: true,
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: false,
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: false,
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: false,
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: false,
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub1Clicked: false, showCreateSub1Loaded: false, createSubActive: "" })
        }
    }

    createSub2Enter = () => {
        this.setState({ createSub2Hovered: true })
    }

    createSub2Leave = () => {
        this.setState({ createSub2Hovered: false })
    }

    createSub2OptionClicked = () => {
        if (this.state.createSub2Clicked !== true) {
            this.setState({ 
                createSub1Clicked: false, 
                createSub2Clicked: true,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: true,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,
                createSubActive: "Story Video",
                
                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: true,
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: false,
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: false,
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: false,
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: false,
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub2Clicked: false, showCreateSub2Loaded: false, createSubActive: "" })
        }
    }

    createSub3Enter = () => {
        this.setState({ createSub3Hovered: true })
    }

    createSub3Leave = () => {
        this.setState({ createSub3Hovered: false })
    }

    createSub3OptionClicked = () => {
        if (this.state.createSub3Clicked !== true) {
            this.setState({ 
                createSub1Clicked: false, 
                createSub2Clicked: false,
                createSub3Clicked: true,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,
                showCreateSub3Loading: true,
                createSubActive: "My Assets",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: true,
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: false,
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: false,
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: false,
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: false,
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub3Clicked: false, showCreateSub3Loaded: false, createSubActive: "" })
        }
    }

    createSub4Enter = () => {
        this.setState({ createSub4Hovered: true })
    }

    createSub4Leave = () => {
        this.setState({ createSub4Hovered: false })
    }

    createSub4OptionClicked = () => {
        if (this.state.createSub4Clicked !== true) {
            this.setState({ 
                createSub1Clicked: false, 
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                createSub4Clicked: true,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,
                showCreateSub4Loading: true,
                createSubActive: "Blur Video",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: true,
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: false,
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: false,
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: false,
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: false,
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub4Clicked: false, showCreateSub4Loaded: false, createSubActive: "" })
        }
    }

    createSub5Enter = () => {
        this.setState({ createSub5Hovered: true })
    }

    createSub5Leave = () => {
        this.setState({ createSub5Hovered: false })
    }

    createSub5OptionClicked = () => {
        if (this.state.createSub5Clicked !== true) {
            this.setState({ 
                createSub1Clicked: false, 
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub6Clicked: false,
                createSub5Clicked: true,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,
                showCreateSub5Loading: true,
                createSubActive: "ChatGPT Video",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: true,
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: false,
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: false,
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: false,
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: false,
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub5Clicked: false, showCreateSub5Loaded: false, createSubActive: "" })
        }
    }

    createSub6Enter = () => {
        this.setState({ createSub6Hovered: true })
    }

    createSub6Leave = () => {
        this.setState({ createSub6Hovered: false })
    }

    createSub6OptionClicked = () => {
        if (this.state.createSub6Clicked !== true) {
            this.setState({ 
                createSub1Clicked: false, 
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: true,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: true,
                createSubActive: "Voiceover Video",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showCreateSub6Loading: false,
                        showCreateSub6Loaded: true,
                        showCreateSub5Loading: false,
                        showCreateSub5Loaded: false,
                        showCreateSub4Loading: false,
                        showCreateSub4Loaded: false,
                        showCreateSub3Loading: false,
                        showCreateSub3Loaded: false,
                        showCreateSub1Loading: false,
                        showCreateSub1Loaded: false,
                        showCreateSub2Loading: false,
                        showCreateSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ createSub6Clicked: false, showCreateSub6Loaded: false, createSubActive: "" })
        }
    }

        //* - - TOOLS OPTION - - *//

    toolsOptionEnter = () => {
        this.setState({ toolsOptionHovered: true })
    }

    toolsOptionLeave = () => {
        this.setState({ toolsOptionHovered: false })
    }

    toolsNavOptionClicked = () => {
        if (this.state.toolsOptionClicked === false) {
            this.setState({
                toolsOptionClicked: true,
                showToolsSuboptions: true,
            })
        } else {
            this.setState({ toolsOptionClicked: false, showToolsSuboptions: false, shrankToolsOptionHovered: false })
        }
    }

    toolsSub1Enter = () => {
        this.setState({ toolsSub1Hovered: true })
    }

    toolsSub1Leave = () => {
        this.setState({ toolsSub1Hovered: false })
    }

    toolsSub1OptionClicked = () => {
        if (this.state.toolsSub1Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: true, 
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: true,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,
                toolsSubActive: "AI Images",
                
                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: true,
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: false,
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: false,
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: false,
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: false,
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub1Clicked: false, showToolsSub1Loaded: false, toolsSubActive: "" })
        }
    }

    toolsSub2Enter = () => {
        this.setState({ toolsSub2Hovered: true })
    }

    toolsSub2Leave = () => {
        this.setState({ toolsSub2Hovered: false })
    }

    toolsSub2OptionClicked = () => {
        if (this.state.toolsSub2Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: false, 
                toolsSub2Clicked: true,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: true,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,
                toolsSubActive: "AI Voiceover",
                
                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: true,
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: false,
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: false,
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: false,
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: false,
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub2Clicked: false, showToolsSub2Loaded: false, toolsSubActive: "" })
        }
    }

    toolsSub3Enter = () => {
        this.setState({ toolsSub3Hovered: true })
    }

    toolsSub3Leave = () => {
        this.setState({ toolsSub3Hovered: false })
    }

    toolsSub3OptionClicked = () => {
        if (this.state.toolsSub3Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: false, 
                toolsSub2Clicked: false,
                toolsSub3Clicked: true,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,
                showToolsSub3Loading: true,
                toolsSubActive: "AI Avatars",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: true,
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: false,
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: false,
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: false,
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: false,
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub3Clicked: false, showToolsSub3Loaded: false, toolsSubActive: "" })
        }
    }

    toolsSub4Enter = () => {
        this.setState({ toolsSub4Hovered: true })
    }

    toolsSub4Leave = () => {
        this.setState({ toolsSub4Hovered: false })
    }

    toolsSub4OptionClicked = () => {
        if (this.state.toolsSub4Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: false, 
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                toolsSub4Clicked: true,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,
                showToolsSub4Loading: true,
                toolsSubActive: "AI Brainstorm",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: true,
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: false,
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: false,
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: false,
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: false,
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub4Clicked: false, showToolsSub4Loaded: false, toolsSubActive: "" })
        }
    }

    toolsSub5Enter = () => {
        this.setState({ toolsSub5Hovered: true })
    }

    toolsSub5Leave = () => {
        this.setState({ toolsSub5Hovered: false })
    }

    toolsSub5OptionClicked = () => {
        if (this.state.toolsSub5Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: false, 
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub6Clicked: false,
                toolsSub5Clicked: true,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,
                showToolsSub5Loading: true,
                toolsSubActive: "YT Downloader",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: true,
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: false,
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: false,
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: false,
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: false,
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub5Clicked: false, showToolsSub5Loaded: false, toolSubActive: "" })
        }
    }

    toolsSub6Enter = () => {
        this.setState({ toolsSub6Hovered: true })
    }

    toolsSub6Leave = () => {
        this.setState({ toolsSub6Hovered: false })
    }

    toolsSub6OptionClicked = () => {
        if (this.state.toolsSub6Clicked !== true) {
            this.setState({ 
                toolsSub1Clicked: false, 
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: true,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: true,
                toolsSubActive: "Voiceover Video",

                //* - CLOSING NON-CREATE OPTIONS - *//
                dashboardSubActive: "",
                dashboardSub1Clicked: false,
                dashboardSub2Clicked: false,
                dashboardSub3Clicked: false,
                showDashboardSub1Loading: false,
                showDashboardSub1Loaded: false,
                showDashboardSub2Loading: false,
                showDashboardSub2Loaded: false,
                showDashboardSub3Loading: false,
                showDashboardSub3Loaded: false,

                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                moreSubActive: "",
                moreSub1Clicked: false,
                moreSub2Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: false,
                showMoreSub2Loaded: false,
               
                
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showToolsSub6Loading: false,
                        showToolsSub6Loaded: true,
                        showToolsSub5Loading: false,
                        showToolsSub5Loaded: false,
                        showToolsSub4Loading: false,
                        showToolsSub4Loaded: false,
                        showToolsSub3Loading: false,
                        showToolsSub3Loaded: false,
                        showToolsSub1Loading: false,
                        showToolsSub1Loaded: false,
                        showToolsSub2Loading: false,
                        showToolsSub2Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ toolsSub6Clicked: false, showToolsSub6Loaded: false, toolsSubActive: "" })
        }
    }

        //* - - MORE OPTION - - *//

    moreOptionEnter = () => {
        this.setState({ moreOptionHovered: true })
    }

    moreOptionLeave = () => {
        this.setState({ moreOptionHovered: false })
    }

    moreNavOptionClicked = () => {
        if (this.state.moreOptionClicked === false) {
            this.setState({
                moreOptionClicked: true,
                showMoreSuboptions: true,
            })
        } else {
            this.setState({ moreOptionClicked: false, showMoreSuboptions: false, shrankMoreOptionHovered: false })
        }
    }

    moreSub1Enter = () => {
        this.setState({ moreSub1Hovered: true })
    }

    moreSub1Leave = () => {
        this.setState({ moreSub1Hovered: false })
    }

    moreSub1OptionClicked = () => {
        if (this.state.moreSub1Clicked !== true) {
            clearTimeout()
            this.setState({ 
                moreSub1Clicked: true, 
                moreSub2Clicked: false,
                moreSub3Clicked: false,
                showMoreSub1Loading: true,
                showMoreSub2Loading: false,
                showMoreSub3Loading: false,
                showMoreSub2Loaded: false,
                showMoreSub3Loaded: false,
                moreSubActive: "Affiliate Program",
                
                //* - CLOSING NON-DASHBOARD OPTIONS - *//
                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showMoreSub1Loading: false,
                        showMoreSub1Loaded: true,
                        showMoreSub2Loading: false,
                        showMoreSub3Loading: false,
                        showMoreSub2Loaded: false,
                        showMoreSub3Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ moreSub1Clicked: false, showMoreSub1Loaded: false, moreSubActive: "" })
        }
    }

    moreSub2Enter = () => {
        this.setState({ moreSub2Hovered: true })
    }

    moreSub2Leave = () => {
        this.setState({ moreSub2Hovered: false })
    }

    moreSub2OptionClicked = () => {
        if (this.state.moreSub2Clicked !== true) {
            this.setState({ 
                moreSub1Clicked: false, 
                moreSub2Clicked: true,
                moreSub3Clicked: false,
                showMoreSub1Loading: false,
                showMoreSub1Loaded: false,
                showMoreSub2Loading: true,
                showMoreSub3Loading: false,
                showMoreSub3Loaded: false,
                moreSubActive: "Discord",
                
                //* - CLOSING NON-DASHBOARD OPTIONS - *//
                createSubActive: "",
                createSub1Clicked: false,
                createSub2Clicked: false,
                createSub3Clicked: false,
                createSub4Clicked: false,
                createSub5Clicked: false,
                createSub6Clicked: false,
                showCreateSub1Loading: false,
                showCreateSub1Loaded: false,
                showCreateSub2Loading: false,
                showCreateSub2Loaded: false,
                showCreateSub3Loading: false,
                showCreateSub3Loaded: false,
                showCreateSub4Loading: false,
                showCreateSub4Loaded: false,
                showCreateSub5Loading: false,
                showCreateSub5Loaded: false,
                showCreateSub6Loading: false,
                showCreateSub6Loaded: false,

                toolsSubActive: "",
                toolsSub1Clicked: false,
                toolsSub2Clicked: false,
                toolsSub3Clicked: false,
                toolsSub4Clicked: false,
                toolsSub5Clicked: false,
                toolsSub6Clicked: false,
                showToolsSub1Loading: false,
                showToolsSub1Loaded: false,
                showToolsSub2Loading: false,
                showToolsSub2Loaded: false,
                showToolsSub3Loading: false,
                showToolsSub3Loaded: false,
                showToolsSub4Loading: false,
                showToolsSub4Loaded: false,
                showToolsSub5Loading: false,
                showToolsSub5Loaded: false,
                showToolsSub6Loading: false,
                showToolsSub6Loaded: false,

            }, () => {
                setTimeout(() => {
                    this.setState({
                        showMoreSub2Loading: false,
                        showMoreSub2Loaded: true,
                        showMoreSub1Loading: false,
                        showMoreSub1Loaded: false,
                        showMoreSub3Loading: false,
                        showMoreSub3Loaded: false,
                    })
                }, 2000)
            })
        } else {
            this.setState({ moreSub2Clicked: false, showMoreSub2Loaded: false, moreSubActive: "" })
        }
    }

        //* - - SHRANK DASHBOARD OPTION - - *//

    shrankDashboardEnter = () => {
        this.setState({ shrankDashboardOptionHovered: true })
    }

    shrankDashboardLeave = () => {
        if (!this.state.dashboardOptionClicked) {
            this.setState({ shrankDashboardOptionHovered: false })
        }
    }

    shrankDashboardOptionClicked = () => {
        if (!this.state.dashboardOptionClicked) { 
            this.collapseNavbarClicked()
            setTimeout(() => {
                this.setState({
                    shrankDashboardOptionHovered: true
                })
                this.dashboardNavOptionClicked()
            }, 1000)
        } else {
            this.setState({
                shrankDashboardOptionHovered: false
            })
            this.setState({ dashboardOptionClicked: false, showDashboardSuboptions: false })
        }
    }

         //* - - SHRANK CREATE OPTION - - *//

    shrankCreateEnter = () => {
        this.setState({ shrankCreateOptionHovered: true })
    }

    shrankCreateLeave = () => {
        if (!this.state.createOptionClicked) {
            this.setState({ shrankCreateOptionHovered: false })
        }
    }

    shrankCreateOptionClicked = () => {
        if (!this.state.createOptionClicked) { 
            this.collapseNavbarClicked()
            setTimeout(() => {
                this.setState({
                    shrankCreateOptionHovered: true
                })
                this.createNavOptionClicked()
            }, 1000)
        } else {
            this.setState({
                shrankCreateOptionHovered: false
            })
            this.setState({ createOptionClicked: false, showCreateSuboptions: false })
        }
    }

         //* - - SHRANK TOOLS OPTION - - *//

    shrankToolsEnter = () => {
        this.setState({ shrankToolsOptionHovered: true })
    }

    shrankToolsLeave = () => {
        if (!this.state.toolsOptionClicked) {
            this.setState({ shrankToolsOptionHovered: false })
        }
    }

    shrankToolsOptionClicked = () => {
        if (!this.state.toolsOptionClicked) { 
            this.collapseNavbarClicked()
            setTimeout(() => {
                this.setState({
                    shrankToolsOptionHovered: true
                })
                this.toolsNavOptionClicked()
            }, 1000)
        } else {
            this.setState({
                shrankToolsOptionHovered: false
            })
            this.setState({ toolsOptionClicked: false, showToolsSuboptions: false })
        }
    }

         //* - - SHRANK MORE OPTION - - *//

    shrankMoreEnter = () => {
        this.setState({ shrankMoreOptionHovered: true })
    }

    shrankMoreLeave = () => {
        if (!this.state.moreOptionClicked) {
            this.setState({ shrankMoreOptionHovered: false })
        }
    }

    shrankMoreOptionClicked = () => {
        if (!this.state.moreOptionClicked) { 
            this.collapseNavbarClicked()
            setTimeout(() => {
                this.setState({
                    shrankMoreOptionHovered: true
                })
                this.moreNavOptionClicked()
            }, 1000)
        } else {
            this.setState({
                shrankMoreOptionHovered: false
            })
            this.setState({ moreOptionClicked: false, showMoreSuboptions: false })
        }
    }

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

        //! - - PAGE VERSION BUTTON - - !//

    versionButtonEnter = () => {
        this.setState({ versionButtonHovered: true })
    }

    versionButtonLeave = () => {
        this.setState({ versionButtonHovered: false })
    }

    versionButtonOptionClicked = () => {
        if (this.state.versionButtonText === "OFF") {
            this.setState({
                version1ButtonClicked: true,
                versionButtonText: "ON"
            })
        } else {
            this.setState({
                version1ButtonClicked: false,
                versionButtonText: "OFF"
            })
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

        //* - - WINDOW 1 - - *//

    latestProject1Enter = () => {
        this.setState({ latestProject1Hovered: true })
    }

    latestProject1Leave = () => {
        this.setState({ latestProject1Hovered: false })
    }

    latestProject2Enter = () => {
        this.setState({ latestProject2Hovered: true })
    }

    latestProject2Leave = () => {
        this.setState({ latestProject2Hovered: false })
    }

    latestProject3Enter = () => {
        this.setState({ latestProject3Hovered: true })
    }

    latestProject3Leave = () => {
        this.setState({ latestProject3Hovered: false })
    }
        
        //* - - WINDOW 2 - - *//

    tutorialCell1Enter = () => {
        this.setState({
            tutorialCell1Hovered: true,
            tutorialCell1BorderColor: "#2980B9",
            tutorialCell1MainTextColor: "",
            tutorialCell1TimerColor: "#2980B9",
            tutorialCell1ImgBgColor: "#2980B9"
        })
    }
    tutorialCell1Leave = () => {
        this.setState({
            tutorialCell1Hovered: false,
            tutorialCell1BorderColor: "#8a8a8a",
            tutorialCell1MainTextColor: "",
            tutorialCell1TimerColor: "#5e626a",
            tutorialCell1ImgBgColor: "white"
        })
    }


    tutorialCell2Enter = () => {
        this.setState({
            tutorialCell2Hovered: true,
            tutorialCell2BorderColor: "#2980B9",
            tutorialCell2MainTextColor: "",
            tutorialCell2TimerColor: "#2980B9",
            tutorialCell2ImgBgColor: "#2980B9"
        })
    }
    tutorialCell2Leave = () => {
        this.setState({
            tutorialCell2Hovered: false,
            tutorialCell2BorderColor: "#8a8a8a",
            tutorialCell2MainTextColor: "",
            tutorialCell2TimerColor: "#5e626a",
            tutorialCell2ImgBgColor: "white"
        })
    }


    tutorialCell3Enter = () => {
        this.setState({
            tutorialCell3Hovered: true,
            tutorialCell3BorderColor: "#2980B9",
            tutorialCell3MainTextColor: "",
            tutorialCell3TimerColor: "#2980B9",
            tutorialCell3ImgBgColor: "#2980B9"
        })
    }
    tutorialCell3Leave = () => {
        this.setState({
            tutorialCell3Hovered: false,
            tutorialCell3BorderColor: "#8a8a8a",
            tutorialCell3MainTextColor: "",
            tutorialCell3TimerColor: "#5e626a",
            tutorialCell3ImgBgColor: "white"
        })
    }


    tutorialCell4Enter = () => {
        this.setState({
            tutorialCell4Hovered: true,
            tutorialCell4BorderColor: "#2980B9",
            tutorialCell4MainTextColor: "",
            tutorialCell4TimerColor: "#2980B9",
            tutorialCell4ImgBgColor: "#2980B9"
        })
    }
    tutorialCell4Leave = () => {
        this.setState({
            tutorialCell4Hovered: false,
            tutorialCell4BorderColor: "#8a8a8a",
            tutorialCell4MainTextColor: "",
            tutorialCell4TimerColor: "#5e626a",
            tutorialCell4ImgBgColor: "white"
        })
    }


    tutorialCell5Enter = () => {
        this.setState({
            tutorialCell5Hovered: true,
            tutorialCell5BorderColor: "#2980B9",
            tutorialCell5MainTextColor: "",
            tutorialCell5TimerColor: "#2980B9",
            tutorialCell5ImgBgColor: "#2980B9"
        })
    }
    tutorialCell5Leave = () => {
        this.setState({
            tutorialCell5Hovered: false,
            tutorialCell5BorderColor: "#8a8a8a",
            tutorialCell5MainTextColor: "",
            tutorialCell5TimerColor: "#5e626a",
            tutorialCell5ImgBgColor: "white"
        })
    }


    tutorialCell6Enter = () => {
        this.setState({
            tutorialCell6Hovered: true,
            tutorialCell6BorderColor: "#2980B9",
            tutorialCell6MainTextColor: "",
            tutorialCell6TimerColor: "#2980B9",
            tutorialCell6ImgBgColor: "#2980B9"
        })
    }
    tutorialCell6Leave = () => {
        this.setState({
            tutorialCell6Hovered: false,
            tutorialCell6BorderColor: "#8a8a8a",
            tutorialCell6MainTextColor: "",
            tutorialCell6TimerColor: "#5e626a",
            tutorialCell6ImgBgColor: "white"
        })
    }


    tutorialCell7Enter = () => {
        this.setState({
            tutorialCell7Hovered: true,
            tutorialCell7BorderColor: "#2980B9",
            tutorialCell7MainTextColor: "",
            tutorialCell7TimerColor: "#2980B9",
            tutorialCell7ImgBgColor: "#2980B9"
        })
    }
    tutorialCell7Leave = () => {
        this.setState({
            tutorialCell7Hovered: false,
            tutorialCell7BorderColor: "#8a8a8a",
            tutorialCell7MainTextColor: "",
            tutorialCell7TimerColor: "#5e626a",
            tutorialCell7ImgBgColor: "white"
        })
    }


    tutorialCell8Enter = () => {
        this.setState({
            tutorialCell8Hovered: true,
            tutorialCell8BorderColor: "#2980B9",
            tutorialCell8MainTextColor: "",
            tutorialCell8TimerColor: "#2980B9",
            tutorialCell8ImgBgColor: "#2980B9"
        })
    }
    tutorialCell8Leave = () => {
        this.setState({
            tutorialCell8Hovered: false,
            tutorialCell8BorderColor: "#8a8a8a",
            tutorialCell8MainTextColor: "",
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

        //* - - WINDOW 1 - - *//

    selectAllProjects = () => {

        if (!this.state.project2Clicked || !this.state.project3Clicked || !this.state.project4Clicked || !this.state.project5Clicked || !this.state.project6Clicked || !this.state.project7Clicked || !this.state.project8Clicked || !this.state.project9Clicked || !this.state.project10Clicked) {
            this.setState({
                project1Clicked: true,
                project2Clicked: true,
                project3Clicked: true,
                project4Clicked: true,
                project5Clicked: true,
                project6Clicked: true,
                project7Clicked: true,
                project8Clicked: true,
                project9Clicked: true,
                project10Clicked: true,
            })
        } else if (this.state.project2Clicked && this.state.project3Clicked && this.state.project4Clicked && this.state.project5Clicked && this.state.project6Clicked && this.state.project7Clicked && this.state.project8Clicked && this.state.project9Clicked && this.state.project10Clicked) {
            this.setState({
                project1Clicked: false,
                project2Clicked: false,
                project3Clicked: false,
                project4Clicked: false,
                project5Clicked: false,
                project6Clicked: false,
                project7Clicked: false,
                project8Clicked: false,
                project9Clicked: false,
                project10Clicked: false,
            })
        }

    }

    project1ListEnter = () => {
        this.setState({ project1Hovered: true })
    }
    project1ListLeave = () => {
        if (!this.state.project1Clicked) {
            this.setState({ project1Hovered: false })
        }
    }
    project1ListClicked = () => {
        if (this.state.project1Clicked === false) {
            this.setState({ project1Clicked: true })
        } else {
            this.setState({ project1Clicked: false })
        } 
    }

    project2ListEnter = () => {
        this.setState({ project2Hovered: true })
    }
    project2ListLeave = () => {
        if (!this.state.project2Clicked) {
            this.setState({ project2Hovered: false })
        }
    }
    project2ListClicked = () => {
        if (this.state.project2Clicked === false) {
            this.setState({ project2Clicked: true })
        } else {
            this.setState({ project2Clicked: false })
        }
        
    }

    project3ListEnter = () => {
        this.setState({ project3Hovered: true })
    }
    project3ListLeave = () => {
        if (!this.state.project3Clicked) {
            this.setState({ project3Hovered: false })
        }
    }
    project3ListClicked = () => {
        if (this.state.project3Clicked === false) {
            this.setState({ project3Clicked: true })
        } else {
            this.setState({ project3Clicked: false })
        }
        
    }
    
    project4ListEnter = () => {
        this.setState({ project4Hovered: true })
    }
    project4ListLeave = () => {
        if (!this.state.project4Clicked) {
            this.setState({ project4Hovered: false })
        }
    }
    project4ListClicked = () => {
        if (this.state.project4Clicked === false) {
            this.setState({ project4Clicked: true })
        } else {
            this.setState({ project4Clicked: false })
        }
        
    }

    project5ListEnter = () => {
        this.setState({ project5Hovered: true })
    }
    project5ListLeave = () => {
        if (!this.state.project5Clicked) {
            this.setState({ project5Hovered: false })
        }
    }
    project5ListClicked = () => {
        if (this.state.project5Clicked === false) {
            this.setState({ project5Clicked: true })
        } else {
            this.setState({ project5Clicked: false })
        }
        
    }

    project6ListEnter = () => {
        this.setState({ project6Hovered: true })
    }
    project6ListLeave = () => {
        if (!this.state.project6Clicked) {
            this.setState({ project6Hovered: false })
        }
    }
    project6ListClicked = () => {
        if (this.state.project6Clicked === false) {
            this.setState({ project6Clicked: true })
        } else {
            this.setState({ project6Clicked: false })
        }
        
    }

    project7ListEnter = () => {
        this.setState({ project7Hovered: true })
    }
    project7ListLeave = () => {
        if (!this.state.project7Clicked) {
            this.setState({ project7Hovered: false })
        }
    }
    project7ListClicked = () => {
        if (this.state.project7Clicked === false) {
            this.setState({ project7Clicked: true })
        } else {
            this.setState({ project7Clicked: false })
        }
        
    }

    project8ListEnter = () => {
        this.setState({ project8Hovered: true })
    }
    project8ListLeave = () => {
        if (!this.state.project8Clicked) {
            this.setState({ project8Hovered: false })
        }
    }
    project8ListClicked = () => {
        if (this.state.project8Clicked === false) {
            this.setState({ project8Clicked: true })
        } else {
            this.setState({ project8Clicked: false })
        }
        
    }

    project9ListEnter = () => {
        this.setState({ project9Hovered: true })
    }
    project9ListLeave = () => {
        if (!this.state.project9Clicked) {
            this.setState({ project9Hovered: false })
        }
    }
    project9ListClicked = () => {
        if (this.state.project9Clicked === false) {
            this.setState({ project9Clicked: true })
        } else {
            this.setState({ project9Clicked: false })
        }
        
    }

    project10ListEnter = () => {
        this.setState({ project10Hovered: true })
    }
    project10ListLeave = () => {
        if (!this.state.project10Clicked) {
            this.setState({ project10Hovered: false })
        }
    }
    project10ListClicked = () => {
        if (this.state.project10Clicked === false) {
            this.setState({ project10Clicked: true })
        } else {
            this.setState({ project10Clicked: false })
        }
        
    }

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
                <div style={{width: this.state.leftPaneMinimized ? "5%" : "17.5%"}} className="left-pane">
                    <CSSTransition
                    in={this.state.showExpandedLeftPane}
                    timeout={{enter: 1000, exit: 0}}
                    classNames="dialog-slide-left"
                    unmountOnExit
                    >
                        <div className="left-pane-container">
                            <div className="left-pane-header">
                                <div className="left-pane-header-left">
                                    <img 
                                    onMouseEnter={this.mainLogoEnter}
                                    onMouseLeave={this.mainLogoLeave}
                                    src={this.state.crayoLogoHovered ? "/assets/crayo-logo-expanded2-color.png" : "/assets/crayo-logo-expanded2.png"}/>
                                </div>
                                <div className="left-pane-header-right">
                                    <img 
                                    onMouseEnter={this.collapseNavbarEnter}
                                    onMouseLeave={this.collapseNavbarLeave}
                                    onClick={this.collapseNavbarClicked}
                                    src={this.state.collapseNavbarHovered ? "/assets/shrink-navbar-icon-color.png" : "/assets/shrink-navbar-icon.png"}/>
                                </div>
                            </div>
                            <div style={{border: "0.5px solid #707A9F", marginTop: "8%", marginLeft: "5%", marginRight: "5%"}}></div>
                            <div className="navbar-options-container">
                                
                                <div 
                                onMouseEnter={this.dashboardOptionEnter}
                                onMouseLeave={this.dashboardOptionLeave}
                                onClick={this.dashboardNavOptionClicked}
                                style={{border: `1px solid ${this.state.dashboardOptionHovered ? this.state.dashboardOptionClicked || this.state.dashboardSubActive !== "" ? "#1c4c75" : "#707a9f" : this.state.dashboardOptionClicked || this.state.dashboardSubActive !== "" ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.dashboardOptionClicked ? "#E0F4FC" : ""}} className="navbar-option-cell">
                                    <div className="navbar-option-icon">
                                        <img src={this.state.dashboardOptionHovered || this.state.dashboardOptionClicked ? "/assets/dashboard-option-icon-color2.png" : "/assets/dashboard-option-icon.png"}/>
                                    </div>
                                    <div className="navbar-option-text">
                                        <p style={{color: this.state.dashboardOptionHovered || this.state.dashboardOptionClicked ? "#1c4c75" : "", fontWeight: this.state.dashboardOptionClicked ? "bold" : "", marginBottom: (!this.state.dashboardOptionClicked && (this.state.dashboardSub1Clicked || this.state.dashboardSub2Clicked || this.state.dashboardSub3Clicked)) ? "0px" : ""}}>Dashboard</p>
                                        {(!this.state.dashboardOptionClicked && (this.state.dashboardSub1Clicked || this.state.dashboardSub2Clicked || this.state.dashboardSub3Clicked)) && 
                                            <div className="active-sub-option">
                                                <p><span style={{color: "#41A75B"}}>ACTIVE: </span>{this.state.dashboardSubActive}</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="navbar-option-dropdown">
                                        <img className={this.state.dashboardOptionClicked ? "navbar-option-dropdown-unrotated navbar-option-dropdown-rotated" : "navbar-option-dropdown-unrotated"} src={this.state.dashboardOptionClicked ? "/assets/dashboard-down-arrow-color2.png" : "/assets/dashboard-down-arrow.png"}/>
                                    </div>
                                </div>
                                <CSSTransition
                                in={this.state.showDashboardSuboptions}
                                timeout={{enter: 500, exit: 500}}
                                classNames="dialog-slide-down"
                                unmountOnExit
                                >
                                    <div className="dashboard-option-subs">
                                        <div className="dashboard-option-sub-connector">
                                            <div className="dashboard-option-sub-connector-line"><span style={{color: "transparent", cursor: "default"}}>|</span></div>
                                        </div>
                                        <div className="dashboard-option-sub-text">
                                            <div 
                                            onMouseEnter={this.dashboardSub1Enter}
                                            onMouseLeave={this.dashboardSub1Leave}
                                            onClick={this.dashboardSub1OptionClicked}
                                            style={{border: `1px solid ${this.state.dashboardSub1Hovered ? this.state.dashboardSub1Clicked ? "#1c4c75" : "#707a9f" : this.state.dashboardSub1Clicked ? "#1c4c75" : "transparent"}`, color: this.state.dashboardSub1Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.dashboardSub1Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.dashboardSub1Clicked ? "bold" : ""}}>Main Editor</p>
                                                {this.state.showDashboardSub1Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showDashboardSub1Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.dashboardSub2Enter}
                                            onMouseLeave={this.dashboardSub2Leave}
                                            onClick={this.dashboardSub2OptionClicked}
                                            style={{border: `1px solid ${this.state.dashboardSub2Hovered ? this.state.dashboardSub2Clicked ? "#1c4c75" : "#707a9f" : this.state.dashboardSub2Clicked ? "#1c4c75" : "transparent"}`, color: this.state.dashboardSub2Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.dashboardSub2Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.dashboardSub2Clicked ? "bold" : ""}}>My Projects</p>
                                                {this.state.showDashboardSub2Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showDashboardSub2Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.dashboardSub3Enter}
                                            onMouseLeave={this.dashboardSub3Leave}
                                            onClick={this.dashboardSub3OptionClicked}
                                            style={{border: `1px solid ${this.state.dashboardSub3Hovered ? this.state.dashboardSub3Clicked ? "#1c4c75" : "#707a9f" : this.state.dashboardSub3Clicked ? "#1c4c75" : "transparent"}`, color: this.state.dashboardSub3Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.dashboardSub3Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.dashboardSub3Clicked ? "bold" : ""}}>My Assets</p>
                                                {this.state.showDashboardSub3Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showDashboardSub3Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>

                                <div 
                                onMouseEnter={this.createOptionEnter}
                                onMouseLeave={this.createOptionLeave}
                                onClick={this.createNavOptionClicked}
                                style={{border: `1px solid ${this.state.createOptionHovered ? this.state.createOptionClicked || this.state.createSubActive !== "" ? "#1c4c75" : "#707a9f" : this.state.createOptionClicked || this.state.createSubActive !== "" ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.createOptionClicked ? "#E0F4FC" : "", marginTop: "3%"}}
                                className="navbar-option-cell">
                                    <div className="navbar-option-icon">
                                        <img src={this.state.createOptionHovered || this.state.createOptionClicked ? "/assets/create-option-icon-color2.png" : "/assets/create-option-icon.png"}/>
                                    </div>
                                    <div className="navbar-option-text">
                                        <p style={{color: this.state.createOptionHovered || this.state.createOptionClicked ? "#1c4c75" : "", fontWeight: this.state.createOptionClicked ? "bold" : "", marginBottom: (!this.state.createOptionClicked && (this.state.createSub1Clicked || this.state.createSub2Clicked || this.state.createSub3Clicked || this.state.createSub4Clicked || this.state.createSub5Clicked || this.state.createSub6Clicked)) ? "0px" : ""}}>Create</p>
                                        {(!this.state.createOptionClicked && (this.state.createSub1Clicked || this.state.createSub2Clicked || this.state.createSub3Clicked || this.state.createSub4Clicked || this.state.createSub5Clicked || this.state.createSub6Clicked)) && 
                                            <div className="active-sub-option">
                                                <p><span style={{color: "#41A75B"}}>ACTIVE: </span>{this.state.createSubActive}</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="navbar-option-dropdown">
                                        <img className={this.state.createOptionClicked ? "navbar-option-dropdown-unrotated navbar-option-dropdown-rotated" : "navbar-option-dropdown-unrotated"} src={this.state.createOptionClicked ? "/assets/dashboard-down-arrow-color2.png" : "/assets/dashboard-down-arrow.png"}/>
                                    </div>
                                </div>
                                <CSSTransition
                                in={this.state.showCreateSuboptions}
                                timeout={{enter: 500, exit: 500}}
                                classNames="dialog-slide-down"
                                unmountOnExit
                                >
                                    <div className="dashboard-option-subs">
                                        <div  className="dashboard-option-sub-connector">
                                            <div style={{paddingBottom: "440%"}} className="dashboard-option-sub-connector-line"><span style={{color: "transparent", cursor: "default"}}>|</span></div>
                                        </div>
                                        <div className="dashboard-option-sub-text">
                                            <div 
                                            onMouseEnter={this.createSub1Enter}
                                            onMouseLeave={this.createSub1Leave}
                                            onClick={this.createSub1OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub1Hovered ? this.state.createSub1Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub1Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub1Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub1Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub1Clicked ? "bold" : ""}}>Split Video</p>
                                                {this.state.showCreateSub1Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub1Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.createSub2Enter}
                                            onMouseLeave={this.createSub2Leave}
                                            onClick={this.createSub2OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub2Hovered ? this.state.createSub2Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub2Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub2Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub2Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub2Clicked ? "bold" : ""}}>Story Video</p>
                                                {this.state.showCreateSub2Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub2Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.createSub3Enter}
                                            onMouseLeave={this.createSub3Leave}
                                            onClick={this.createSub3OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub3Hovered ? this.state.createSub3Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub3Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub3Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub3Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub3Clicked ? "bold" : ""}}>Texts Video</p>
                                                {this.state.showCreateSub3Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub3Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.createSub4Enter}
                                            onMouseLeave={this.createSub4Leave}
                                            onClick={this.createSub4OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub4Hovered ? this.state.createSub4Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub4Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub4Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub4Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub4Clicked ? "bold" : ""}}>Blur Video</p>
                                                {this.state.showCreateSub4Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub4Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.createSub5Enter}
                                            onMouseLeave={this.createSub5Leave}
                                            onClick={this.createSub5OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub5Hovered ? this.state.createSub5Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub5Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub5Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub5Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub5Clicked ? "bold" : ""}}>ChatGPT Video</p>
                                                {this.state.showCreateSub5Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub5Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.createSub6Enter}
                                            onMouseLeave={this.createSub6Leave}
                                            onClick={this.createSub6OptionClicked}
                                            style={{border: `1px solid ${this.state.createSub6Hovered ? this.state.createSub6Clicked ? "#1c4c75" : "#707a9f" : this.state.createSub6Clicked ? "#1c4c75" : "transparent"}`, color: this.state.createSub6Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.createSub6Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.createSub6Clicked ? "bold" : ""}}>Voiceover Video</p>
                                                {this.state.showCreateSub6Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showCreateSub6Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>

                                <div 
                                onMouseEnter={this.toolsOptionEnter}
                                onMouseLeave={this.toolsOptionLeave}
                                onClick={this.toolsNavOptionClicked}
                                style={{border: `1px solid ${this.state.toolsOptionHovered ? this.state.toolsOptionClicked || this.state.toolsSubActive !== "" ? "#1c4c75" : "#707a9f" : this.state.toolsOptionClicked || this.state.toolsSubActive !== "" ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.toolsOptionClicked ? "#E0F4FC" : "", marginTop: "3%"}}
                                className="navbar-option-cell">
                                    <div className="navbar-option-icon">
                                        <img src={this.state.toolsOptionHovered || this.state.toolsOptionClicked ? "/assets/tools-option-icon-color2.png" : "/assets/tools-option-icon.png"}/>
                                    </div>
                                    <div className="navbar-option-text">
                                        <p style={{color: this.state.toolsOptionHovered || this.state.toolsOptionClicked ? "#1c4c75" : "", fontWeight: this.state.toolsOptionClicked ? "bold" : "", marginBottom: (!this.state.toolsOptionClicked && (this.state.toolsSub1Clicked || this.state.toolsSub2Clicked || this.state.toolsSub3Clicked || this.state.toolsSub4Clicked || this.state.toolsSub5Clicked || this.state.toolsSub6Clicked)) ? "0px" : ""}}>Tools</p>
                                        {(!this.state.toolsOptionClicked && (this.state.toolsSub1Clicked || this.state.toolsSub2Clicked || this.state.toolsSub3Clicked || this.state.toolsSub4Clicked || this.state.toolsSub5Clicked || this.state.toolsSub6Clicked)) && 
                                            <div className="active-sub-option">
                                                <p><span style={{color: "#41A75B"}}>ACTIVE: </span>{this.state.toolsSubActive}</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="navbar-option-dropdown">
                                        <img className={this.state.toolsOptionClicked ? "navbar-option-dropdown-unrotated navbar-option-dropdown-rotated" : "navbar-option-dropdown-unrotated"} src={this.state.toolsOptionClicked ? "/assets/dashboard-down-arrow-color2.png" : "/assets/dashboard-down-arrow.png"}/>
                                    </div>
                                </div>
                                <CSSTransition
                                in={this.state.showToolsSuboptions}
                                timeout={{enter: 500, exit: 500}}
                                classNames="dialog-slide-down"
                                unmountOnExit
                                >
                                    <div className="dashboard-option-subs">
                                        <div  className="dashboard-option-sub-connector">
                                            <div style={{paddingBottom: "440%"}} className="dashboard-option-sub-connector-line"><span style={{color: "transparent", cursor: "default"}}>|</span></div>
                                        </div>
                                        <div className="dashboard-option-sub-text">
                                            <div 
                                            onMouseEnter={this.toolsSub1Enter}
                                            onMouseLeave={this.toolsSub1Leave}
                                            onClick={this.toolsSub1OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub1Hovered ? this.state.toolsSub1Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub1Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub1Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub1Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub1Clicked ? "bold" : ""}}>AI Images</p>
                                                {this.state.showToolsSub1Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub1Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.toolsSub2Enter}
                                            onMouseLeave={this.toolsSub2Leave}
                                            onClick={this.toolsSub2OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub2Hovered ? this.state.toolsSub2Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub2Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub2Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub2Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub2Clicked ? "bold" : ""}}>AI Voiceover</p>
                                                {this.state.showToolsSub2Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub2Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.toolsSub3Enter}
                                            onMouseLeave={this.toolsSub3Leave}
                                            onClick={this.toolsSub3OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub3Hovered ? this.state.toolsSub3Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub3Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub3Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub3Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub3Clicked ? "bold" : ""}}>AI Avatars</p>
                                                {this.state.showToolsSub3Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub3Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.toolsSub4Enter}
                                            onMouseLeave={this.toolsSub4Leave}
                                            onClick={this.toolsSub4OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub4Hovered ? this.state.toolsSub4Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub4Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub4Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub4Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub4Clicked ? "bold" : ""}}>AI Brainstorm</p>
                                                {this.state.showToolsSub4Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub4Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.toolsSub5Enter}
                                            onMouseLeave={this.toolsSub5Leave}
                                            onClick={this.toolsSub5OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub5Hovered ? this.state.toolsSub5Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub5Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub5Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub5Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub5Clicked ? "bold" : ""}}>YT Downloader</p>
                                                {this.state.showToolsSub5Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub5Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.toolsSub6Enter}
                                            onMouseLeave={this.toolsSub6Leave}
                                            onClick={this.toolsSub6OptionClicked}
                                            style={{border: `1px solid ${this.state.toolsSub6Hovered ? this.state.toolsSub6Clicked ? "#1c4c75" : "#707a9f" : this.state.toolsSub6Clicked ? "#1c4c75" : "transparent"}`, color: this.state.toolsSub6Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.toolsSub6Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.toolsSub6Clicked ? "bold" : ""}}>TikTok Downloader</p>
                                                {this.state.showToolsSub6Loading && 
                                                    <span style={{marginRight: "5%", marginTop: "4.5%"}}>
                                                        <ClipLoader
                                                        color="#1c4c75"
                                                        loading={true}
                                                        size={6}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                        />
                                                    </span>
                                                }
                                                {this.state.showToolsSub6Loaded && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-open.png"/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>

                                <div 
                                onMouseEnter={this.moreOptionEnter}
                                onMouseLeave={this.moreOptionLeave}
                                onClick={this.moreNavOptionClicked}
                                style={{border: `1px solid ${this.state.moreOptionHovered ? this.state.moreOptionClicked || this.state.moreSubActive !== "" ? "#1c4c75" : "#707a9f" : this.state.moreOptionClicked || this.state.moreSubActive !== "" ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.moreOptionClicked ? "#E0F4FC" : "", marginTop: "3%"}} className="navbar-option-cell">
                                    <div className="navbar-option-icon">
                                        <img src={this.state.moreOptionHovered || this.state.moreOptionClicked ? "/assets/more-option-icon-color.png" : "/assets/more-option-icon.png"}/>
                                    </div>
                                    <div className="navbar-option-text">
                                        <p style={{color: this.state.moreOptionHovered || this.state.moreOptionClicked ? "#1c4c75" : "", fontWeight: this.state.moreOptionClicked ? "bold" : "", marginBottom: (!this.state.moreOptionClicked && (this.state.moreSub1Clicked || this.state.moreSub2Clicked)) ? "0px" : ""}}>More</p>
                                        {(!this.state.moreOptionClicked && (this.state.moreSub1Clicked || this.state.moreSub2Clicked)) && 
                                            <div className="active-sub-option">
                                                <p><span style={{color: "#41A75B"}}>OPENED: </span>{this.state.moreSubActive}</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="navbar-option-dropdown">
                                        <img className={this.state.moreOptionClicked ? "navbar-option-dropdown-unrotated navbar-option-dropdown-rotated" : "navbar-option-dropdown-unrotated"} src={this.state.moreOptionClicked ? "/assets/dashboard-down-arrow-color2.png" : "/assets/dashboard-down-arrow.png"}/>
                                    </div>
                                </div>
                                <CSSTransition
                                in={this.state.showMoreSuboptions}
                                timeout={{enter: 500, exit: 500}}
                                classNames="dialog-slide-down"
                                unmountOnExit
                                >
                                    <div className="dashboard-option-subs">
                                        <div className="dashboard-option-sub-connector">
                                            <div style={{paddingBottom: "110%"}} className="dashboard-option-sub-connector-line"><span style={{color: "transparent", cursor: "default"}}>|</span></div>
                                        </div>
                                        <div className="dashboard-option-sub-text">
                                            <div 
                                            onMouseEnter={this.moreSub1Enter}
                                            onMouseLeave={this.moreSub1Leave}
                                            onClick={this.moreSub1OptionClicked}
                                            style={{border: `1px solid ${this.state.moreSub1Hovered ? this.state.moreSub1Clicked ? "#1c4c75" : "#707a9f" : this.state.moreSub1Clicked ? "#1c4c75" : "transparent"}`, color: this.state.moreSub1Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.moreSub1Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.moreSub1Clicked ? "bold" : ""}}>Our Affiliate Program</p>
                                                
                                                {true && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-link.png"/>
                                                }
                                            </div>
                                            <div 
                                            onMouseEnter={this.moreSub2Enter}
                                            onMouseLeave={this.moreSub2Leave}
                                            onClick={this.moreSub2OptionClicked}
                                            style={{border: `1px solid ${this.state.moreSub2Hovered ? this.state.moreSub2Clicked ? "#1c4c75" : "#707a9f" : this.state.moreSub2Clicked ? "#1c4c75" : "transparent"}`, color: this.state.moreSub2Clicked ? "#1c4c75" : "#6a6a6a", backgroundColor: this.state.moreSub2Clicked ? "#E0F4FC" : "transparent", display: "flex", justifyContent: "space-between"}}>
                                                <p style={{fontWeight: this.state.moreSub2Clicked ? "bold" : ""}}>Join the Discord</p>
                                               
                                                {true && 
                                                    <img style={{height: "7%", width: "7%", marginRight: "4%", marginTop: "6%"}} src="/assets/dashboard-sub-option-link.png"/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>

                                <div className="left-pane-footer">
                                    <div className="left-pane-footer-left">
                                        
                                    </div>
                                    <div className="left-pane-footer-right">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                    in={this.state.showShrankLeftPane}
                    timeout={{enter: 1000, exit: 0}}
                    classNames="dialog-slide-left"
                    unmountOnExit
                    >
                        <div className="shrank-left-pane-container">
                            <div className="shrank-left-pane-header">
                                <img
                                onMouseEnter={this.collapseNavbarEnter}
                                onMouseLeave={this.collapseNavbarLeave}
                                onClick={this.collapseNavbarClicked}
                                src={this.state.collapseNavbarHovered ? "/assets/shrink-navbar-icon-color.png" : "/assets/shrink-navbar-icon.png"}/>
                            </div>
                            <div className="shrank-navbar-options">
                                <div 
                                onMouseEnter={this.shrankDashboardEnter}
                                onMouseLeave={this.shrankDashboardLeave}
                                onClick={this.shrankDashboardOptionClicked}
                                style={{border: `1px solid ${this.state.shrankDashboardOptionHovered ? this.state.dashboardOptionClicked  ? "#1c4c75" : "#707a9f" : this.state.dashboardOptionClicked ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.shrankDashboardOptionHovered || this.state.dashboardOptionClicked ? "#E0F4FC" : "transparent"}}
                                className="shrank-navbar-option">
                                    <img
                                    src={this.state.shrankDashboardOptionHovered || this.state.dashboardOptionClicked ? "/assets/dashboard-option-icon-color2.png" : "/assets/dashboard-option-icon.png"}/>
                                    <p style={{fontWeight: "bold", color: this.state.shrankDashboardOptionHovered || this.state.dashboardOptionClicked ? "#1c4c75" : "#707a9f"}}>Dashboard</p>
                                </div>
                                <div 
                                onMouseEnter={this.shrankCreateEnter}
                                onMouseLeave={this.shrankCreateLeave}
                                onClick={this.shrankCreateOptionClicked}
                                style={{marginTop: "20%", border: `1px solid ${this.state.shrankCreateOptionHovered ? this.state.createOptionClicked  ? "#1c4c75" : "#707a9f" : this.state.createOptionClicked ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.shrankCreateOptionHovered || this.state.createOptionClicked ? "#E0F4FC" : "transparent"}} className="shrank-navbar-option">
                                    <img
                                    src={this.state.shrankCreateOptionHovered || this.state.createOptionClicked ? "/assets/create-option-icon-color2.png" : "/assets/create-option-icon.png"}/>
                                    <p style={{fontWeight: "bold", color: this.state.shrankCreateOptionHovered || this.state.createOptionClicked ? "#1c4c75" : "#707a9f"}}>Create</p>
                                </div>
                                <div 
                                onMouseEnter={this.shrankToolsEnter}
                                onMouseLeave={this.shrankToolsLeave}
                                onClick={this.shrankToolsOptionClicked}
                                style={{marginTop: "20%", border: `1px solid ${this.state.shrankToolsOptionHovered ? this.state.toolsOptionClicked  ? "#1c4c75" : "#707a9f" : this.state.toolsOptionClicked ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.shrankToolsOptionHovered || this.state.toolsOptionClicked ? "#E0F4FC" : "transparent"}} className="shrank-navbar-option">
                                    <img
                                    src={this.state.shrankToolsOptionHovered || this.state.toolsOptionClicked ? "/assets/tools-option-icon-color2.png" : "/assets/tools-option-icon.png"}/>
                                    <p style={{fontWeight: "bold", color: this.state.shrankToolsOptionHovered || this.state.toolsOptionClicked ? "#1c4c75" : "#707a9f"}}>Tools</p>
                                </div>
                                <div 
                                onMouseEnter={this.shrankMoreEnter}
                                onMouseLeave={this.shrankMoreLeave}
                                onClick={this.shrankMoreOptionClicked}
                                style={{marginTop: "20%", border: `1px solid ${this.state.shrankMoreOptionHovered ? this.state.moreOptionClicked  ? "#1c4c75" : "#707a9f" : this.state.moreOptionClicked ? "#1c4c75" : "transparent"}`, backgroundColor: this.state.shrankMoreOptionHovered || this.state.moreOptionClicked ? "#E0F4FC" : "transparent"}} className="shrank-navbar-option">
                                    <img
                                    src={this.state.shrankMoreOptionHovered || this.state.moreOptionClicked ? "/assets/more-option-icon-color.png" : "/assets/more-option-icon.png"}/>
                                    <p style={{fontWeight: "bold", color: this.state.shrankMoreOptionHovered || this.state.moreOptionClicked ? "#1c4c75" : "#707a9f"}}>More</p>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div style={{width: this.state.leftPaneMinimized ? "90.5%" : "78%"}} className="right-pane">

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
                                <div style={{paddingTop: this.state.leftPaneMinimized ? "2.35%" : "", paddingBottom: this.state.leftPaneMinimized ? "3.35%" : ""}} className="top-pane-btn-2">
                                    <div>
                                        <label>Upgrade</label>
                                    </div>
                                </div>
                                <div style={{backgroundColor: this.state.userNameBgColor, color: this.state.userNameTxtColor, border: `1px solid ${this.state.userNameBgColor}`, paddingTop: this.state.leftPaneMinimized ? "2.35%" : "", paddingBottom: this.state.leftPaneMinimized ? "3.35%" : ""}} className="top-pane-btn-3">
                                    <h1>N</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* - - SECTION 1 - -  */}

                    <div className="welcome-header">
                        <div className="welcome-header-left">
                            <h3 style={{marginTop: this.state.leftPaneMinimized ? "0.5%" : ""}}>Welcome back Norman,</h3>
                        </div>
                        <div className="welcome-header-right">
                            <button
                            style={{marginTop: this.state.leftPaneMinimized ? "4.5%" : "14.5%", backgroundColor: this.state.versionButtonHovered || this.state.version1ButtonClicked ? "#2890b9" : "white", fontWeight: this.state.versionButtonHovered || this.state.version1ButtonClicked ? "bold" : "", color: this.state.versionButtonHovered || this.state.version1ButtonClicked ? this.state.versionButtonText === "OFF" || this.state.version1ButtonClicked ? "white" : "" : this.state.versionButtonText === "OFF" ? "black" : "", border: `1px solid ${this.state.versionButtonText === "OFF" ? "#707A9F" : "#2890b9"}`}}
                            onMouseEnter={this.versionButtonEnter}
                            onMouseLeave={this.versionButtonLeave}
                            onClick={this.versionButtonOptionClicked}
                            >Version 2: {this.state.versionButtonText}</button>
                        </div>     
                    </div>
                    <div className="right-pane-section-1">
                        {this.state.showVersion1Sec1Window1 && 
                            <div className="rp-sec1-left-parent">
                                <h1><span style={{color: "#2890b9"}}>Create</span> your first short-form piece of content</h1>
                                <p>Generate short-form content using AI.</p>
                                <div className="window1-bottom-section">
                                    <div className="window1-bottom-left">
                                        <button 
                                        style={{width: this.state.startCreatingBtnWidth, fontSize: this.state.startCreatingBtnFontSize, marginTop: this.state.leftPaneMinimized ? "39%" : ""}}
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
                                            <img className="levitate" style={{width: this.state.leftPaneMinimized ? "60%" : "67%", float: "right", marginTop: this.state.leftPaneMinimized ? "6.5%" : "9%"}} src="/assets/iphone-pic.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {this.state.showVersion2Sec1Window1 && 
                            <div className="rp-sec1-left-parent">
                                <div className="continue-window-1">
                                    <div className="tutorial-header">
                                        <div className="tutorial-header-left">
                                            <h2>Continue Creating</h2>
                                            <p>Finish creating your latest content masterpiece.</p>
                                        </div>
                                        <div className="tutorial-header-right">
                                            <img style={{paddingTop: "3%"}} src="/assets/continue-session-pic.png"/>
                                        </div>
                                    </div> 
                                    <div style={{borderBottom: "1px solid #8a8a8a", marginLeft: "4%", marginRight: "4%", marginTop: "3.5%"}}></div>
                                    <div className="continue-session-items">
                                        <div 
                                        onMouseEnter={this.latestProject1Enter}
                                        onMouseLeave={this.latestProject1Leave}
                                        style={{border: this.state.latestProject1Hovered ? "1.2px solid #2890b9" : "1px solid #8a8a8a", borderBottom: this.state.latestProject1Hovered ? "5px solid #2890b9" : "5px solid #8a8a8a"}}
                                        className="continue-session-item">
                                            <div className="continue-session-item-left">
                                                <img src={this.state.latestProject1Hovered ? "/assets/continue-session-video3-animated.gif" : "/assets/continue-session-video3-still.png"}/>
                                            </div>
                                            <div className="continue-session-item-right">
                                                <h5>ChatGPT Video Tester</h5>
                                                <div className="session-item-details">
                                                    <div className="session-item-details-left">
                                                        <span style={{backgroundColor: this.state.latestProject1Hovered ? "#2890b9" : "#8a8a8a"}}>ChatGPT Video</span>
                                                    </div>
                                                    <div className="session-item-details-right">
                                                        <p><span style={{color: "#2890b9"}}>Last edited:</span> 18:02pm 08/05/24</p>
                                                    </div>
                                                </div>
                                                <label style={{textAlign: "left"}}>Testing the cgpt vid feature. Generated moving neon grid floor, a likes counter and morphing shape.</label>
                                            </div>
                                        </div>
                                        <div 
                                        onMouseEnter={this.latestProject2Enter}
                                        onMouseLeave={this.latestProject2Leave}
                                        style={{border: this.state.latestProject2Hovered ? "1.2px solid #2890b9" : "1px solid #8a8a8a", borderBottom: this.state.latestProject2Hovered ? "5px solid #2890b9" : "5px solid #8a8a8a"}}
                                        className="continue-session-item">
                                            <div className="continue-session-item-left">
                                                <img src={this.state.latestProject2Hovered ? "/assets/continue-session-video2-animated.gif" : "/assets/continue-session-video2-still.png"}/>
                                            </div>
                                            <div className="continue-session-item-right">
                                                <h5>tiktok for Jenny</h5>
                                                <div className="session-item-details">
                                                    <div className="session-item-details-left">
                                                        <span style={{backgroundColor: this.state.latestProject2Hovered ? "#2890b9" : "#8a8a8a"}}>Split Video</span>
                                                    </div>
                                                    <div className="session-item-details-right">
                                                        <p><span style={{color: "#2890b9"}}>Last edited:</span> 11:35am 08/05/24</p>
                                                    </div>
                                                </div>
                                                <label style={{textAlign: "left"}}>Second post for jenny's new account. DEADLINE: 08/10 3pm (latest).</label>
                                            </div>
                                        </div>
                                        <div 
                                        onMouseEnter={this.latestProject3Enter}
                                        onMouseLeave={this.latestProject3Leave}
                                        style={{border: this.state.latestProject3Hovered ? "1.2px solid #2890b9" : "1px solid #8a8a8a", borderBottom: this.state.latestProject3Hovered ? "5px solid #2890b9" : "5px solid #8a8a8a"}}
                                        className="continue-session-item">
                                            <div className="continue-session-item-left">
                                                <img src={this.state.latestProject3Hovered ? "/assets/continue-session-video-animated.gif" : "/assets/continue-session-video-still.png"}/>
                                            </div>
                                            <div className="continue-session-item-right">
                                                <h5>day in the life draft</h5>
                                                <div className="session-item-details">
                                                    <div className="session-item-details-left">
                                                        <span style={{backgroundColor: this.state.latestProject3Hovered ? "#2890b9" : "#8a8a8a"}}>Voiceover Video</span>
                                                    </div>
                                                    <div className="session-item-details-right">
                                                        <p><span style={{color: "#2890b9"}}>Last edited:</span> 02:09am 08/03/24</p>
                                                    </div>
                                                </div>
                                                <label style={{textAlign: "left"}}>my first draft for my day in the life vid. </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="rp-sec1-mid-parent">
                            <div className="tutorial-header">
                                <div className="tutorial-header-left">
                                    <h2>Video Guides</h2>
                                    <p>Watch our video guides to learn how you can get the most out of Crayo.</p>
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
                                            <h5 style={{color: this.state.popularApp1Hovered ? "#2890b9" : ""}}>Splitscreen Video</h5>
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
                                            <h5 style={{color: this.state.popularApp2Hovered ? "#2890b9" : ""}}>Fake Texts Video</h5>
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
                                            <h5 style={{color: this.state.popularApp3Hovered ? "#2890b9" : ""}}>AI Avatars</h5>
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
                                            <h5 style={{color: this.state.popularApp4Hovered ? "#2890b9" : ""}}>Voiceover Story</h5>
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
                                            <h5 style={{color: this.state.popularApp5Hovered ? "#2890b9" : ""}}>Download YouTube Videos</h5>
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
                                            <h5 style={{color: this.state.popularApp6Hovered ? "#2890b9" : ""}}>All Apps</h5>
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
                            {this.state.showProjectsPlaceholder && 
                                <div className="projects-placeholder">
                                    <img src="/assets/projects-placeholder.png"/>
                                    <p>No existing projects.</p>
                                </div>
                            }
                            {this.state.showProjectsList && 
                                <div className="projects-placeholder">

                                    {/* - - TABLE HEADER - -  */}
                                    
                                    <div className="project-list-header">
                                        <div className="project-list-header-1">
                                            <img onClick={this.selectAllProjects} src="/assets/projects-empty-checkbox-header.png"/>
                                        </div>
                                        <div className="project-list-header-2">
                                            <h5>Project name</h5>
                                        </div>
                                        <div className="project-list-header-3">
                                            <h5>Content Type</h5>
                                        </div>
                                        <div className="project-list-header-4">
                                            <h5>Last edited</h5>
                                        </div>
                                    </div>

                                        {/* - - TABLE BODY - -  */}
                                    <div className="project-list-body">
                                        <div 
                                        onMouseEnter={this.project1ListEnter}
                                        onMouseLeave={this.project1ListLeave}
                                        onClick={this.project1ListClicked}
                                        style={{backgroundColor: this.state.project1Hovered || this.state.project1Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project1Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>ChatGPT Video Tester</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>ChatGPT Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>18:02pm 08/05/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project2ListEnter}
                                        onMouseLeave={this.project2ListLeave}
                                        onClick={this.project2ListClicked}
                                        style={{backgroundColor: this.state.project2Hovered || this.state.project2Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project2Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>tiktok for Jenny</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Split Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>11:35pm 08/05/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project3ListEnter}
                                        onMouseLeave={this.project3ListLeave}
                                        onClick={this.project3ListClicked}
                                        style={{backgroundColor: this.state.project3Hovered || this.state.project3Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project3Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>day in the life draft</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Voiceover Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>02:09am 08/03/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project4ListEnter}
                                        onMouseLeave={this.project4ListLeave}
                                        onClick={this.project4ListClicked}
                                        style={{backgroundColor: this.state.project4Hovered || this.state.project4Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project4Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>voiceover testing 3</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Voiceover Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>00:18am 08/03/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project5ListEnter}
                                        onMouseLeave={this.project5ListLeave}
                                        onClick={this.project5ListClicked}
                                        style={{backgroundColor: this.state.project5Hovered || this.state.project5Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project5Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>voiceover testing 2</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Voiceover Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>23:50pm 08/02/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project6ListEnter}
                                        onMouseLeave={this.project6ListLeave}
                                        onClick={this.project6ListClicked}
                                        style={{backgroundColor: this.state.project6Hovered || this.state.project6Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project6Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>voiceover testing 1</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Voiceover Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>23:33pm 08/02/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project7ListEnter}
                                        onMouseLeave={this.project7ListLeave}
                                        onClick={this.project7ListClicked}
                                        style={{backgroundColor: this.state.project7Hovered || this.state.project7Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project7Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>blur vid sample</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Blur Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>16:28pm 07/31/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project8ListEnter}
                                        onMouseLeave={this.project8ListLeave}
                                        onClick={this.project8ListClicked}
                                        style={{backgroundColor: this.state.project8Hovered || this.state.project8Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project8Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>My morning routine</h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>Split Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>15:19pm 07/31/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project9ListEnter}
                                        onMouseLeave={this.project9ListLeave}
                                        onClick={this.project9ListClicked}
                                        style={{backgroundColor: this.state.project9Hovered || this.state.project9Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project9Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>Chatgpt NEW tester </h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>ChatGPT Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>20:45pm 07/30/24</h5>
                                            </div>
                                        </div>

                                        <div 
                                        onMouseEnter={this.project10ListEnter}
                                        onMouseLeave={this.project10ListLeave}
                                        onClick={this.project10ListClicked}
                                        style={{backgroundColor: this.state.project10Hovered || this.state.project10Clicked ? "#eef7fd" : ""}}
                                        className="project-list-cell">
                                            <div className="project-list-cell-1">
                                                <img src={this.state.project10Clicked ? "/assets/projects-checked-checkbox.png" : "/assets/projects-empty-checkbox.png"}/>
                                            </div>
                                            <div className="project-list-cell-2">
                                                <h5>Chatgpt tester </h5>
                                            </div>
                                            <div className="project-list-cell-3">
                                                <h5>ChatGPT Video</h5>
                                            </div>
                                            <div className="project-list-cell-4">
                                                <h5>19:40pm 07/30/24</h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                        <div className="rp-sec2-right-parent">
                            <div className="examples-header">
                                <div className="examples-header-left">
                                    <h2>Crayo Content Samples</h2>
                                    <p>See how solo creators and brands are using Crayo.</p>
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
                                            <div style={{marginLeft: "0%"}} className="creator-profile-col">
                                                <div className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(1)}
                                                    onMouseLeave={() => this.creatorCardLeave(1)}
                                                    style={{border: `1px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator1Hovered ? "#2890b9" : "#8a8a8a"}`}} className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator1Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-17.png"/>
                                                        <h5>The U.M</h5>
                                                        <p>5m followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(5)}
                                                    onMouseLeave={() => this.creatorCardLeave(5)}
                                                    style={{border: `1px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator5Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator5Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-18.png"/>
                                                        <h5>STEM Labs</h5>
                                                        <p>900k followers</p>
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
                                                        <img style={{border: this.state.creator2Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-19.png"/>
                                                        <h5>Not Geo</h5>
                                                        <p>12m followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(6)}
                                                    onMouseLeave={() => this.creatorCardLeave(6)}
                                                    style={{border: `1px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator6Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator6Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-20.png"/>
                                                        <h5>Moon Link</h5>
                                                        <p>3.6m followers</p>
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
                                                        <img style={{border: this.state.creator3Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-21.png"/>
                                                        <h5>NOSO</h5>
                                                        <p>18m followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div
                                                    onMouseEnter={() => this.creatorCardEnter(7)}
                                                    onMouseLeave={() => this.creatorCardLeave(7)}
                                                    style={{border: `1px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator7Hovered ? "#2890b9" : "#8a8a8a"}`}} 
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator7Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-22.png"/>
                                                        <h5>NGN</h5>
                                                        <p>1.8m followers</p>
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
                                                        <img style={{border: this.state.creator4Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-23.png"/>
                                                        <h5>NBU</h5>
                                                        <p>13m followers</p>
                                                    </div>
                                                </div>
                                                <div style={{marginTop: "5%"}} className="creator-profile-cell">
                                                    <div 
                                                    onMouseEnter={() => this.creatorCardEnter(8)}
                                                    onMouseLeave={() => this.creatorCardLeave(8)}
                                                    style={{border: `1px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`, borderBottom: `5px solid ${this.state.creator8Hovered ? "#2890b9" : "#8a8a8a"}`}}
                                                    className="creator-profile-cell-bg">
                                                        <img style={{border: this.state.creator8Hovered ? `1px solid #2890b9` : `1px solid #8a8a8a`}} src="/assets/creator-24.png"/>
                                                        <h5>Metflics</h5>
                                                        <p>22m followers</p>
                                                    </div>
                                                </div>
                                            </div>
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