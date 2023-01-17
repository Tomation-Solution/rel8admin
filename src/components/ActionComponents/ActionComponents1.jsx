import React from 'react'
import styled from 'styled-components'
import { CancelIcon, EditIcon, PlusCircleIcon } from '../../assets/SideBar/svgs'
import { rel8LightPink, rel8White } from '../../globals'
import { mobile } from '../../responsive'

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`
const TableBody = styled.tbody``
const TableRow = styled.tr`
`
const TableHead = styled.th`
    text-align: center;
    padding-bottom: 20px;
`
const TableData = styled.td`
    padding: 10px;
    background-color: ${rel8White};
    text-align: center;
    border-bottom: 2px solid ${rel8LightPink};

    ${
        mobile({
            padding:"2px",
        })
    }
`
export const NoAction = () => {
    return(
    <Table>
        <TableBody>
            <TableRow>
                <TableHead>Hello</TableHead>
                <TableHead>Hello</TableHead>
            </TableRow>
            <TableRow>
                <TableData>Hello Content</TableData>
                <TableData>Hello Content</TableData>
            </TableRow>
        </TableBody>
    </Table>
    )
}
export const DeleteOnly = ({deleteFn}) => {
  return (
    <Table>
        <TableBody>

            <TableRow>
                <TableHead>Hello</TableHead>
                <TableHead>Hello</TableHead>
            </TableRow>
            <TableRow>
                <TableData>Hello Content</TableData>
                <TableData>Hello Content</TableData>
                <TableData>
                    <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
            </TableRow>
        </TableBody>
    </Table>
  )
}

export const EditDeletOnly = ({editFn, deleteFn}) => {
  return (
    <Table>
        <TableBody>
            <TableRow>
                <TableHead>Hello</TableHead>
                <TableHead>Hello</TableHead>
            </TableRow>
            <TableRow>
                <TableData>Hello Content</TableData>
                <TableData>Hello Content</TableData>
                <TableData>
                    <EditIcon svgClick={editFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
                <TableData>
                    <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
            </TableRow>
        </TableBody>
    </Table>
  )
}
export const EditDeleteWriteOnly = ({deleteFn, editFn, writeFn}) => {
  return (
    <Table>
        <TableBody>
            <TableRow>
                <TableHead>Hello</TableHead>
                <TableHead>Hello</TableHead>
            </TableRow>
            <TableRow>
                <TableData>Hello Content</TableData>
                <TableData>Hello Content</TableData> 
                <TableData>
                    <PlusCircleIcon svgClick={writeFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
                <TableData>
                    <EditIcon svgClick={editFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
                <TableData>
                    <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                </TableData>
            </TableRow>
        </TableBody>
    </Table>
  )
}

export const MemberDelTable = ({deleteFn}) => {
    return (
      <Table>
          <TableBody>
  
              <TableRow>
                  <TableHead>Excos</TableHead>
                  <TableHead>Hello</TableHead>
              </TableRow>
              <TableRow>
                  <TableData>Hello Content</TableData>
                  <TableData>Hello Content</TableData>
                  <TableData>
                      <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                  </TableData>
              </TableRow>
          </TableBody>
      </Table>
    )
  }

  export const ExcoDelTable = ({deleteFn}) => {
    return (
      <Table>
          <TableBody>
  
              <TableRow>
                  <TableHead>Memeber</TableHead>
                  <TableHead>Hello</TableHead>
              </TableRow>
              <TableRow>
                  <TableData>Hello Content</TableData>
                  <TableData>Hello Content</TableData>
                  <TableData>
                      <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                  </TableData>
              </TableRow>
          </TableBody>
      </Table>
    )
  }

  export const AllDuesDel = ({deleteFn}) => {
    return (
        <Table>
            <TableBody>
    
                <TableRow>
                    <TableHead>All</TableHead>
                    <TableHead>Hello</TableHead>
                </TableRow>
                <TableRow>
                    <TableData>Hello Content</TableData>
                    <TableData>Hello Content</TableData>
                    <TableData>
                        <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                    </TableData>
                </TableRow>
            </TableBody>
        </Table>
      )
  }

  export const MemDuesDel = ({deleteFn}) => {
    return (
        <Table>
            <TableBody>
    
                <TableRow>
                    <TableHead>Mem Dues</TableHead>
                    <TableHead>Hello</TableHead>
                </TableRow>
                <TableRow>
                    <TableData>Hello Content</TableData>
                    <TableData>Hello Content</TableData>
                    <TableData>
                        <CancelIcon svgClick={deleteFn} style={{cursor:"pointer",width:"25px",height:"25px"}}/>
                    </TableData>
                </TableRow>
            </TableBody>
        </Table>
      )
  }