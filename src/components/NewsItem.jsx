import React,{Component} from 'react';
import '../componentsCSS/NewsItem.css';

class NewsItems extends Component{

    render()
    {
        return(
            <>
                <div className='container'>
                    <img src="https://witchculttranslation.com/wp-content/uploads/2024/08/image-2.png" alt='news'/>
                    <div className='text-container'>
                        <h3>This is heading</h3>
                        <p>This is body</p>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItems;