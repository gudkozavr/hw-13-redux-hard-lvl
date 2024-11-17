import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";

function Filter({ filter, setFilter }) {
  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} type="text" value={filter} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
