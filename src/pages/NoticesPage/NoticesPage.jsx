import { NoticesList } from 'components/NoticesList/NoticesList';
import { useEffect, useState } from 'react';
import {
  SectionList,
  Container,
  NavContainer,
  AddBtnPosition,
  NavBtnPosition,
  BtnPosition,
} from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import {
  getNoticeByCategory,
  removeNotice,
  getFavoriteNotices,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from 'services/api/notices';
import { useParams } from 'react-router-dom';
import { CategoryBtn } from '../../components/CategoryBtn/CategoryBtn';
import { NavLink } from 'react-router-dom';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState([]);

  const { categoryName } = useParams;

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  useEffect(() => {
    const getNotices = async () => {
      try {
        const noticesByCategory = await getNoticeByCategory({
          category: categoryName,
        });
        setNotices(noticesByCategory.data.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getNotices();
  }, [categoryName]);

  useEffect(() => {
    (async () => {
      const allFavorite = await getFavoriteNotices();
      setFavorite(allFavorite.map(({ _id }) => _id));
    })();
  }, []);

  const onDeleteNotice = async id => {
    try {
      const { id: elId } = await removeNotice(id);
      if (elId) {
        const newNotices = notices.filter(({ _id }) => elId !== _id);
        setNotices(newNotices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavoriteAndRemove = async id => {
    try {
      if (!favorite.includes(id)) {
        await addNoticeToFavorite(id);
        setFavorite(prev => [...prev, id]);
        return;
      }
      await removeNoticeFromFavorite(id);
      setFavorite(prev => prev.filter(el => el !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavContainer>
        <Section title={`Find your favorite pet`}>
          <Searchbar></Searchbar>
        </Section>
        <BtnPosition>
          <NavBtnPosition>
            <NavLink>
              <CategoryBtn title={'lost/found'}></CategoryBtn>
            </NavLink>
            <NavLink>
              <CategoryBtn title={'in good hands'}></CategoryBtn>
            </NavLink>
            <NavLink>
              <CategoryBtn title={'sell'}></CategoryBtn>
            </NavLink>
            <NavLink>
              <CategoryBtn title={'favorite ads'}></CategoryBtn>
            </NavLink>
            <NavLink>
              <CategoryBtn title={'my ads'}></CategoryBtn>
            </NavLink>
          </NavBtnPosition>
          {!showModal && (
            <AddBtnPosition>
              <AddPetBtn onClick={toggleModal}></AddPetBtn>
            </AddBtnPosition>
          )}
        </BtnPosition>
      </NavContainer>
      {showModal && <Modal onClose={toggleModal}></Modal>}
      <SectionList>
        <Container>
          {notices.length !== 0 && (
            <NoticesList
              notices={notices}
              favorite={favorite}
              onDeleteNotice={onDeleteNotice}
              addToFavoriteAndRemove={addToFavoriteAndRemove}
            />
          )}
        </Container>
      </SectionList>
    </>
  );
};

export default NoticesPage;
