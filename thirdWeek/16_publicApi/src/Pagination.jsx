import React from "react"

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Anterior</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Próxima</button>}
    </div>
  )
}

