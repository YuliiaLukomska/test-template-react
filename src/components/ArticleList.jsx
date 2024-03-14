const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, url, title }) => (
      <li key={id}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <img src={url}></img>
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
