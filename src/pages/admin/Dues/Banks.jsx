import React from 'react'
import useGetHook from '../../../hook/useGet'

const AdminBanks = () => {
    const {data, isLoading, refetch} = useGetHook(`/admin/banks`)
  return (
    <>
        <div>

        </div>
    </>
  )
}

export default AdminBanks