import React from 'react'

function Spinner() {
  return (
    <section>
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  )
}

export default Spinner

