import React from 'react';
import {Route, createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Github, {githubInfoLoader} from './pages/Github';
import Home from './pages/Home';
import User from './pages/User';


export const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<Layout />} >
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About />} />
            <Route path='user/' element={<User />} >
                <Route path=':userId' element={<User />}/>   {/** for reading path params */}
            </Route>

            {/** loader is being used when want to fecth data before going into component */}
            <Route path='github' element={<Github />}
                loader={githubInfoLoader}       
            />
            <Route path='*' element={<div><h1>Not found</h1></div>} />
        </Route>
    )
)