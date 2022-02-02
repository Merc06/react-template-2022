import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, ProfileState } from '../../state';
import { initProfileState } from './../../state/constants';
import { ProfileProps } from '../../state/types/profile';

const home = () => {
    const dispatch = useDispatch();
    const { addUserProfile } = bindActionCreators(actionCreators, dispatch);
    const items = useSelector((profilesState: ProfileState) => profilesState.profiles);
    console.log(items);
    const [state, setState] = useState<ProfileProps>(initProfileState);
  
    const addUser = (): void => {
      // addUserProfile()
      
    }
    
    const onChange = (event: SyntheticEvent): void => {
      const { value } = event.target as HTMLInputElement;
      setState({
        id: 1,
        name: value
      })
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
            onClick={() => addUserProfile(state)}
            >
            Submit
            </button>
        </div>

        <h4 className="text-lg text-gray-600">User List:</h4>
        {items}
        {/* <table className='border border-gray-300 min-w-1/4'>
            <tr>
            <th>Index</th>
            <th>Name</th>
            </tr>
            <tr>
            <td>{item.id}</td>
            <td>Name</td>
            </tr>
        </table> */}

        </div>
    );
};

export default home;