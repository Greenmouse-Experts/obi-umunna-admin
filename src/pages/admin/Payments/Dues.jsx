import React from 'react'
import useGetHook from '../../../hook/useGet'

const DuesPayments = () => {
    const {data} = useGetHook('/admin/dues/view/payments')
  return (
    <div>DuesPayments</div>
  )
}

export default DuesPayments