import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../../_actions/userActions';
import { withRouter, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li`
  & + & {
    margin-left: 1rem;
  }
`

const CustomLink = styled(Link)`
  &:hover {
    color: ${darken(0.2, '#e8e8e8')}
  }
`

const RightMenu = ({ history }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const logoutHandler = () => {
        dispatch(logoutUser()).then(response => {
            if (response.payload.logoutSuccess) {
                history.goBack(2);
            } else {
                alert('Log Out Failed');
            }
        });
    }

    return (
        <>
        {user.userData && !user.userData.isAuth ?
            (<Ul>
                <Li>
                    <CustomLink to='/login'>로그인</CustomLink>
                </Li>
                <Li>
                    <CustomLink to='/register'>회원가입</CustomLink>
                </Li>
            </Ul>) :
            (<Ul>
                <Li>
                    <CustomLink to='/history'>결제내역</CustomLink>
                </Li>
                <Li>
                    <CustomLink to='/product/upload'>업로드</CustomLink>
                </Li>
                <Li>
                    <CustomLink to='/user/cart'>장바구니</CustomLink>
                </Li>
                <Li>
                    <CustomLink to='/logout' onClick={logoutHandler}>로그아웃</CustomLink>
                </Li>
            </Ul>)
        }
        </>
    );
};

export default withRouter(RightMenu);