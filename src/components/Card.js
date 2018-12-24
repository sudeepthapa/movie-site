import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Card extends Component{
    state = {
        data:[],
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a3def4df6b53084196d9d17e076779d2&page=')
            .then(data =>{
                   this.setState({
                       data:data.data.results
                   })
                   
                })
            .catch(function (error) {
                console.log(error);
            });
           
           
    }
    render(){
        return(
            <div className="container row">
            {this.state.data.map(res=>{
                return(
                    
                        <div key={res.id} className="col s12 m6 l4">
                            <div className="card hoverable">
                                <div className="card-image wave-effect waves-block waves-light">
                                    <img src={"https://image.tmdb.org/t/p/w500"+res.poster_path} alt="" className="activator" />
                                </div>
                                <div className="card-content">
                                    <h6 className="red-text">{res.title.length<20 ? `${res.title}`: `${res.title.substring(0,20)}`}</h6>
                                    <button className="btn waves-effect waves-light">
                                       <Link style={{color:'#fff'}} to={{
                                           pathname:`/description/${res.id}`,
                                           state:{id:res.id}
                                           }}>See More</Link>
                                    </button>
                                </div>
                            
                            </div>
        
                        </div>
                
    
                )
            })
    
            }
            </div>
           
        )
    }
}
export default Card;