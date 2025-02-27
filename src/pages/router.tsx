import React from 'react'
import { routerType } from '@/types/router.types'
import PagesData from './PagesData'
import {Route,Routes} from "react-router-dom"

const Router = () => {
    const pageRoutes= PagesData.map(({path,title,element}:routerType)=>{
        return <Route key={title} path={`/${path}`} element={element}/>;

    })
  return (
    <Routes>{pageRoutes}</Routes>
  )
}

export default Router
