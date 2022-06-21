import React, {useRef} from 'react';
import logo from './assets/logo.png'
import search from './assets/search.png'

export default function SearchHeader({onSearch, onMain}) {
    const inputRef = useRef()

// 검색 동영상
    const handleSearch = () => {

      const value = inputRef.current.value
      onSearch(value)
    }
    
    const onClick = () => {
      handleSearch()
    }

    const onKeyPress = (e) => {
      if(e.key === 'Enter'){
        handleSearch()
      }
    }

// 인기 동영상
    const handeleDefault = () => {
      onMain()
      inputRef.current.value =''
    }
    
    const ClickDefault = () => {
      handeleDefault()
    }

    

  return (
    <header className="searchHeader">
        <h1 className='logoframe' onClick={ClickDefault}>
            <img src={logo} className='logo'/>
            <h2>YouTube</h2>
        </h1>
        <input className="inputsearch" ref={inputRef} onKeyPress={onKeyPress} type="search" placeholder='검색'></input><button className='searchFrame' onClick={onClick}><img src={search} className="search"/></button>
    </header>
    
  );
}

