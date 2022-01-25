/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React from 'react';
 import styled from 'styled-components';
 
 const SearchboxWrapper = styled.div`
    position: relative;
 `;

 const InputboxWrapper = styled.input`
    border: 1px solid white;
    background: transparent;
    border-radius: 5em;
    width: 100%;
    height: 3em;
    font-size: 20px;
    padding: 0 2em;
    color: white;
 `;
 const ButtonboxWrapper = styled.button`
    background: #FFDD9B;
    color: #AB270B;
    border: 0;
    border-radius: 2em;
    padding: 0.4em 1.5em;
    position: absolute;
    right: 0.2em;
    top: 0.2em;
    font-size: 22px;
 `;
 
  export default function Searchbox() {
    return (
      <SearchboxWrapper>
        <InputboxWrapper></InputboxWrapper>
        <ButtonboxWrapper>复制</ButtonboxWrapper>
      </SearchboxWrapper>
    );
  } 