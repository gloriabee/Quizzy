
import { routerType } from '@/types/router.types';
import React from 'react'
import Customers from './Customers';
import Employees from './Employees'

const PagesData : routerType[] = [
    {
      path: "",
      element: <Employees/>,
      title: "home"
    },
    {
      path: "customers",
      element: <Customers/>,
      title: "customers"
    }
  ];
  

export default PagesData
