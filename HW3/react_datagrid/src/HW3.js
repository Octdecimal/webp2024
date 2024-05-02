import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function HW3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6");
      const json = await response.json();
      setData(json.map((item, index) => ({
        id: index,
        title: item.title,
        location: item.showInfo[0]?.location,
        price: item.showInfo[0]?.price
      })));
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'title', headerName: '名稱', width: 400 },
    { field: 'location', headerName: '地點', width: 250 },
    { field: 'price', headerName: '票價', width: 600 },
  ];

  return (
    <div style={{ height: 635, width: '100%' }}>
      <DataGrid 
        slots={{
          toolbar: GridToolbar,
        }}
        rows={data}
        columns={columns}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
}

export default HW3;