import { Section } from "../../components/Section/Section";
// import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useEffect, useState } from "react";
import { getAllNews } from "services/api/news";
import { NewsList } from "components/News/NewsList/NewsList";
import {NewsSearch} from "components/News/NewsSearch/NewsSearch"
// import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { Loader } from "components/Loader/Loader";

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [isNewsLoading, setIsNewsLoading] = useState(true)
  
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log(query);
    const filteredNews = news.filter(el => el.title.includes(query))
  console.log(filteredNews);
  setNews(filteredNews);
  setQuery('')
  };

  useEffect(() => {
  getAllNews().then(setNews).then(setIsNewsLoading(false));
  
}, []);

  return(
    <>
    <Section title={'News'}>
        {/* <Searchbar ></Searchbar> */}
        <NewsSearch setQuery={setQuery} handleSubmit={handleSubmit} query={query}></NewsSearch>
    </Section>
    {isNewsLoading && (
      <div >
        Wait a minute, Team1 is trying to fetch...
      </div>
    )}
    {news.length>0 ? <NewsList data={news} /> : <Loader/>}
    
    </>
  );
};

export default NewsPage;

