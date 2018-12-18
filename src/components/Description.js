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
                <div className="container">
                    <div className="row">
                        <div className="col l4">
                        <div className="card">
                                <div className="card-image wave-effect waves-block waves-light">
                                    <img src={"https://image.tmdb.org/t/p/w500"+data.poster_path} alt="" className="activator" />
                                </div>
                                <div className="card-content">
                                    <h5 className="red-text">{data.title}</h5>
                                    <p className="red-text text-lighten-2">{data.tagline}</p><br></br>
                                    <p className="grey-text">Realese: {data.release_date}</p>
                                </div>
                            
                            </div> 
                        </div>
                        <div className="col l8">
                            <h3>{data.title}</h3>
                            <h6 className="teal-text">Overview:</h6>
                            <p>{data.overview}</p>
                            <a href={data.homepage}>Click here for official page</a>
                            {data.id && <p>{data.genres[0].name}</p>}
                        </div>
                    </div>
                </div>
            </div>
       
            
        )
    }
}

export default Description;