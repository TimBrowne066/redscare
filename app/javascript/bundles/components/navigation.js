import React from 'react';
import {NavBar} from 'simple-react-bootstrap'

const Navigation = (props) => {
  return (
    <NavBar>
        <NavBar.Header>
            <NavBar.Brand>
                <a style={{ cursor: 'pointer' }}>Header</a>
            </NavBar.Brand>
            <NavBar.Toggle />
        </NavBar.Header>
        <NavBar.Nav>
            <NavBar.Item className="class-on-item">Link 1</NavBar.Item>
            <NavBar.Item disabled={true}>Link 2</NavBar.Item>
            <NavBar.Item active={true} href="http://www.google.com">Link 3</NavBar.Item>
            <NavBar.Dropdown toggleClassName="pointer-cursor" style={{ color: 'red' }} text="Sub menu">
                <NavBar.Item>Sub option a</NavBar.Item>
                <NavBar.Item href="#foo">Sub option b</NavBar.Item>
                <NavBar.ItemDivider />
                <NavBar.Item>Sub option c</NavBar.Item>
            </NavBar.Dropdown>
            <NavBar.Dropdown disabled={true} text="Sub menu">
                <NavBar.Item>Sub option a</NavBar.Item>
                <NavBar.Item>Sub option b</NavBar.Item>
                <NavBar.Item>Sub option c</NavBar.Item>
            </NavBar.Dropdown>
        </NavBar.Nav>
        <NavBar.Header>
            <NavBar.Brand>
                <a style={{ cursor: 'pointer' }}>Second Header</a>
            </NavBar.Brand>
            <NavBar.Toggle />
        </NavBar.Header>
        <NavBar.Form className="pull-left">
            <div className="form-group">
                <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn default">Search</button>
                        </span>
                    <input className="form-control" placeholder="Quick title search" />
                </div>
            </div>
        </NavBar.Form>
    </NavBar>
  )
}

export default Navigation;
