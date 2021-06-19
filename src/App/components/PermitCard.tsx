import React, { useState } from 'react';
import { PermitInterface } from '../../types/shared';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import eyeIcon from '../../assets/eyeIcon.svg';

import './PermitCard.css';

interface IProps {
  permit: PermitInterface;
}


const PermitCard: React.FC<IProps> = ({ permit }) => {
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const imgStyle = { height: '8px', width: '14px' };

  const arrow = () => (
    showDrop ?
      <img style={imgStyle} src={arrowUp} alt='arrowdown' />
      :
      <img style={imgStyle} src={arrowDown} alt='arrowdown' />
  )

  return (
    <>
      <div
        className='card'
        onClick={() => setShowDrop(!showDrop)}
      >
        {arrow()}
        <div className='card_right'>
          <p style={{flex: 0.14}}> {permit?.permit_} </p>
          <p style={{flex: 0.18}}> {permit.street_name} </p>
          <p style={{flex: 0.26}}> {permit.permit_type} </p>
          <p style={{flex: 0.12}}> {permit.total_fee} </p>
          <p style={{flex: 0.12}} className='reported_cost'> {permit.reported_cost} </p>
          <p style={{flex: 0.14}}> {permit.contact_1_city} </p>
          <img style={{height: '16px', flex: 0.04}} src={eyeIcon} alt='eyeIcon' />
        </div>
      </div>
      {showDrop &&
        <div className='card_body'>
          <div>
            <p> Application Start Date <span> {permit.application_start_date} </span> </p>
            <p> Building Fee Paid <span> {permit.building_fee_paid} </span> </p>
            <p> Building Fee Unpaid <span> {permit.building_fee_unpaid} </span> </p>
            <p> Building Fee Waived <span> {permit.building_fee_waived} </span> </p>
            <p> Issue Date <span> {permit.issue_date} </span> </p>
            <p> Other Fees Paid <span> {permit.other_fee_paid} </span> </p>
            <p> Other Fees Unpaid <span> {permit.other_fee_unpaid} </span> </p>
            <p> Other Fees Waved <span> {permit.other_fee_waived} </span> </p>
          </div>
          <div>
            <p> Contact Name <span> {permit.contact_1_name} </span> </p>
            <p> Contact State <span> {permit.contact_1_state} </span> </p>
            <p> Contact Type <span> {permit.contact_1_type} </span> </p>
            <p> Contact Zipcode <span> {permit.contact_1_zipcode} </span> </p>
            <p> Processing Time <span> {permit.processing_time} </span> </p>
            <p> Permit Suffix <span> {permit.suffix} </span> </p>
            <p> Work Description <span> {permit.work_description} </span> </p>
          </div>
        </div>
      }
    </>
  )
}

export default PermitCard;
