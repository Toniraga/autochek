export interface PermitInterface {
  application_start_date?: string;
  building_fee_paid?: string;
  building_fee_unpaid?: string;
  building_fee_waived?: string;
  contact_1_city?: string;
  contact_1_name?: string;
  contact_1_state?: string;
  contact_1_type?: string;
  contact_1_zipcode: string;
  id: string;
  issue_date: string;
  other_fee_paid: string;
  other_fee_unpaid: string;
  other_fee_waived: string;
  permit_: string;
  permit_type: string;
  pin1: string;
  processing_time: string;
  reported_cost: string;
  review_type: string;
  street_direction: string;
  street_name: string;
  street_number: string;
  subtotal_paid: string;
  subtotal_unpaid: string;
  subtotal_waived: string;
  suffix: string;
  total_fee: string;
  work_description: string;
  zoning_fee_paid: string;
  zoning_fee_unpaid: string;
  zoning_fee_waived: string;
}


export interface storeType {
  permits: {
    permits: PermitInterface[];
    loading?: boolean;
    error?: string;
  }
}