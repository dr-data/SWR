import React from 'react'
import { usePagination } from './usePagination'

export default function App() {
    const { pages, isLoadingMore, loadMore, isReachingEnd } = usePagination(
        '/pokemon'
    )

    return (
        <main className='App'>
            <h1>Pokedex</h1>
            <div>{pages}</div>
            <button
                onClick={loadMore}
                disabled={isLoadingMore || isReachingEnd}
            >
                Load more...
            </button>
        </main>
    )
}