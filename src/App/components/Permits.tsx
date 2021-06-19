/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPermits } from '../../redux/actions/permits';
import { storeType } from '../../types/shared';

import PermitCard from './PermitCard';
import './Permits.css';

const Permits: React.FC = () => {
  const dispactch = useDispatch()
  const {
    permits,
    loading,
    error
  } = useSelector((state: storeType) => state.permits);

  console.log(permits, 'permits')

  useEffect(() => {
    dispactch(getPermits())
  }, [])

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div className='permits'>
        <p style={{flex: 0.16}}> Permit id </p>
        <p style={{flex: 0.20}}> Street name </p>
        <p style={{flex: 0.28}} className='permit_type'> Permit type </p>
        <p style={{flex: 0.14}}> Total fee </p>
        <p style={{flex: 0.16}} className='reported_cost'> Reported cost </p>
        <p style={{flex: 0.14}}> City </p>
      </div>

      {loading && <p> loading... </p>}
      
      {permits?.length
        && !loading
        && permits.map((permit: any) => (
        <PermitCard key={permit.id} permit={permit} />
      ))}
      
      {!permits?.length
        && !loading
        && <p> No permits found... </p>
      }

      {error && !loading && <p> sorry, an Error Occured... </p>}
    </div>
  )
}

export default Permits;
