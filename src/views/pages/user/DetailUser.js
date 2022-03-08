import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from '../../../axios'

const DetailUser = () => {
  const [detail, setDetail] = useState([])
  const [statusFetch, setstatusFetch] = useState(true)
  var iduser = localStorage.getItem('iduser')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/user/${iduser}`)
        let result = data.data
        setDetail({
          bond: result.bond,
          userid: result.userid,
          mm: result.mm,
          stock: result.stock,
          nama: result.User.name,
          age: result.User.age,
        })
      } catch (error) {
        alert('error')
      }
    }
    if (statusFetch) {
      fetchData()
      setstatusFetch(false)
    }
  }, [statusFetch, setstatusFetch])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Detial User</CCardHeader>
        <CCardBody>
          <CRow>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">userid</CTableHeaderCell>
                  <CTableHeaderCell scope="col">name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">age</CTableHeaderCell>
                  <CTableHeaderCell scope="col">mm(%)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">bond(%)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">stock(%)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">{detail.userid}</CTableHeaderCell>
                  <CTableDataCell>{detail.nama}</CTableDataCell>
                  <CTableDataCell>{detail.age}</CTableDataCell>
                  <CTableDataCell>{detail.mm}</CTableDataCell>
                  <CTableDataCell>{detail.bond}</CTableDataCell>
                  <CTableDataCell>{detail.stock}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            {/* <CForm>
              <div className="me-5">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </CForm> */}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DetailUser
