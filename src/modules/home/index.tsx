import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, ProfilesState } from '../../state';
import { initProfileState } from './../../state/constants';
import { ProfileProps } from '../../state/types/profile';

const Home = () => {
    const dispatch = useDispatch();
    const { addUserProfile, removeUserProfile } = bindActionCreators(actionCreators, dispatch);
    const profiles: Array<ProfileProps> = useSelector((profilesState: ProfilesState) => profilesState.profiles);
    const [state, setState] = useState<ProfileProps>(initProfileState);
    
    const onChange = (event: SyntheticEvent): void => {
      const { value } = event.target as HTMLInputElement;
      setState({
        ...state,
        name: value
      })
    }

    const addUser = async () => {
      const payload = {
        ...state,
        id: +profiles.length + 1,
      }
      await addUserProfile(payload);
      await setState(initProfileState);
    }

    return (
        <div className="flex flex-col w-full justify-center items-center space-y-3">
          <h1 className="font-bold text-xl text-blue-400">STATE MANAGEMENT TESTING</h1>

          <div className="flex items-stretch space-x-2">
              <input
                type="text"
                className='border border-gray-300 px-3'
                placeholder='Username'
                name='name'
                value={state.name}
                onChange={onChange}
              />
              <button
                className='border border-gray-300 px-2 py-1'
                onClick={addUser}
              >
                Submit
              </button>
          </div>

          <h4 className="text-lg text-gray-600">User List:</h4>
          {
            profiles.length ?
            <table className='border border-gray-300 min-w-1/4'>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    profiles.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          className='text-xs text-white bg-red-700 rounded px-4 py-2'
                          onClick={() => removeUserProfile(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
            </table> :
            <p className='text-gray'>No item available.</p>
          }

        </div>
    );
};

export default Home;