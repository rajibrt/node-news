import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './Shared/NewsCard/NewsCard'

const Home = () => {
  const allNews = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center gap-4">
      {allNews.map((singlenews) => (
        <NewsCard key={singlenews.id} singlenews={singlenews}></NewsCard>
      ))}
    </div>
  )
}

export default Home
