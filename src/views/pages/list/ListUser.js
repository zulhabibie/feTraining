import React, { useEffect, useState } from 'react'

import {
  CButton,
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
import { Link } from 'react-router-dom'

function ListUser() {
  const [data_list, set_data_list] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios
      .get('users')
      .then((response) => {
        const data = response.data.data
        set_data_list(data)
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }, [])
  const handleDetail = (event) => {
    let iduser = parseInt(event.target.value)
    localStorage.setItem('iduser', iduser)
    // history.push(`/detail-user/${idUser}`)
    setVisible(!visible)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h6>List User</h6>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  // calling state variable data to filter data inside table
                  data_list.map((data, index) => {
                    return (
                      <CTableRow key={data.userid}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>{data.name}</CTableDataCell>
                        <CTableDataCell>{data.age}</CTableDataCell>
                        <CTableDataCell>
                          <Link to="detialuser">
                            <CButton onClick={handleDetail} value={data.userid}>
                              Detail
                            </CButton>
                          </Link>
                          {/* <CModal visible={visible} onClose={() => setVisible(false)}>
                            <CModalHeader onClose={() => setVisible(false)}>
                              <CModalTitle>Detail User</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
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
                                    <CTableHeaderCell scope="row">{data.userid}</CTableHeaderCell>
                                    <CTableDataCell>{data.name}</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                  </CTableRow>
                                </CTableBody>
                              </CTable>
                            </CModalBody>
                            <CModalFooter>
                              <CButton color="secondary" onClick={() => setVisible(false)}>
                                Close
                              </CButton>
                            </CModalFooter>
                          </CModal> */}
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })
                }
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ListUser
