import React,{Component} from 'react';
import Badge from 'react-bootstrap/Badge';
import '../componentsCSS/NewsItem.css';

class NewsItems extends Component{


    render()
    {
        return(
            <>
                <div className='NewsItemcontainer'>
                <div className='ImageContainer'>
                    <Badge bg="primary" className='badge-overlay'>{this.props.source}</Badge>
                    <img src={this.props.image} alt='news'/>
                </div>
                    <a href={this.props.url}>
                    <div className='textNewsItemcontainer'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.content}</p>
                    </div>
                    </a>
                    
                </div>
                
            </>
        );
    }
}

export default NewsItems;