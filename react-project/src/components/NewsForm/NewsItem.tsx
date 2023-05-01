import { NewsItemBlock } from './NewsFormStyled';

interface NewsItemProps {
  article: object;
}

interface articleProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export default function NewsItem({ article }: NewsItemProps) {
  const { title, description, url, urlToImage } = article as articleProps;
  console.log(article);
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbname" />
          </a>
        </div>
      )}
      <div className="contents">
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}
