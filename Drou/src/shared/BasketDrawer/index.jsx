import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const BasketDrawer = () => {
    const [isOpen, setIsOpen]= useState(false)
    
  return (
    <>
    <button onClick={()=> setIsOpen(true) }  id='basket'>ADD</button>
    <Drawer open={isOpen } onClose={()=> setIsOpen(false)} anchor='right'>
        <Box sx={{width:'300px'}}>

        </Box>
    </Drawer>
    </>
    
  )
}

export default BasketDrawer