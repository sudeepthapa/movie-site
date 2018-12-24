import React,{Component} from 'react';
import axios from 'axios'
import Searchbar from './Searchbar'
class Description extends Component{
    state={
        activeMovie:{}
    }
  
    componentDidMount(){
        const id= this.props.location.state.id;
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a3def4df6b53084196d9d17e076779d2&language=en-US`)
            .then(data =>{
                   this.setState({
                       activeMovie:data.data
                   })
                   
                })
            .catch(function (error) {
                console.log(error);
            });
           
            
    }
    
    render(){
        const data=this.state.activeMovie;
        
        return(
           
            <div>
            <Searchbar />
            {console.log(data)}
                <div className="container cyan lighten-5">
                    <div className="row">
                        <div className="col l4">
                        <div className="card">
                                <div className="card-image wave-effect waves-block waves-light">
                                    <img src={"https://image.tmdb.org/t/p/w500"+data.poster_path} alt="" className="activator" />
                                </div>
                                <div className="card-content">
                                    <h5 className="red-text">{data.title}</h5>
                                    <p className="red-text text-lighten-2">{data.tagline}</p>
                                    <p>Status: {" "+ data.status}</p>
                                    <p className="grey-text">Realese: {data.release_date}</p>
                                </div>
                            
                            </div> 
                        </div>
                        <div className="col l8">
                            <h3>{data.title}</h3>
                            <p className="red-text text-lighten-2">{'"'+data.tagline+'"'}</p>
                            <h6 className="teal-text" style={{fontWeight:'bold'}}>Overview:</h6>
                            <p>{data.overview}</p>
                            <div className="">
                            <span style={{fontWeight:'bold'}}  className="teal-text">Genres:</span>&nbsp;
                            {data.id && data.genres.map(genre=>{
                                return(<span key={genre.id} className="">{genre.name+" / "}</span>)
                            })}
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col s3 center">
                                    <i className="material-icons red-text">favorite</i><br/>
                                    <i>{data.popularity}</i>
                                </div>
                                <div className="col s3 center">
                                    <i className="material-icons blue-text">thumb_up</i><br/>
                                    <i>{data.vote_count}</i>
                                </div>
                            </div>
                            
                            <div className="row">
                                <p className=" teal-text" style={{fontWeight:'bold'}}>Production Companies</p>
                            {data.id && data.production_companies.map(companies=>{
                                return(
                                    <div className="col s6 l3 m4 center p2" style={{border:'1px solid grey',height:'50px'}} key={companies.id}>{companies.name}</div>
                                )
                            })}
                            </div>
                            <a href={data.homepage}>Click here for official page</a>
                        </div>
                    </div>
                </div>
            </div>
       
            
        )
    }
}

export default Description;