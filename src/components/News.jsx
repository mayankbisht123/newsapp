import React, { Component } from 'react';
import NewsItems from './NewsItem';
import '../componentsCSS/News.css';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      length:0
    }
  }

  updateData = async()=>{
    try {
      this.props.setProgress(10);
      console.log(process.env.REACT_APP_API);
      let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=${this.state.page}&apiKey=${process.env.REACT_APP_API}`;
      let response = await fetch(url);
      this.props.setProgress(40);
      let data = await response.json();
      this.props.setProgress(100);
      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
        page:this.state.page+1,
        length:this.state.length+data.articles.length

      });
    }
    catch (e) {
      console.log("Error fetching data ", e);
    }
  }

  componentDidMount= async()=> {
    this.updateData();
  }


  fetchData= async()=> {
    this.updateData();
  }

  refresh= async()=> {
    this.updateData();
  }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.length!==this.state.totalResults}
          loader={<center><h4>Loading...</h4></center>}
          // below props only if you need pull down functionality
          refreshFunction={this.refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          <div className='News'>
            {this.state.articles.length > 0 ? (this.state.articles.map((articles, index) => (
              <NewsItems
                key={index}
                title={articles.title}
                content={articles.content}
                image={articles.urlToImage}
                url={articles.url}
                author={articles.author}
                source={articles.source.name}
              />
            ))) : (
              <></>
            )}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;