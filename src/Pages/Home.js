import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './Shared/NewsCard/NewsCard'

const Home = () => {
  const allNews = useLoaderData()
  return (
    <div className="grid grid-flow-col auto-cols-max gap-4 justify-center">
      {allNews.map((singlenews) => (
        <NewsCard key={singlenews.id} singlenews={singlenews}></NewsCard>
      ))}
    </div>
  )
}

export default Home
