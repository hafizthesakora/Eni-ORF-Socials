import { useSelector } from 'react-redux';
import { followerspage } from '../../../functions/reducers';
import { getFollowersInfos } from '../../../functions/user';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { ArrowDown1 } from '../../../svg';

export default function Followers() {
  const { user } = useSelector((state) => ({ ...state }));
  const { type } = useParams();

  const [{ loading, error, data }, dispatch] = useReducer(followerspage, {
    loading: false,
    data: {},
    error: '',
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: 'FOLLOWERS_REQUEST' });
    const data = await getFollowersInfos(user.token);
    if (data.status === 'ok') {
      dispatch({ type: 'FOLLOWERS_SUCCESS', payload: data.data });
    } else {
      dispatch({ type: 'FOLLOWERS_ERROR', payload: data.data });
    }
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="scrollbar">
      {data.followers &&
        data.followers.slice(0, 10).map((user) => (
          <>
            <div className="contact hover3">
              <div className="contact_img">
                <img src={user.picture} alt="" />
              </div>
              <Link to={`/profile/${user.username}`}>
                <span>
                  {user.first_name} {user.last_name}
                </span>
              </Link>
            </div>
          </>
        ))}

      {!visible && (
        <div
          className="left_link hover2"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more_left">
          {data.followers &&
            data.followers.slice(10, data.followers.length).map((user) => (
              <>
                <div className="contact hover3">
                  <div className="contact_img">
                    <img src={user.picture} alt="" />
                  </div>
                  <Link to={`/profile/${user.username}`}>
                    <span>
                      {user.first_name} {user.last_name}
                    </span>
                  </Link>
                </div>
              </>
            ))}
          <div
            className="left_link hover2 "
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
    </div>
  );
}
