import React from 'react'

const NewsCard = ({ singlenews }) => {
  const { title, image, news, caegory } = singlenews
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{news.length > 100 ? news.slice(0, 100) + '...' : news}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{caegory}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
