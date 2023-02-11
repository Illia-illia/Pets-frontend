import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  CameraIcon,
  EditIcon,
  EditPhotoContainer,
  InfoContainer,
  // ErrorText,
  InfoForm,
  Input,
  InputPhoto,
  Label,
  AddPhoto,
  Thumb,
  UserAvatar,
  UserSection,
  IconWraper,
} from './UserData.styled';

import avatar from './img/temp-avatar.jpg';
import Logout from 'components/Logout';

// import { ReactComponent as SvgCross } from './img/svgCross.svg';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserData = () => {
  //   return const dispatch = useDispatch();

  //   const handleSubmit = value => {
  //     dispatch(updateUser(value));
  //   };

  return (
    <UserSection>
      <EditPhotoContainer>
        <Thumb>
          <UserAvatar
            src={avatar}
            alt="User avatar"
            loading="lazy"
            width="233"
            height="233"
          />
          <AddPhoto htmlFor="user-photo">
            <InputPhoto
              id="user-photo"
              type="file"
              accept="image/*"
              name="user-photo"
            />
            <IconWraper>
              <CameraIcon />
            </IconWraper>
            <span name="image">Edit photo</span>
          </AddPhoto>
        </Thumb>
      </EditPhotoContainer>
      <InfoContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          //   onSubmit={handleSubmit}
        >
          <InfoForm autoComplete="off">
            <Label htmlFor="name">Name:</Label>
            <Input type="text" name="name" value={'Anna'} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="name" component="div" /> */}

            <Label htmlFor="email">Email:</Label>
            <Input type="text" name="email" value={'anna00@gmail.com'} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="email" component="div" /> */}

            <Label htmlFor="birthday">Birthday:</Label>
            <Input type="text" name="birthday" value={'00.00.0000'} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="birthday" component="div" /> */}

            <Label htmlFor="phone">Phone:</Label>
            <Input type="tel" name="phone" value={'+38000000000'} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="phone" component="div" /> */}

            <Label htmlFor="city">City:</Label>
            <Input type="text" name="city" value={'Kiev'} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="city" component="div" /> */}
          </InfoForm>
        </Formik>
        <Logout />
      </InfoContainer>
    </UserSection>
  );
};

export default UserData;