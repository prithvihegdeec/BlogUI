import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import image from './css/1_8WLZFZzuc-60GpUz62OxIA.jpeg'


import PostsList from './components/posts/List'
import Authors from './components/authors/Authors'
import PostShow from './components/posts/Show'
import AuthorId from './components/authors/AuthorId'
import RecentPost from './RecentPost'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Navbar color="dark" fixed="top" dark expand="lg">
                    <NavbarBrand href="/">Blog UI</NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="/posts">Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/authors">Authors</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <hr />
                <div className="card bg-dark text-white">
                    <img src={image} className="img-fluid" alt="Blog UI" />
                    <div className="card-img-overlay">
                        <Route path="/posts/:id" component={PostShow} />
                        <Route path="/authors/:id" component={AuthorId} />
                        <Route path="/posts" component={PostsList} exact={true} />
                        <Route path="/authors" component={Authors} exact={true} />
                        <hr />
                        <RecentPost />
                    </div>
                </div>
            </div>

        </BrowserRouter>

    )
}

export default App