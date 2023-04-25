import { Select } from './FilterOptions.styled';

export const FilterOptions = ({ onSelect }) => {
  return (
    <div>
      <Select name="filter" id="filter" onChange={onSelect}>
        <option value="all">Show All</option>
        <option value="follow">Follow</option>
        <option value="following">Followings</option>
      </Select>
    </div>
  );
};
