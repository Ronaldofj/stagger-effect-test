import styled from 'styled-components';

interface ListItemProps {
  active: boolean;
  delay: number;
}

const ListItem = styled.li<ListItemProps>`
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: opacity 0.3s;
  transition-delay: ${({ delay }) => `${delay}ms`};
  font-weight: bold;
  list-style: none;
  background-color: #fff;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export default ListItem;
