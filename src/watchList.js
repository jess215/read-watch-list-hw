import { useState } from 'react'
const WatchList = (props) => {
    const [shows, setShows] = useState(props.initialShows || [])
    const [show, setShow] = useState('')

    const renderShows = () => {
        return shows.map((show) => {
            return (
                <div key={show.id} style={{ textDecoration: show.completed ? "line-through" : ""}}>
                    <p onClick={() => toggleShow(show.id)}>{show.title}</p>
                    <button onClick={() => deleteShow(show.id)}>Delete</button>
                </div>
            )
        })
    }

    const toggleShow = (idOfShow) => {
        const updatesShows = shows.map((title) => {
            if(show.id === idOfShow){
                return {...show, completed: !show.completed}
            }
            return title
        })
        setShows(updatesShows)
    }

    const deleteShow = (id) => {
        let filterShows = shows.filter(show => {
            return show.id !== id
        })
        setShows(filterShows)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log('title:', title)
        
        const newShows = [...shows, {id: Math.random(), show: title, completed: false}]
        setShows(newShows)
        setShow('')
    }


    return (
        <div>
          <h1>{props.title}</h1>
          <form onSubmit={handleSubmit}>
              <p>Show: </p>
              <input value={show} onChange={(e)=> {setShow(e.target.value)} }/>
              <button type='submit'>Add</button>
      
          </form>
          <div>{renderShows()}</div>
        </div>
      );
    };




export default WatchList;