import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { getPermits } from '../../redux/actions/permits';

import PermitCard from './PermitCard';

const Permits: React.FC = () => {
  // const dispactch = useDispatch()
  // const permits = useSelector((state: any) => state.permits);

  useEffect(() => {
    // dispactch(getPermits())
  }, [])

  return (
    <div>
      <PermitCard />
    </div>
  )
}

export default Permits;
