import { useState } from 'react'

export function usePagination(initialPage = 1, initialPageSize = 10) {
  const [page, setPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const goToPage = (newPage) => {
    setPage(newPage)
  }

  const nextPage = () => {
    setPage((prev) => prev + 1)
  }

  const prevPage = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  const changePageSize = (newPageSize) => {
    setPageSize(newPageSize)
    setPage(1) // Reset to first page when changing page size
  }

  const reset = () => {
    setPage(initialPage)
    setPageSize(initialPageSize)
  }

  return {
    page,
    pageSize,
    goToPage,
    nextPage,
    prevPage,
    changePageSize,
    reset,
  }
}

export default usePagination
