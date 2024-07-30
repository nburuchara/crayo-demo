import React, {Component} from "react";
import styled from "styled-components";
import MediaQuery from 'react-responsive';

import SearchTerms from './dash-helper-files/Search-Terms'

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
    width: 70%;
    text-align: left;
}

.right-pane-header-right {
    float: left;
    width: 30%;
    text-align: left;
}

    //! - - Search Bar - - //

    // - - SEARCH INPUT - - //

.right-pane-header-left input {
    width: 100%;
    font-family: roboto;
    padding: 1%;
    border-radius: 5px;
}

.right-pane-header-left input:focus {
    outline: 1px solid #898bf7;
}

    // - - SEARCH RESULTS - - //

.searchResults {
    overflow-y: auto;
    width: 100%;
    position: relative;
    background-color: white;
    height: 100%;
    border: 1px solid #cccccc;
    border-radius: 7px;
    // border-bottom-right-radius: 7px;
    padding: 0.5%;
    margin-top: 1.5%;
}

    // - SEARCH RESULT CELL - //

.searchResultCell {
    text-align: left;
    padding-left: 0.5%;
    padding-right: 0.5%;
    margin-top: 0%;
    padding-bottom: 0px;
    border-radius: 5px;
    cursor: pointer;
}

.searchResultCell p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: roboto;
    // margin-bottom: 
}

.searchResultOption {
    padding-top: 1%;
    margin-bottom: 0px;
    font-size: 80.5%;
    overflow: hidden;          /* Hide the overflowing text */
    display: -webkit-box;      /* Use the flexible box layout */
    -webkit-box-orient: vertical; /* Set the box orientation to vertical */
    -webkit-line-clamp: 2;     /* Number of lines to show before truncating */
    line-clamp: 2;             /* Standard property for other browsers (future-proof) */
    // line-height: 1.5em; 
}

.searchResultCategory {
    font-size: 72%;
    padding-bottom: 1%;
    cursor: pointer;
}

.searchResultCell:hover,
.codeSnippetResult:hover {
  background-color: #F0F1FF;
  color: #1C1C8E;
}


`

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
            //* - - SEARCH BAR - - *//
            searchedData: "",
            searchBarBorderColor: "#dedede"
        }

            //* - TRIE NODE (for search functionality) - *//

        this.trie = new Trie(); // Initialize the trie
    }

        //* - - PROGRAM FUNCTIONS - - *//

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
                    <span style={{ fontWeight: "bold", color: "#2e2eff" }}>
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

        //* - - DESKTOP SCREENS - - *//

    desktop5Render = () => {

        //* - POPUP SEARCH BAR VARS - *//
        const { isSearchLoading, groupedOptions, resultsFound, hoveredResultId} = this.state;
        const searchInput = this.state.searchedData.trim().toLowerCase();

        return (
            <div className="full-page">
                <div className="left-pane">
                    <p>test</p>
                </div>
                <div className="right-pane">
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
                                            <div style={{borderBottom: "1px solid #ccc", paddingTop: "0%", paddingBottom: "2.5%"}} key={category}>
                                                {options.map(option => (
                                                    <div>
                                                        <div 
                                                        onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                        className='searchResultCell' 
                                                        key={option.id}>
                                                            <p className='searchResultOption'>{option.highlightedName}</p>
                                                            <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </p> 
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                    {!isSearchLoading && !resultsFound && 
                                        <div style={{height: "20%"}}>
                                            <p>no results found</p>
                                        </div>
                                    }
                                </div>
                            )}
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