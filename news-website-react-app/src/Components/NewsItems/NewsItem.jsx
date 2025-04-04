import React from 'react'

const formatDate = (isoString) => {
    const date = new Date(isoString); // Parse the ISO string
    return date.toLocaleString(); // Convert to local time string
  };
  
export default function NewsItem({article}) {
    console.log(article);
  return (
    <div className="col-md-4 mb-4">
    <div className="card h-100">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          className="card-img-top"
          alt={article.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
          {article.description || "No description available."}
        </p>
        <small className="text-muted d-block mb-2">
            Published At: {formatDate(article.publishedAt)}
          </small>
          <span className="badge bg-secondary">
            Source: {article.source.name || "Unknown"}
          </span>
      </div>
      <div className="card-footer">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
  )
}

