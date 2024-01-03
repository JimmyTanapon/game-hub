import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/Bs'

interface Props{
    onSearchInput:(searchText:string)=>void
}

const SearchInput = ({onSearchInput}:Props) => {
    const ref = useRef<HTMLInputElement>(null)
    return (

        <form style={{width:'100%'}} onSubmit={(event)=>{
            event.preventDefault();
            if(ref.current) onSearchInput(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
    
            </InputGroup>
        </form>
        
        )
}

export default SearchInput