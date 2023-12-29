import { createContext, useContext, useState } from 'react';
const SearchContaxt=createContext();


const SearchProvide=({children})=>{
    const [searchTerm,setSearchTerm]=useState('');
    
}