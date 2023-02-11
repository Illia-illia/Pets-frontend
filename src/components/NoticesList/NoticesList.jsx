import { List } from './NoticesList.styled';
import { NoticeItem } from 'components/NoticeItem/NoticeItem';

export const NoticesList = ({
  notices,
  onDeleteNotice,
  favorite,
  addToFavoriteAndRemove,
}) => {
  return (
    <List>
      {notices.map(el => (
        <NoticeItem
          notices={el}
          key={el._id}
          onDeleteNotice={onDeleteNotice}
          favorite={favorite}
          addToFavoriteAndRemove={addToFavoriteAndRemove}
        />
      ))}
    </List>
  );
};
