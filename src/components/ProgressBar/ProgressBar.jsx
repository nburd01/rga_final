import React from 'react'
import { useStorage } from '../../hooks/useStorage'

export const ProgressBar = ({file, setFile}) => {
    
    const {url, progress} = useStorage(file)
    console.log("progress, url", progress, url)
  return (
    <div className='progress-bar'>ProgressBar</div>
  )
}
