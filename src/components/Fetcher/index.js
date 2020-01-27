import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetch(action)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!data) return null
  return children(data)
}
