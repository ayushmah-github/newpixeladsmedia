import React from 'react';
import './Page5.css';

const Page5 = () => {
    return (
        <div class="container">
            <div class="left-section">
                <div alt="World map with highlighted locations" class="map">
                </div>
                <div class="quote-box">
                    <img alt="Profile picture of Henry Ford" height="50" src="https://storage.googleapis.com/a1aa/image/iUIMKVEfVNWed0BefFhH6qGaSA4GUZlRwYebIFBUicf4tAO7E.jpg" width="50" />
                    <div class="text">
                        <p>
                            "Stopping advertising to save money is like stopping your watch to save time"
                        </p>
                        <span class="name">
                            Henry Ford
                        </span>
                        <span class="title">
                            FORD
                        </span>
                    </div>
                </div>
            </div>
            <div class="right-section">
                <h1>
                    Who we Are ?
                </h1>
                <p>
                    We are a team of industry specialists with expertise in social media marketing, content marketing, offline marketing, video production &amp; digital transformation. Our staff has worked with a diverse range of international and renowned industries, including retail, luxury brands, government, hospitality, education &amp; healthcare.
                </p>
                <a class="contact-button" href="#">
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default Page5;