import React, {Component} from "react";
import styled from "styled-components";
import MediaQuery from 'react-responsive';

const Styles = styled.div `

        // - - - - FULL PAGE - - - - //

.full-page { 
    height: 100vh;
    width: 100%;
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
    width: 75%;
    text-align: left;
}

.right-pane-header-right {
    float: left;
    width: 75%;
    text-align: left;
}

    //! - - SEARCH BAR - - //

.right-pane-header-left input {
    width: 100%;
}


`

export default class Dashboard extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

        //* - - DESKTOP SCREENS - - *//

    desktop5Render = () => {
        return (
            <div className="full-page">
                <div className="left-pane">
                    <p>test</p>
                </div>
                <div className="right-pane">
                    <div className="right-pane-header">
                        <div className="right-pane-header-left">
                            <input
                            placeholder="Search..."
                            />
                            <h2>wth?</h2>
                        </div>
                        <div className="right-pane-header-right">

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