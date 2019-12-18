import React, { Component } from 'react'
import Link from 'next/link';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <div className="container">
                        <a href="#" class="brand-logo">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><Link href="/"><a>Page 1</a></Link></li>
                            <li><Link href="/detail"><a>Page 2</a></Link></li>
                            <li><Link href="/edit"><a>Page 3</a></Link></li>
                        </ul>
                    </div>
                </div>
          </nav>
        )
    }
}
export default Navbar;