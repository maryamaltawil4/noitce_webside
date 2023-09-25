
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './FormWrapper.css'
import { TableElement, Checkbox, HeaderRow, IconButton } from './StyledComponents';

function Show({data, onEditClicked, updateData}) {

  const handleDelete = (item) => {
    const deleteData = data.filter((dataItem) => dataItem !== item);

    localStorage.setItem('todo', JSON.stringify(deleteData));
    updateData(deleteData)
  };

  const handleUpdate = (item) => {
    onEditClicked(item);
  };

  const iscompleted = (index) => {
    const updatedData = [...data];
    updatedData[index].isCompleted = !updatedData[index].isCompleted;
    localStorage.setItem('todo', JSON.stringify(updatedData));
     updateData(updatedData)
  };

  return (
    <div>
      {data.length > 0 ? (
        <TableElement>
          <thead>
            <HeaderRow>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </HeaderRow>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <HeaderRow key={index}>
                <td>
                  <Checkbox
                    id={index}
                    type="checkbox"
                    checked={item.isCompleted}
                    onClick={() => iscompleted(index)}
                  />
                  {index + 1}
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <IconButton onClick={() => handleUpdate(item)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </IconButton>
                </td>
              </HeaderRow>
            ))}
          </tbody>
        </TableElement>
      ) : (
        <p> </p>
      )}

      </div>
  );
}

export default Show;
