import ChevronLeft from "../assets/icons/ChevronLeft";
import ChevronRight from "../assets/icons/ChevronRight";

const Pagination = ({ activePage, setActivePage, totalPages }) => {

  if (totalPages == 1) {
    return (
      <div className="pagination">
        <span className="pagination-element active">{activePage}</span>
      </div>
    )
  }

  if (totalPages - activePage > 4) {
    return (
      <div className="pagination">
        {activePage != 1 ? (
          <span
            className="pagination-arrow"
            onClick={() => setActivePage(activePage - 1)}
          >
            <ChevronLeft/>
          </span>
        ) : null}
        <span className="pagination-element active">{activePage}</span>
        <span className="pagination-element" onClick={() => setActivePage(activePage + 1)}>{activePage + 1}</span>
        <span className="pagination-element" onClick={() => setActivePage(activePage + 2)}>{activePage + 2}</span>
        <span className="pagination-dots">...</span>
        <span className="pagination-element" onClick={() => setActivePage(totalPages)}>{totalPages}</span>
        <span
          className="pagination-arrow"
          onClick={() => setActivePage(activePage + 1)}
        >
         <ChevronRight />
        </span>
      </div>
    );
  }

  return (
    <div className="pagination">
      {activePage != 1 ? (
        <span
          className="pagination-arrow"
          onClick={() => setActivePage(activePage - 1)}
        >
          <ChevronLeft/>
        </span>
      ) : null}

      <span 
        className={`pagination-element${(activePage == totalPages - 4)?' active':''}`}
        onClick={() => setActivePage(totalPages - 4)}
        >
        {totalPages - 4}
      </span>
      <span 
        className={`pagination-element${(activePage == totalPages - 3)?' active':''}`}
        onClick={() => setActivePage(totalPages - 3)}
        >
        {totalPages - 3}
      </span>
      <span 
        className={`pagination-element${(activePage == totalPages - 2)?' active':''}`}
        onClick={() => setActivePage(totalPages - 2)}
        >
        {totalPages - 2}
      </span>
      <span 
        className={`pagination-element${(activePage == totalPages - 1)?' active':''}`}
        onClick={() => setActivePage(totalPages - 1)}
        >
        {totalPages - 1}
      </span>
      <span 
        className={`pagination-element${(activePage == totalPages)?' active':''}`}
        onClick={() => setActivePage(totalPages)}
        >
        {totalPages}
      </span>

      {activePage != totalPages ? (
        <span
          className="pagination-arrow"
          onClick={() => setActivePage(activePage + 1)}
        >
          <ChevronRight/>
        </span>
      ) : null}
    </div>
  )

};

export default Pagination;
