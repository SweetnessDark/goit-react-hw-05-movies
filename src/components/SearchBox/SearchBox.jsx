import sass from './SearchBox.module.scss';

export const SearchBox = ({ onSubmit, onChange }) => {
  return (
    <>
      <form className={sass.form} onSubmit={onSubmit}>
        <>
          <input className={sass.searchLine} type="text" onChange={onChange} />
          <button className={sass.btnSearch} type="submit">
            Search
          </button>
        </>
      </form>
    </>
  );
};
