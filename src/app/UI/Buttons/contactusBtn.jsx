"use client"
import React from 'react';
import styled from 'styled-components';

const ContactUsButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button__icon-wrapper">
          <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
        </span>
        Contact Us
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --clr: #007bff;
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: 1px solid black;
    cursor: pointer;
    align-items: center;
    gap: 0.5rem;
    background-color: #fff;
    color: black;
    border-radius: 10rem;
    font-weight: 300;
    padding: 0.5rem 1.5rem;
    padding-left: 10px;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 35px;
    height: 35px;
    position: relative;
    color: black;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
    background-color: var(--clr);
    color: white;
  }

  .button:hover .button__icon-wrapper {
    color: black;
    background-color: #fff;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  /* Responsive part */
  @media (max-width: 768px) {
    .button {
      padding: 0.4rem 1rem;
      font-size: 1rem;
    }

    .button__icon-wrapper {
      width: 30px;
      height: 30px;
    }

    .button__icon-svg {
      width: 8px;
    }
  }

  @media (max-width: 480px) {
    .button {
      padding: 0.3rem 0.8rem;
      font-size: 0.9rem;
    }

    .button__icon-wrapper {
      width: 26px;
      height: 26px;
    }

    .button__icon-svg {
      width: 7px;
    }
  }
`;

export default ContactUsButton;
