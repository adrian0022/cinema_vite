const Pagination = ({ activePage, setActivePage, totalPages }) => {
  return (
    <div className="pagination">
      <span
        className={activePage === 1 ? "active" : null}
        onClick={() => setActivePage(1)}
      >
        1
      </span>
      <span
        className={activePage === 2 ? "active" : null}
        onClick={() => setActivePage(2)}
      >
        2
      </span>
      <span
        className={activePage === 3 ? "active" : null}
        onClick={() => setActivePage(3)}
      >
        3
      </span>
      <span
        className={activePage === 4 ? "active" : null}
        onClick={() => setActivePage(4)}
      >
        4
      </span>
    </div>
  );
};

export default Pagination;
