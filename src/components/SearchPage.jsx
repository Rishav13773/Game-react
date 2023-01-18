import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import icon from '../Images/icon.png'
import { useNavigate } from 'react-router-dom';
import filterImg from '../Images/filter.png'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { type } from '@testing-library/user-event/dist/type';


const SearchPage = () => {
    let styling = {
        fontFamily: 'Microsoft New Tai lue',
        fontWeight: 'bolder',
        borderColor: 'rgba(246, 238, 242, 0.34)',
        color: 'white',
        width: '40%',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: '12px'
    }


    const [data, setData] = useState([]);
    const [q, setQ] = useState(""); //for search
    const [filter, setFilter] = useState();
    const Dispatch = useDispatch();
    const history = useNavigate()

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '234227d50bmsh2e62752f8bb5b42p167b46jsn603fda45c622',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    const getApi = async () => {
        try {
            const res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            const Data = await res.json();
            setData(Data)
            console.log(Data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApi();
    }, [])


    
    const Navigate = () => {
        history('/')
    }

    const reset = () => {
        setQ("")
    }

    const handleFilter = (event) => {  //for filtering
        console.log(event.target.value)
        setFilter(event.target.value)

    }

    const handleBtn =(ele)=>{
        Dispatch(ADD(ele));
        console.log(ele);
        history('/details')
    }

    return (
        <div className='container searchWrap'>
            <nav class="navbar bg-transparent mt-3">
                <img onClick={Navigate} className='icon' src={icon} alt="" />
                <div class="container-fluid align-text-center">
                    <form class="d-flex" role="search">
                        <input onChange={(e) => { setQ(e.target.value) }} style={{ width: 300 }} class="form-control me-2" type="search" placeholder="Search game" aria-label="Search" />
                        <button onClick={reset} style={styling} class="btn btn-outline-success" type="submit">Reset</button>
                    </form>
                    <img style={{ width: 30, marginLeft: '34rem' }} src={filterImg} alt="" />

                    <select className='select' onChange={handleFilter}>
                        <option className='options' disabled selected >Filter</option>
        
                        <option className='options'>MMORPG</option>
                        <option className='options'>Shooter</option>
                        <option className='options'>Strategy</option>
                        <option className='options'>Sports</option>
                        <option className='options'>Battle Royale</option>
                        <option className='options'>Action RPG</option>
                        <option className='options'>Fighting</option>
                        <option className='options'>ARPG</option>
                    </select>
                </div>
            </nav>


            <div className="cardWrap row d-flex justify-content-center align-items-center">
                {
                    (q) ?
                        data.filter(item => {
                            if (item.title.toLowerCase().includes(q)) {
                                return item;
                            }
                        }).map((ele, id) => {
                            return (<Card style={{ width: '18rem', marginTop: '4rem' }}>
                                <Card.Img style={{ backgroundColor: 'white' }} variant="top" src={ele.thumbnail} />
                                <Card.Body style={{ backgroundColor: 'white' }}>
                                    <Card.Title style={{ backgroundColor: 'white' }}>{ele.title}</Card.Title>
                                    <Card.Text style={{ backgroundColor: 'white' }}>
                                        {ele.body}
                                    </Card.Text>
                                    <Button onClick={()=>handleBtn(ele)} className='detail-btn' variant="outline-success">Show details</Button>
                                </Card.Body>
                            </Card>)
                        }) :

                        (filter) ?
                            data.filter(item => {
                                if (item.genre === filter) {
                                    return item;
                                }
                            }).map((ele, id) => {
                                return (<Card style={{ width: '18rem', marginTop: '4rem' }}>
                                    <Card.Img style={{ backgroundColor: 'white' }} variant="top" src={ele.thumbnail} />
                                    <Card.Body style={{ backgroundColor: 'white' }}>
                                        <Card.Title style={{ backgroundColor: 'white' }}>{ele.name}</Card.Title>
                                        <Card.Text style={{ backgroundColor: 'white' }}>
                                            {ele.body}
                                        </Card.Text>
                                        <Button onClick={()=>handleBtn(ele)} className='detail-btn' variant="outline-success">Show details</Button>
                                    </Card.Body>
                                </Card>)
                            }) :

                            data.map((ele, id) => {
                                return (
                                    <Card style={{ width: '18rem', marginTop: '4rem' }}>
                                        <Card.Img style={{ backgroundColor: 'white' }} variant="top" src={ele.thumbnail} />
                                        <Card.Body style={{ backgroundColor: 'white' }}>
                                            <Card.Title style={{ backgroundColor: 'white' }}>{ele.name}</Card.Title>
                                            <Card.Text style={{ backgroundColor: 'white' }}>
                                                {ele.body}
                                            </Card.Text>
                                            <Button onClick={()=>handleBtn(ele)} className='detail-btn' variant="outline-success">Show details</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                }
            </div>

        </div>
    )
}

export default SearchPage



