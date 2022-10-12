import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Pro Quiz</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        {/* <li>
                            <Link to='/quiz'>Quiz</Link>
                        </li> */}
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/statistics'>Statistics</Link>
                        </li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;